"use client"

import { use, useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ChevronDown, ChevronUp,
  RefreshCw, Trophy, AlertTriangle, ClipboardList, History
} from "lucide-react"
import Link from "next/link"
import { getDayPlan, getDrillsForAttempt, getAssessmentDrills } from "@/data/learning-plan"
import { useLearningStore } from "@/store/learning"
import { DrillCard } from "@/components/learning/DrillCard"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const WEEK_COLORS = ["#C14B2A", "#2A6B5A", "#4A6B8A", "#7A4A8A"]
const PASS_PHASE = 100   // % minimum to proceed to next phase (perfect score required)
const PASS_DAY   = 95    // % average to complete the day

function scoreColor(score: number) {
  if (score >= PASS_PHASE) return "#2A6B5A"
  if (score >= 60) return "#C8922A"
  return "#C14B2A"
}

const SCORABLE = ["mcq", "fill", "error_correct", "transform"]

export default function DayPage({ params }: { params: Promise<{ week: string; day: string }> }) {
  const { week: weekStr, day: dayStr } = use(params)
  const week = parseInt(weekStr)
  const day  = parseInt(dayStr)
  if (isNaN(week) || isNaN(day)) notFound()

  const plan = getDayPlan(week, day)
  if (!plan) notFound()

  const color = WEEK_COLORS[week - 1]

  const {
    saveDrillAnswer, completeDay, isDayComplete, getDayProgress,
    recordPhaseScore, retakeAssessment, retakePhase,
    getCurrentAttempt, getAssessmentAttempt,
    getLatestPhaseScore, getPhaseScoreHistory,
  } = useLearningStore()

  const dayProgress = getDayProgress(week, day)
  const alreadyComplete = isDayComplete(week, day)

  const [currentPhaseIdx, setCurrentPhaseIdx] = useState(0)
  const [theoryOpen, setTheoryOpen] = useState(true)
  const [marked, setMarked] = useState(alreadyComplete)
  // tracks which phase indices are currently in assessment mode (user clicked "Take Assessment")
  const [assessmentModes, setAssessmentModes] = useState<Set<number>>(new Set())
  // tracks which phases had their score recorded this session
  const [recordedPhases, setRecordedPhases] = useState<Set<string>>(new Set())

  const phase       = plan.phases[currentPhaseIdx]
  const totalPhases = plan.phases.length

  const learningAttempt    = getCurrentAttempt(week, day, phase.id)
  const assessmentAttempt  = getAssessmentAttempt(week, day, phase.id)

  const learningDrills = useMemo(
    () => getDrillsForAttempt(phase, learningAttempt),
    [phase, learningAttempt]
  )
  const assessDrills = useMemo(
    () => getAssessmentDrills(phase, assessmentAttempt),
    [phase, assessmentAttempt]
  )

  // ── Mode detection ─────────────────────────────────────────────────────────
  const allLearningDone = learningDrills.every(d => dayProgress.drills[d.id])
  const assessStarted   = assessDrills.some(d => dayProgress.drills[`__A__${d.id}`])
  const assessAllDone   = assessDrills.every(d => dayProgress.drills[`__A__${d.id}`])

  // Assessment mode: user clicked "Take Assessment" OR assessment already started
  const inAssessmentMode = assessmentModes.has(currentPhaseIdx) || assessStarted

  // ── Scoring ────────────────────────────────────────────────────────────────
  const assessScorableList = assessDrills.filter(d => SCORABLE.includes(d.type))
  const assessAnswered     = assessScorableList.filter(d => dayProgress.drills[`__A__${d.id}`]?.isCorrect !== undefined)
  const assessCorrect      = assessAnswered.filter(d => dayProgress.drills[`__A__${d.id}`]?.isCorrect === true)

  const assessScore = assessAllDone && assessAnswered.length > 0
    ? Math.round(assessCorrect.length / assessAnswered.length * 100)
    : -1

  const latestPhaseScore   = getLatestPhaseScore(week, day, phase.id)
  const phaseScoreHistory  = getPhaseScoreHistory(week, day, phase.id)
  const everPassed         = phaseScoreHistory.some(s => s.score >= PASS_PHASE)

  // Record score once per assessment attempt when it finishes
  const recordKey = `${phase.id}:${assessmentAttempt}`
  useEffect(() => {
    if (assessAllDone && assessScore >= 0 && !recordedPhases.has(recordKey)) {
      setRecordedPhases(s => new Set([...s, recordKey]))
      recordPhaseScore(week, day, phase.id, assessScore, assessmentAttempt, assessAnswered.length, assessCorrect.length)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assessAllDone, assessScore, recordKey])

  // ── Day average ────────────────────────────────────────────────────────────
  const avgScore = useMemo(() => {
    const bestScores = plan.phases.map(p => {
      const history = getPhaseScoreHistory(week, day, p.id)
      if (history.length === 0) return -1
      return Math.max(...history.map(s => s.score))
    })
    const valid = bestScores.filter(s => s >= 0)
    if (valid.length < plan.phases.length) return -1  // not all phases completed
    return Math.round(valid.reduce((a, b) => a + b, 0) / valid.length)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan.phases, dayProgress, week, day])

  const canCompleteDay = avgScore >= PASS_DAY && !marked

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleComplete = () => {
    completeDay(week, day)
    setMarked(true)
  }

  const handleTakeAssessment = () => {
    setAssessmentModes(s => new Set([...s, currentPhaseIdx]))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleRetakeAssessment = () => {
    const ids = assessDrills.map(d => d.id)
    retakeAssessment(week, day, phase.id, ids)
    // Stay in assessment mode; new attempt will have a new recordKey
    setAssessmentModes(s => new Set([...s, currentPhaseIdx]))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleRepractice = () => {
    const ids = learningDrills.map(d => d.id)
    retakePhase(week, day, phase.id, ids)
    // Exit assessment mode so learning drills show
    setAssessmentModes(s => { const n = new Set(s); n.delete(currentPhaseIdx); return n })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNextPhase = () => {
    if (currentPhaseIdx < totalPhases - 1 && (everPassed || assessScore >= PASS_PHASE)) {
      setCurrentPhaseIdx(i => i + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrevPhase = () => {
    if (currentPhaseIdx > 0) {
      setCurrentPhaseIdx(i => i - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // ── Progress ───────────────────────────────────────────────────────────────
  const learningAnsweredCount = learningDrills.filter(d => dayProgress.drills[d.id]).length
  const assessAnsweredCount   = assessDrills.filter(d => dayProgress.drills[`__A__${d.id}`]).length
  const totalDrills           = inAssessmentMode ? assessDrills.length : learningDrills.length
  const answeredCount         = inAssessmentMode ? assessAnsweredCount : learningAnsweredCount
  const pct                   = totalDrills > 0 ? Math.round(answeredCount / totalDrills * 100) : 0

  // Phase score to show in header
  const displayScore = latestPhaseScore?.score ?? (assessAllDone && assessScore >= 0 ? assessScore : undefined)

  return (
    <div className="min-h-dvh bg-[#EDE4D7]">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#EDE4D7]/90 backdrop-blur-sm border-b border-[#D8CCBF]">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-1">
            <Link href={`/learn/week/${week}`}>
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[#A89880] hover:text-[#1A1208] transition-colors cursor-pointer">
                ← Week {week}
              </span>
            </Link>
            <div className="text-center">
              <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest" style={{ color }}>
                Week {week} · Day {day}
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-sm font-bold text-[#1A1208]">
                {plan.title}
              </h1>
            </div>
            <Link href="/learn/history">
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[#A89880] hover:text-[#1A1208] transition-colors cursor-pointer flex items-center gap-1">
                <History size={10} /> History
              </span>
            </Link>
          </div>

          {/* Phase navigator */}
          <div className="flex items-center justify-between mt-1.5 mb-1.5">
            <button
              onClick={handlePrevPhase}
              disabled={currentPhaseIdx === 0}
              className="p-1 rounded-md disabled:opacity-30 hover:bg-[#D8CCBF]/40 transition-colors"
            >
              <ArrowLeft size={13} className="text-[#7A6248]" />
            </button>
            <div className="text-center">
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#7A6248]">
                Phase {currentPhaseIdx + 1}/{totalPhases}
                {inAssessmentMode && " · Assessment"}
              </span>
              {displayScore !== undefined && (
                <span
                  className="ml-2 text-[10px] font-[family-name:var(--font-mono)] font-bold"
                  style={{ color: scoreColor(displayScore) }}
                >
                  {displayScore}%
                </span>
              )}
            </div>
            <button
              onClick={handleNextPhase}
              disabled={currentPhaseIdx === totalPhases - 1 || !everPassed}
              className="p-1 rounded-md disabled:opacity-30 hover:bg-[#D8CCBF]/40 transition-colors"
            >
              <ArrowRight size={13} className="text-[#7A6248]" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-1 w-full rounded-full bg-[#D8CCBF] overflow-hidden">
            <motion.div
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: inAssessmentMode ? "#4A6B8A" : color }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4 pb-24">

        {/* Theory */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#E8DDD0] rounded-2xl overflow-hidden"
        >
          <button
            onClick={() => setTheoryOpen(v => !v)}
            className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <BookOpen size={13} style={{ color }} />
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest" style={{ color }}>
                Today&apos;s Theory
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880]">
                {plan.focus.length > 38 ? plan.focus.slice(0, 38) + "…" : plan.focus}
              </span>
              {theoryOpen ? <ChevronUp size={13} className="text-[#A89880]" /> : <ChevronDown size={13} className="text-[#A89880]" />}
            </div>
          </button>
          {theoryOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="px-5 pb-5 border-t border-[#F0E8DC]"
            >
              <div className="pt-4 prose prose-sm max-w-none">
                {plan.theory.split("\n").map((line, i) => {
                  if (!line.trim()) return <div key={i} className="h-2" />
                  const parts = line.split(/\*\*(.*?)\*\*/g)
                  return (
                    <p key={i} className="text-sm text-[#3A2A1A] font-[family-name:var(--font-inter)] leading-relaxed mb-1">
                      {parts.map((part, j) =>
                        j % 2 === 1 ? <strong key={j} className="font-semibold text-[#1A1208]">{part}</strong> : part
                      )}
                    </p>
                  )
                })}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Phase info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${currentPhaseIdx}-${inAssessmentMode}`}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.18 }}
            className={`border rounded-xl px-5 py-3 ${
              inAssessmentMode
                ? "bg-[#EEF4FA] border-[#4A6B8A]/30"
                : "bg-white border-[#E8DDD0]"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {inAssessmentMode
                ? <ClipboardList size={12} className="text-[#4A6B8A]" />
                : <BookOpen size={12} style={{ color }} />
              }
              <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest" style={{ color: inAssessmentMode ? "#4A6B8A" : color }}>
                {inAssessmentMode ? `Phase ${currentPhaseIdx + 1} Assessment` : phase.title}
              </p>
            </div>
            <p className="text-xs text-[#3A2A1A] font-[family-name:var(--font-inter)] leading-relaxed">
              {inAssessmentMode
                ? `10 questions — no hints or explanations. Score ≥ ${PASS_PHASE}% to proceed to the next phase.`
                : phase.objective
              }
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── ASSESSMENT MODE ─────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {inAssessmentMode ? (
            <motion.div
              key={`assess-${currentPhaseIdx}-${assessmentAttempt}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              {assessDrills.map((drill, i) => (
                <DrillCard
                  key={`__A__${drill.id}`}
                  drill={drill}
                  index={i}
                  isAssessment={true}
                  savedAnswer={dayProgress.drills[`__A__${drill.id}`]?.answer}
                  onComplete={(drillId, answer, isCorrect) =>
                    saveDrillAnswer(week, day, `__A__${drillId}`, answer, isCorrect)
                  }
                />
              ))}

              {/* Assessment result */}
              <AnimatePresence>
                {assessAllDone && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-2xl border px-5 py-4 ${
                      assessScore >= PASS_PHASE
                        ? "bg-[#EAF4F0] border-[#2A6B5A]/30"
                        : "bg-[#FEF0EC] border-[#C14B2A]/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {assessScore >= PASS_PHASE
                          ? <CheckCircle2 size={16} style={{ color: "#2A6B5A" }} />
                          : <AlertTriangle size={16} style={{ color: "#C14B2A" }} />
                        }
                        <p className="text-sm font-[family-name:var(--font-inter)] font-bold" style={{ color: scoreColor(assessScore) }}>
                          {assessScore >= PASS_PHASE ? "Phase Passed!" : "Score Too Low"}
                        </p>
                      </div>
                      <span className="text-2xl font-[family-name:var(--font-playfair)] font-bold" style={{ color: scoreColor(assessScore) }}>
                        {assessScore}%
                      </span>
                    </div>
                    <p className="text-[11px] font-[family-name:var(--font-mono)] text-[#7A6248] mb-3">
                      {assessCorrect.length}/{assessAnswered.length} correct
                      {assessScore < PASS_PHASE && ` · Need ${PASS_PHASE}% to proceed`}
                    </p>

                    <div className="h-1.5 w-full rounded-full bg-[#D8CCBF]/50 overflow-hidden mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${assessScore}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: scoreColor(assessScore) }}
                      />
                    </div>

                    {assessScore < PASS_PHASE ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-[#C14B2A] text-[#C14B2A] hover:bg-[#FEF0EC]"
                        onClick={handleRetakeAssessment}
                      >
                        <RefreshCw size={13} /> Retake Assessment
                      </Button>
                    ) : (
                      <div className="flex flex-col gap-2">
                        {currentPhaseIdx < totalPhases - 1 && (
                          <Button size="sm" className="w-full" onClick={handleNextPhase}>
                            Next Phase <ArrowRight size={12} />
                          </Button>
                        )}
                        <div className="flex gap-2">
                          <Button
                            variant="outline" size="sm" className="flex-1"
                            onClick={handleRepractice}
                          >
                            <BookOpen size={12} /> Re-practice
                          </Button>
                          <Button
                            variant="outline" size="sm" className="flex-1"
                            onClick={handleRetakeAssessment}
                          >
                            <RefreshCw size={12} /> Redo Assessment
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          ) : (
            /* ── LEARNING MODE ─────────────────────────────────────────────── */
            <motion.div
              key={`learn-${currentPhaseIdx}-${learningAttempt}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              {learningDrills.map((drill, i) => (
                <DrillCard
                  key={drill.id}
                  drill={drill}
                  index={i}
                  isAssessment={false}
                  savedAnswer={dayProgress.drills[drill.id]?.answer}
                  onComplete={(drillId, answer, isCorrect) =>
                    saveDrillAnswer(week, day, drillId, answer, isCorrect)
                  }
                />
              ))}

              {/* Learning complete → Take Assessment */}
              <AnimatePresence>
                {allLearningDone && !everPassed && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-[#4A6B8A]/30 bg-[#EEF4FA] px-5 py-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy size={16} className="text-[#4A6B8A]" />
                      <p className="text-sm font-[family-name:var(--font-inter)] font-bold text-[#4A6B8A]">
                        Learning Complete!
                      </p>
                    </div>
                    <p className="text-[11px] font-[family-name:var(--font-mono)] text-[#7A6248] mb-3">
                      All {learningDrills.length} practice questions answered. Take the 10-question assessment to proceed.
                    </p>
                    <Button
                      size="sm"
                      className="w-full bg-[#4A6B8A] hover:bg-[#3A5A79] text-white"
                      onClick={handleTakeAssessment}
                    >
                      <ClipboardList size={13} /> Take Assessment
                    </Button>
                  </motion.div>
                )}
                {allLearningDone && everPassed && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-[#2A6B5A]/30 bg-[#EAF4F0] px-5 py-4"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#2A6B5A]" />
                      <p className="text-sm font-[family-name:var(--font-inter)] font-bold text-[#2A6B5A]">
                        Phase {currentPhaseIdx + 1} Passed
                      </p>
                      <span className="ml-auto text-lg font-[family-name:var(--font-playfair)] font-bold text-[#2A6B5A]">
                        {Math.max(...phaseScoreHistory.map(s => s.score))}%
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 mt-3">
                      {currentPhaseIdx < totalPhases - 1 && (
                        <Button size="sm" className="w-full" onClick={handleNextPhase}>
                          Next Phase <ArrowRight size={12} />
                        </Button>
                      )}
                      <div className="flex gap-2">
                        <Button
                          variant="outline" size="sm" className="flex-1"
                          onClick={handleRepractice}
                        >
                          <BookOpen size={12} /> Re-practice
                        </Button>
                        <Button
                          variant="outline" size="sm" className="flex-1"
                          onClick={handleRetakeAssessment}
                        >
                          <RefreshCw size={12} /> Redo Assessment
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom phase navigation */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            disabled={currentPhaseIdx === 0}
            onClick={handlePrevPhase}
          >
            <ArrowLeft size={12} /> Phase {currentPhaseIdx}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            disabled={currentPhaseIdx === totalPhases - 1 || (!everPassed && assessScore < PASS_PHASE)}
            onClick={handleNextPhase}
          >
            Phase {currentPhaseIdx + 2} <ArrowRight size={12} />
          </Button>
        </div>

        {!everPassed && inAssessmentMode && !assessAllDone && (
          <p className="text-center text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] uppercase tracking-wider">
            Complete the assessment to unlock the next phase
          </p>
        )}

        {/* Day average score */}
        {avgScore >= 0 && (
          <div className="bg-white border border-[#E8DDD0] rounded-xl px-5 py-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#A89880]">
                Day average
              </p>
              <span className="font-[family-name:var(--font-playfair)] font-bold text-lg" style={{ color: scoreColor(avgScore) }}>
                {avgScore}%
              </span>
            </div>
            {avgScore < PASS_DAY && (
              <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] mt-1">
                Need ≥ {PASS_DAY}% average across all {totalPhases} phases to complete today
              </p>
            )}
          </div>
        )}

        {/* Mark day complete */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {marked ? (
            <div className="flex items-center justify-center gap-2 py-4 bg-[#EAF4F0] border border-[#2A6B5A]/30 rounded-2xl">
              <CheckCircle2 size={16} className="text-[#2A6B5A]" />
              <span className="text-sm font-[family-name:var(--font-inter)] font-semibold text-[#2A6B5A]">
                Day {day} Complete!
              </span>
            </div>
          ) : (
            <Button
              size="lg"
              variant="success"
              className="w-full"
              disabled={!canCompleteDay}
              onClick={handleComplete}
            >
              <CheckCircle2 size={14} />
              Mark Day {day} Complete
            </Button>
          )}
          {!canCompleteDay && !marked && (
            <p className="text-center text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] mt-2 uppercase tracking-wider">
              {avgScore < 0
                ? `Complete all ${totalPhases} phase assessments first`
                : avgScore < PASS_DAY
                  ? `Average ≥ ${PASS_DAY}% required · Current: ${avgScore}%`
                  : "Complete all phases first"
              }
            </p>
          )}
        </motion.div>

        {/* Next day / week */}
        {marked && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
            {day < 5 ? (
              <Link href={`/learn/day/${week}/${day + 1}`}>
                <Button variant="outline" size="sm" className="w-full">
                  Next: Day {day + 1} →
                </Button>
              </Link>
            ) : week < 4 ? (
              <Link href={`/learn/week/${week + 1}`}>
                <Button variant="outline" size="sm" className="w-full">
                  Next: Week {week + 1} →
                </Button>
              </Link>
            ) : (
              <Link href="/learn">
                <Button variant="outline" size="sm" className="w-full">
                  Back to Overview →
                </Button>
              </Link>
            )}
          </motion.div>
        )}
      </main>
    </div>
  )
}

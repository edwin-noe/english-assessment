"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Drill } from "@/data/learning-plan"
import { DrillMCQ } from "./DrillMCQ"
import { DrillFill } from "./DrillFill"
import { DrillOpen } from "./DrillOpen"

const TYPE_LABEL: Record<string, string> = {
  mcq:           "Multiple Choice",
  fill:          "Fill in the Blank",
  writing:       "Writing",
  speaking:      "Speaking",
  transform:     "Transform",
  error_correct: "Error Correction",
}

interface Props {
  drill: Drill
  index: number
  savedAnswer?: string
  isAssessment?: boolean   // Assessment phase: hide explanation & hint
  onComplete: (drillId: string, answer: string, isCorrect?: boolean) => void
}

function computeIsCorrect(drill: Drill, answer: string): boolean | undefined {
  if (drill.type === "mcq") {
    return answer === drill.correct
  }
  if (drill.type === "fill") {
    try {
      const inputs: string[] = JSON.parse(answer)
      const blanks = drill.blanks ?? []
      return blanks.every((b, i) => inputs[i]?.trim().toLowerCase() === b.toLowerCase())
    } catch {
      return undefined
    }
  }
  if (drill.type === "error_correct" || drill.type === "transform") {
    if (!drill.correct) return undefined
    return answer.trim().toLowerCase() === drill.correct.trim().toLowerCase()
  }
  return undefined  // writing / speaking: not auto-scored
}

export function DrillCard({ drill, index, savedAnswer, isAssessment = false, onComplete }: Props) {
  const [answer, setAnswer] = useState(savedAnswer ?? "")
  const [revealed, setRevealed] = useState(!!savedAnswer)

  const isCorrect = revealed ? computeIsCorrect(drill, answer) : undefined
  const isAutoScored = ["mcq", "fill", "error_correct", "transform"].includes(drill.type)

  const canReveal = drill.type === "speaking"
    ? true
    : answer.trim().length > 0

  const handleMCQSelect = (id: string) => {
    if (revealed) return
    setAnswer(id)
    setRevealed(true)
    onComplete(drill.id, id, id === drill.correct)
  }

  const handleReveal = () => {
    if (!canReveal || revealed) return
    setRevealed(true)
    const ic = computeIsCorrect(drill, answer)
    onComplete(drill.id, answer, ic)
  }

  const feedbackText = () => {
    if (!isAutoScored) return null
    if (isCorrect === true) return "Correct!"
    if (isCorrect === false) return "Incorrect"
    return null
  }

  const correctAnswerText = () => {
    if (isCorrect !== false) return null
    if (drill.type === "mcq" && drill.correct && drill.options) {
      const opt = drill.options.find(o => o.id === drill.correct)
      return opt ? `${drill.correct.toUpperCase()}. ${opt.text}` : null
    }
    if (drill.type === "fill") return (drill.blanks ?? []).join(" / ")
    if (drill.type === "error_correct" || drill.type === "transform") return drill.correct ?? null
    return null
  }

  // Show explanation content — this content is in Indonesian (grammar notes)
  const explanationText = drill.note ?? drill.explanation ?? drill.hint

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-white border border-[#E8DDD0] rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-[#F0E8DC]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880]">
            {index + 1}
          </span>
          <span className="text-[9px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#C14B2A] bg-[#FEF0EC] px-2 py-0.5 rounded-full">
            {TYPE_LABEL[drill.type]}
          </span>
          {isAssessment && (
            <span className="text-[9px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#4A6B8A] bg-[#EEF4FA] px-2 py-0.5 rounded-full">
              Assessment
            </span>
          )}
        </div>
        <p className="text-sm text-[#1A1208] leading-relaxed font-[family-name:var(--font-inter)] whitespace-pre-line">
          {drill.prompt}
        </p>
        {drill.context && (
          <p className="mt-2 text-[11px] text-[#7A6248] font-[family-name:var(--font-mono)] leading-relaxed italic">
            {drill.context}
          </p>
        )}
      </div>

      {/* Input area */}
      <div className="px-5 py-4">
        {drill.type === "mcq" && (
          <DrillMCQ
            drill={drill}
            selected={answer || undefined}
            revealed={revealed}
            onSelect={handleMCQSelect}
          />
        )}
        {drill.type === "fill" && (
          <DrillFill
            drill={drill}
            value={answer}
            revealed={revealed}
            onChange={setAnswer}
          />
        )}
        {(drill.type === "writing" || drill.type === "speaking" || drill.type === "transform" || drill.type === "error_correct") && (
          <DrillOpen
            drill={drill}
            value={answer}
            revealed={revealed}
            onChange={setAnswer}
          />
        )}
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 space-y-3">

        {!revealed && drill.type !== "mcq" && (
          <Button
            onClick={handleReveal}
            disabled={!canReveal}
            size="sm"
            className="w-full"
          >
            Check Answer
          </Button>
        )}

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              {isAutoScored && isCorrect !== undefined && (
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-[family-name:var(--font-inter)] font-semibold ${
                  isCorrect
                    ? "bg-[#EAF4F0] text-[#2A6B5A]"
                    : "bg-[#FEF0EC] text-[#C14B2A]"
                }`}>
                  {isCorrect
                    ? <CheckCircle2 size={14} className="flex-shrink-0" />
                    : <XCircle size={14} className="flex-shrink-0" />
                  }
                  <span>{feedbackText()}</span>
                </div>
              )}

              {isCorrect === false && correctAnswerText() && (
                <div className="px-3 py-2 rounded-lg bg-[#F5F0E8] border border-[#E8DDD0]">
                  <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#A89880] mb-1">
                    Correct answer:
                  </p>
                  <p className="text-sm font-[family-name:var(--font-inter)] text-[#1A1208] leading-relaxed">
                    {correctAnswerText()}
                  </p>
                </div>
              )}

              {/* Explanation content — only shown in learning mode, not assessment */}
              {!isAssessment && explanationText && (
                <div className="px-3 py-2.5 rounded-lg bg-[#F5F0E8]">
                  <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#A89880] mb-1">
                    Explanation:
                  </p>
                  <p className="text-xs text-[#3A2A1A] font-[family-name:var(--font-inter)] leading-relaxed">
                    {explanationText}
                  </p>
                </div>
              )}

              {(!isAutoScored || isCorrect === undefined) && (
                <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] text-center">
                  ✓ Answer saved
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

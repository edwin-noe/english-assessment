"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface DrillRecord {
  answer: string
  isCorrect?: boolean
  completedAt: string
}

export interface PhaseScore {
  score: number          // 0-100, atau -1 jika tidak bisa dinilai otomatis
  attempt: number
  drillsDone: number
  drillsCorrect: number
  completedAt: string
}

interface DayRecord {
  completedAt?: string
  drills: Record<string, DrillRecord>
  phaseScores: Record<string, PhaseScore[]>        // phaseId → score history
  phaseAttempts: Record<string, number>            // phaseId → learning attempt number
  assessmentAttempts: Record<string, number>       // phaseId → assessment attempt number
}

// key = "w{week}d{day}"
type ProgressMap = Record<string, DayRecord>

interface LearningState {
  userKey: string
  progress: ProgressMap

  saveDrillAnswer: (week: number, day: number, drillId: string, answer: string, isCorrect?: boolean) => void
  completeDay: (week: number, day: number) => void
  isDayComplete: (week: number, day: number) => boolean
  getDayProgress: (week: number, day: number) => DayRecord
  getDrillAnswer: (week: number, day: number, drillId: string) => DrillRecord | undefined
  getWeekCompletionPct: (week: number, totalDays: number) => number

  // Phase scoring
  recordPhaseScore: (week: number, day: number, phaseId: string, score: number, attempt: number, drillsDone: number, drillsCorrect: number) => void
  retakePhase: (week: number, day: number, phaseId: string, drillIds: string[]) => void
  getCurrentAttempt: (week: number, day: number, phaseId: string) => number
  getLatestPhaseScore: (week: number, day: number, phaseId: string) => PhaseScore | undefined
  getPhaseScoreHistory: (week: number, day: number, phaseId: string) => PhaseScore[]

  // Assessment attempt tracking
  getAssessmentAttempt: (week: number, day: number, phaseId: string) => number
  retakeAssessment: (week: number, day: number, phaseId: string, drillIds: string[]) => void

  // History (all phase assessment scores across all days)
  getAllHistory: () => Array<{
    week: number
    day: number
    phaseId: string
    scores: PhaseScore[]
  }>
}

function dayKey(week: number, day: number) {
  return `w${week}d${day}`
}

function emptyDay(): DayRecord {
  return { drills: {}, phaseScores: {}, phaseAttempts: {}, assessmentAttempts: {} }
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      userKey: `user_${Date.now()}`,
      progress: {},

      saveDrillAnswer: (week, day, drillId, answer, isCorrect) => {
        const key = dayKey(week, day)
        set((state) => {
          const d = state.progress[key] ?? emptyDay()
          return {
            progress: {
              ...state.progress,
              [key]: {
                ...d,
                drills: {
                  ...d.drills,
                  [drillId]: { answer, isCorrect, completedAt: new Date().toISOString() },
                },
              },
            },
          }
        })

        const { userKey } = get()
        fetch("/api/learning", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userKey, week, day, drillId, answer, isCorrect }),
        }).catch(() => {})
      },

      completeDay: (week, day) => {
        const key = dayKey(week, day)
        set((state) => ({
          progress: {
            ...state.progress,
            [key]: {
              ...(state.progress[key] ?? emptyDay()),
              completedAt: new Date().toISOString(),
            },
          },
        }))

        const { userKey } = get()
        fetch("/api/learning", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userKey, week, day }),
        }).catch(() => {})
      },

      isDayComplete: (week, day) => {
        return !!get().progress[dayKey(week, day)]?.completedAt
      },

      getDayProgress: (week, day) => {
        return get().progress[dayKey(week, day)] ?? emptyDay()
      },

      getDrillAnswer: (week, day, drillId) => {
        return get().progress[dayKey(week, day)]?.drills[drillId]
      },

      getWeekCompletionPct: (week, totalDays) => {
        const completed = Array.from({ length: totalDays }, (_, i) => i + 1).filter((d) =>
          get().isDayComplete(week, d)
        ).length
        return Math.round((completed / totalDays) * 100)
      },

      // ── Phase scoring ──────────────────────────────────────────────────────

      recordPhaseScore: (week, day, phaseId, score, attempt, drillsDone, drillsCorrect) => {
        const key = dayKey(week, day)
        const entry: PhaseScore = { score, attempt, drillsDone, drillsCorrect, completedAt: new Date().toISOString() }
        set((state) => {
          const d = state.progress[key] ?? emptyDay()
          const prev = d.phaseScores[phaseId] ?? []
          // Replace the entry for this attempt, or append
          const next = prev.filter(p => p.attempt !== attempt).concat(entry)
          return {
            progress: {
              ...state.progress,
              [key]: { ...d, phaseScores: { ...d.phaseScores, [phaseId]: next } },
            },
          }
        })
      },

      retakePhase: (week, day, phaseId, drillIds) => {
        const key = dayKey(week, day)
        set((state) => {
          const d = state.progress[key] ?? emptyDay()
          // Remove drill records for this phase
          const newDrills = { ...d.drills }
          drillIds.forEach((id) => { delete newDrills[id] })
          const nextAttempt = (d.phaseAttempts[phaseId] ?? 1) + 1
          return {
            progress: {
              ...state.progress,
              [key]: {
                ...d,
                drills: newDrills,
                phaseAttempts: { ...d.phaseAttempts, [phaseId]: nextAttempt },
              },
            },
          }
        })
      },

      getCurrentAttempt: (week, day, phaseId) => {
        return get().progress[dayKey(week, day)]?.phaseAttempts[phaseId] ?? 1
      },

      getAssessmentAttempt: (week, day, phaseId) => {
        return get().progress[dayKey(week, day)]?.assessmentAttempts?.[phaseId] ?? 1
      },

      retakeAssessment: (week, day, phaseId, drillIds) => {
        const key = dayKey(week, day)
        set((state) => {
          const d = state.progress[key] ?? emptyDay()
          const newDrills = { ...d.drills }
          drillIds.forEach((id) => { delete newDrills[`__A__${id}`] })
          const nextAttempt = (d.assessmentAttempts?.[phaseId] ?? 1) + 1
          return {
            progress: {
              ...state.progress,
              [key]: {
                ...d,
                drills: newDrills,
                assessmentAttempts: { ...d.assessmentAttempts, [phaseId]: nextAttempt },
              },
            },
          }
        })
      },

      getLatestPhaseScore: (week, day, phaseId) => {
        const history = get().progress[dayKey(week, day)]?.phaseScores[phaseId] ?? []
        return history.length > 0 ? history[history.length - 1] : undefined
      },

      getPhaseScoreHistory: (week, day, phaseId) => {
        return get().progress[dayKey(week, day)]?.phaseScores[phaseId] ?? []
      },

      getAllHistory: () => {
        const { progress } = get()
        const result: Array<{ week: number; day: number; phaseId: string; scores: PhaseScore[] }> = []
        for (const [key, dayRecord] of Object.entries(progress)) {
          const m = key.match(/^w(\d+)d(\d+)$/)
          if (!m) continue
          const week = parseInt(m[1])
          const day = parseInt(m[2])
          for (const [phaseId, scores] of Object.entries(dayRecord.phaseScores ?? {})) {
            if (scores.length > 0) {
              result.push({ week, day, phaseId, scores })
            }
          }
        }
        return result.sort((a, b) => {
          const aLast = a.scores[a.scores.length - 1].completedAt
          const bLast = b.scores[b.scores.length - 1].completedAt
          return new Date(bLast).getTime() - new Date(aLast).getTime()
        })
      },
    }),
    {
      name: "english-learning",
    }
  )
)

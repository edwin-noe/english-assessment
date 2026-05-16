"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Answer, AssessmentSession } from "@/types"
import { questions } from "@/data/questions"
import { generateSessionId } from "@/lib/utils"

interface AssessmentState {
  sessionId: string
  currentIndex: number
  answers: Record<string, string>
  started: boolean
  submitted: boolean

  start: () => void
  setAnswer: (questionId: string, value: string) => void
  goNext: () => void
  goPrev: () => void
  goTo: (index: number) => void
  submit: () => void
  reset: () => void
  getExportData: () => AssessmentSession
}

async function persistAnswer(sessionId: string, answer: Answer) {
  await fetch("/api/answers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionKey: sessionId, answer }),
  }).catch(() => {})
}

export const useAssessmentStore = create<AssessmentState>()(
  persist(
    (set, get) => ({
      sessionId: generateSessionId(),
      currentIndex: 0,
      answers: {},
      started: false,
      submitted: false,

      start: () => {
        const { sessionId } = get()
        set({ started: true })
        // Register session in DB (fire-and-forget)
        fetch("/api/sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionKey: sessionId }),
        }).catch(() => {})
      },

      setAnswer: (questionId, value) => {
        set((state) => ({
          answers: { ...state.answers, [questionId]: value },
        }))
        const { sessionId } = get()
        const q = questions.find((q) => q.id === questionId)
        if (q) {
          persistAnswer(sessionId, {
            question_id: questionId,
            section: q.section,
            question: q.question,
            answer: value,
            type: q.type,
          })
        }
      },

      goNext: () =>
        set((state) => ({
          currentIndex: Math.min(state.currentIndex + 1, questions.length - 1),
        })),

      goPrev: () =>
        set((state) => ({
          currentIndex: Math.max(state.currentIndex - 1, 0),
        })),

      goTo: (index) =>
        set({ currentIndex: Math.max(0, Math.min(index, questions.length - 1)) }),

      submit: () => {
        const { sessionId, answers } = get()
        set({ submitted: true })
        // Bulk-save all answers then mark complete
        const allAnswers: Answer[] = questions.map((q) => ({
          question_id: q.id,
          section: q.section,
          question: q.question,
          answer: answers[q.id] ?? "",
          type: q.type,
        }))
        fetch(`/api/sessions/${sessionId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionKey: sessionId, answers: allAnswers }),
        }).catch(() => {})
      },

      reset: () =>
        set({
          sessionId: generateSessionId(),
          currentIndex: 0,
          answers: {},
          started: false,
          submitted: false,
        }),

      getExportData: (): AssessmentSession => {
        const { sessionId, answers } = get()
        return {
          session_id: sessionId,
          timestamp: new Date().toISOString(),
          answers: questions.map((q) => ({
            question_id: q.id,
            section: q.section,
            question: q.question,
            answer: answers[q.id] ?? "",
            type: q.type,
          })),
        }
      },
    }),
    {
      name: "english-assessment",
      partialize: (state) => ({
        sessionId: state.sessionId,
        currentIndex: state.currentIndex,
        answers: state.answers,
        started: state.started,
        submitted: state.submitted,
      }),
    }
  )
)

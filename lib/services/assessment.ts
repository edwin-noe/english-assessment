import { sessionRepository } from "@/lib/db/sessions"
import { answerRepository, UpsertAnswerInput } from "@/lib/db/answers"
import { questions } from "@/data/questions"
import { Answer } from "@/types"

export const assessmentService = {
  /**
   * Get or create a session by its client-side session key.
   */
  async getOrCreateSession(sessionKey: string) {
    return sessionRepository.upsertByKey(sessionKey)
  },

  /**
   * Persist a single answer. Creates the session row if needed.
   */
  async saveAnswer(sessionKey: string, answer: Answer) {
    const session = await sessionRepository.upsertByKey(sessionKey)
    return answerRepository.upsert({
      sessionId: session.id,
      questionId: answer.question_id,
      section: answer.section,
      question: answer.question,
      answer: answer.answer,
      type: answer.type,
    })
  },

  /**
   * Bulk-save all answers at once (used on submit).
   */
  async saveAllAnswers(sessionKey: string, answers: Answer[]) {
    const session = await sessionRepository.upsertByKey(sessionKey)
    const inputs: UpsertAnswerInput[] = answers
      .filter((a) => a.answer.trim())
      .map((a) => ({
        sessionId: session.id,
        questionId: a.question_id,
        section: a.section,
        question: a.question,
        answer: a.answer,
        type: a.type,
      }))
    if (inputs.length > 0) {
      await answerRepository.upsertMany(inputs)
    }
    return session
  },

  /**
   * Mark a session as complete and return export-ready JSON.
   */
  async completeSession(sessionKey: string) {
    const session = await sessionRepository.findByKey(sessionKey)
    if (!session) throw new Error("Session not found")

    await sessionRepository.complete(session.id)

    const dbAnswers = await answerRepository.findBySession(session.id)
    const answerMap = new Map(dbAnswers.map((a) => [a.questionId, a.answer]))

    return {
      session_id: sessionKey,
      db_session_id: session.id,
      timestamp: new Date().toISOString(),
      answers: questions.map((q) => ({
        question_id: q.id,
        section: q.section,
        question: q.question,
        answer: answerMap.get(q.id) ?? "",
        type: q.type,
      })),
    }
  },

  /**
   * Build export JSON from a completed session by DB id.
   */
  async getExportById(sessionDbId: string) {
    const session = await sessionRepository.findById(sessionDbId)
    if (!session) return null

    const answerMap = new Map(session.answers.map((a) => [a.questionId, a.answer]))

    return {
      session_id: session.sessionKey,
      db_session_id: session.id,
      timestamp: session.completedAt?.toISOString() ?? session.createdAt.toISOString(),
      answers: questions.map((q) => ({
        question_id: q.id,
        section: q.section,
        question: q.question,
        answer: answerMap.get(q.id) ?? "",
        type: q.type,
      })),
    }
  },
}

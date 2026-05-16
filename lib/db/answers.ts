import { prisma } from "./client"

export interface UpsertAnswerInput {
  sessionId: string
  questionId: string
  section: string
  question: string
  answer: string
  type: string
}

export const answerRepository = {
  async upsert(data: UpsertAnswerInput) {
    return prisma.answer.upsert({
      where: { sessionId_questionId: { sessionId: data.sessionId, questionId: data.questionId } },
      create: data,
      update: { answer: data.answer },
    })
  },

  async upsertMany(answers: UpsertAnswerInput[]) {
    return prisma.$transaction(
      answers.map((a) =>
        prisma.answer.upsert({
          where: { sessionId_questionId: { sessionId: a.sessionId, questionId: a.questionId } },
          create: a,
          update: { answer: a.answer },
        })
      )
    )
  },

  async findBySession(sessionId: string) {
    return prisma.answer.findMany({
      where: { sessionId },
      orderBy: { createdAt: "asc" },
    })
  },
}

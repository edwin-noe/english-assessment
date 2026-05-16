import { prisma } from "./client"

export async function upsertLearningDay(userKey: string, week: number, day: number) {
  return prisma.learningDay.upsert({
    where: { userKey_week_day: { userKey, week, day } },
    create: { userKey, week, day },
    update: {},
  })
}

export async function completeLearningDay(userKey: string, week: number, day: number) {
  return prisma.learningDay.upsert({
    where: { userKey_week_day: { userKey, week, day } },
    create: { userKey, week, day, completedAt: new Date() },
    update: { completedAt: new Date() },
  })
}

export async function saveDrillAnswer(
  userKey: string,
  week: number,
  day: number,
  drillId: string,
  answer: string,
  isCorrect?: boolean
) {
  const learningDay = await upsertLearningDay(userKey, week, day)
  return prisma.drillAnswer.upsert({
    where: { learningDayId_drillId: { learningDayId: learningDay.id, drillId } },
    create: { learningDayId: learningDay.id, drillId, answer, isCorrect },
    update: { answer, isCorrect },
  })
}

export async function getLearningProgress(userKey: string) {
  return prisma.learningDay.findMany({
    where: { userKey },
    include: { drillAnswers: true },
    orderBy: [{ week: "asc" }, { day: "asc" }],
  })
}

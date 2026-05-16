import { prisma } from "./client"
import { Prisma } from "@prisma/client"

export type SessionWithAnswers = Prisma.SessionGetPayload<{ include: { answers: true } }>

export const sessionRepository = {
  async findByKey(sessionKey: string) {
    return prisma.session.findUnique({ where: { sessionKey }, include: { answers: true } })
  },

  async findById(id: string) {
    return prisma.session.findUnique({ where: { id }, include: { answers: true } })
  },

  async create(sessionKey: string) {
    return prisma.session.create({ data: { sessionKey } })
  },

  async upsertByKey(sessionKey: string) {
    return prisma.session.upsert({
      where: { sessionKey },
      create: { sessionKey },
      update: {},
    })
  },

  async complete(sessionId: string) {
    return prisma.session.update({
      where: { id: sessionId },
      data: { completedAt: new Date() },
    })
  },

  async list(limit = 50) {
    return prisma.session.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
      include: { _count: { select: { answers: true } } },
    })
  },
}

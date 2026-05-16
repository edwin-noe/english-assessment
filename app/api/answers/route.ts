import { NextRequest, NextResponse } from "next/server"
import { assessmentService } from "@/lib/services/assessment"

// POST /api/answers — save a single answer (called on every answer change)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { sessionKey, answer } = body

    if (!sessionKey || !answer?.question_id) {
      return NextResponse.json({ error: "sessionKey and answer.question_id are required" }, { status: 400 })
    }

    await assessmentService.saveAnswer(sessionKey, answer)
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error("[POST /api/answers]", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

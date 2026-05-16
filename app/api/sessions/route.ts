import { NextRequest, NextResponse } from "next/server"
import { assessmentService } from "@/lib/services/assessment"
import { sessionRepository } from "@/lib/db/sessions"

// POST /api/sessions — create or resume a session
export async function POST(req: NextRequest) {
  try {
    const { sessionKey } = await req.json()
    if (!sessionKey || typeof sessionKey !== "string") {
      return NextResponse.json({ error: "sessionKey is required" }, { status: 400 })
    }
    const session = await assessmentService.getOrCreateSession(sessionKey)
    return NextResponse.json({ id: session.id, sessionKey: session.sessionKey }, { status: 201 })
  } catch (err) {
    console.error("[POST /api/sessions]", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// GET /api/sessions — list recent sessions
export async function GET() {
  try {
    const sessions = await sessionRepository.list()
    return NextResponse.json(sessions)
  } catch (err) {
    console.error("[GET /api/sessions]", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

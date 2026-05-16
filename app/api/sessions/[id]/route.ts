import { NextRequest, NextResponse } from "next/server"
import { assessmentService } from "@/lib/services/assessment"

// POST /api/sessions/:sessionKey/complete — mark session done + return export JSON
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json().catch(() => ({}))
    const sessionKey = body.sessionKey ?? id

    const exportData = await assessmentService.completeSession(sessionKey)
    return NextResponse.json(exportData)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error"
    const status = message === "Session not found" ? 404 : 500
    console.error("[POST /api/sessions/:id]", err)
    return NextResponse.json({ error: message }, { status })
  }
}

// GET /api/sessions/:dbId — get export JSON for a session by DB id
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const data = await assessmentService.getExportById(id)
    if (!data) return NextResponse.json({ error: "Not found" }, { status: 404 })
    return NextResponse.json(data)
  } catch (err) {
    console.error("[GET /api/sessions/:id]", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from "next/server"
import { saveDrillAnswer, completeLearningDay, getLearningProgress } from "@/lib/db/learning"

export async function POST(req: NextRequest) {
  try {
    const { userKey, week, day, drillId, answer, isCorrect } = await req.json()
    if (!userKey || !week || !day || !drillId || answer === undefined) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }
    const result = await saveDrillAnswer(userKey, week, day, drillId, answer, isCorrect)
    return NextResponse.json({ ok: true, id: result.id })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Failed to save" }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { userKey, week, day } = await req.json()
    if (!userKey || !week || !day) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }
    await completeLearningDay(userKey, week, day)
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Failed to complete day" }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const userKey = req.nextUrl.searchParams.get("userKey")
    if (!userKey) return NextResponse.json({ error: "Missing userKey" }, { status: 400 })
    const progress = await getLearningProgress(userKey)
    return NextResponse.json({ progress })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}

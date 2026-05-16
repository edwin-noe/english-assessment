import { Drill } from "./learning-plan"

// ── Compact MCQ builder ───────────────────────────────────────────────────────
// opts = ["a:text", "b:text", "c:text", "d:text"]
export function mcq(
  id: string,
  prompt: string,
  opts: [string, string, string, string],
  correct: "a" | "b" | "c" | "d",
  explanation?: string
): Drill {
  return {
    id,
    type: "mcq",
    prompt,
    options: opts.map((o) => ({ id: o[0], text: o.slice(2) })),
    correct,
    explanation,
  }
}

// ── Compact Fill builder ──────────────────────────────────────────────────────
export function fill(
  id: string,
  prompt: string,
  blanks: string[],
  explanation?: string
): Drill {
  return { id, type: "fill", prompt, blanks, explanation }
}

// ── Error correction ──────────────────────────────────────────────────────────
export function fix(
  id: string,
  prompt: string,
  correct: string,
  explanation?: string
): Drill {
  return { id, type: "error_correct", prompt, correct, explanation }
}

// ── Transform ─────────────────────────────────────────────────────────────────
export function transform(
  id: string,
  prompt: string,
  correct: string,
  hint?: string
): Drill {
  return { id, type: "transform", prompt, correct, hint }
}

// ── Writing / speaking ────────────────────────────────────────────────────────
export function write(
  id: string,
  prompt: string,
  wordLimit?: number,
  hint?: string,
  correct?: string
): Drill {
  return { id, type: "writing", prompt, wordLimit, hint, correct }
}

export function speak(
  id: string,
  prompt: string,
  hint?: string
): Drill {
  return { id, type: "speaking", prompt, hint }
}

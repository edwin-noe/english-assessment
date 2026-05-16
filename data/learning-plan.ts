// ─── Types ───────────────────────────────────────────────────────────────────

export type DrillType =
  | "mcq" | "fill" | "writing" | "speaking" | "transform" | "error_correct"

export interface DrillOption { id: string; text: string }

export interface Drill {
  id: string
  type: DrillType
  prompt: string
  context?: string
  options?: DrillOption[]
  correct?: string
  blanks?: string[]
  hint?: string
  explanation?: string
  note?: string        // Penjelasan dalam Bahasa Indonesia
  wordLimit?: number
}

// Bank of 25 drills per phase.
// Attempt 1 → drills[0..19]  (first 20)
// Attempt 2 → drills[5..24]  (15 fresh + 5 review)
// Attempt 3+ → seeded-shuffle of all 25, pick 20
export interface Phase {
  id: string
  phaseNumber: number
  title: string
  objective: string
  drills: Drill[]
}

export interface DayPlan {
  week: number
  day: number
  title: string
  focus: string
  theory: string
  phases: Phase[]
}

// ─── Week metadata ────────────────────────────────────────────────────────────

export const WEEK_TITLES: Record<number, { title: string; theme: string }> = {
  1: { title: "Perfect Tenses & Passive Voice", theme: "Your #1 diagnostic weakness — 33% grammar score." },
  2: { title: "Fossilised Grammar Errors",       theme: "Articles, agreement, conditionals, inversions." },
  3: { title: "Professional Writing",            theme: "Emails, bug reports, status updates, explanations." },
  4: { title: "Speaking & Workplace Simulation", theme: "Stand-ups, proposals, client calls, disagreement." },
}

// ─── Drill selection per attempt ──────────────────────────────────────────────

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr]
  let s = seed
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function getDrillsForAttempt(phase: Phase, attemptNumber: number): Drill[] {
  const bank = phase.drills
  if (attemptNumber <= 1) return bank.slice(0, 20)
  if (attemptNumber === 2) return bank.length >= 25 ? bank.slice(5, 25) : bank.slice(0, 20)
  return seededShuffle(bank, attemptNumber * 997).slice(0, 20)
}

// Returns 10 assessment drills from the same bank, using a different seed offset
// so they differ from getDrillsForAttempt for the same attempt.
export function getAssessmentDrills(phase: Phase, attemptNumber: number): Drill[] {
  const bank = phase.drills
  return seededShuffle(bank, attemptNumber * 4987 + 31337).slice(0, Math.min(10, bank.length))
}

// ─── Data ─────────────────────────────────────────────────────────────────────

import { WEEK1_DAYS } from "./weeks/week1"
import { WEEK2_DAYS } from "./weeks/week2"
import { WEEK3_DAYS } from "./weeks/week3"
import { WEEK4_DAYS } from "./weeks/week4"

export const LEARNING_PLAN: DayPlan[] = [
  ...WEEK1_DAYS,
  ...WEEK2_DAYS,
  ...WEEK3_DAYS,
  ...WEEK4_DAYS,
]

export function getDayPlan(week: number, day: number): DayPlan | undefined {
  return LEARNING_PLAN.find((d) => d.week === week && d.day === day)
}

export function getWeekDays(week: number): DayPlan[] {
  return LEARNING_PLAN.filter((d) => d.week === week)
}

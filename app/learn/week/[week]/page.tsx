"use client"

import { use } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { WEEK_TITLES, getWeekDays } from "@/data/learning-plan"
import { useLearningStore } from "@/store/learning"
import { notFound } from "next/navigation"

const WEEK_COLORS = ["#C14B2A", "#2A6B5A", "#4A6B8A", "#7A4A8A"]

export default function WeekPage({ params }: { params: Promise<{ week: string }> }) {
  const { week: weekStr } = use(params)
  const week = parseInt(weekStr)
  if (isNaN(week) || week < 1 || week > 4) notFound()

  const days = getWeekDays(week)
  const info = WEEK_TITLES[week]
  const color = WEEK_COLORS[week - 1]
  const { isDayComplete, getDayProgress } = useLearningStore()

  return (
    <div className="min-h-dvh bg-[#EDE4D7] px-4 py-12">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/learn">
            <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[#A89880] hover:text-[#1A1208] transition-colors cursor-pointer">
              ← Learning Plan
            </span>
          </Link>
          <div className="mt-6">
            <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] mb-2" style={{ color }}>
              Week {week}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1A1208] mb-2">
              {info.title}
            </h1>
            <p className="text-sm text-[#7A6248] font-[family-name:var(--font-inter)] leading-relaxed">
              {info.theme}
            </p>
          </div>
        </motion.div>

        {/* Day list */}
        <div className="space-y-3">
          {days.map((dayPlan, i) => {
            const done = isDayComplete(week, dayPlan.day)
            const dayProgress = getDayProgress(week, dayPlan.day)
            const drillsDone = Object.keys(dayProgress.drills).length
            const totalDrills = dayPlan.phases.length * 20

            return (
              <motion.div
                key={dayPlan.day}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={`/learn/day/${week}/${dayPlan.day}`}>
                  <div className={`bg-white border rounded-2xl p-5 cursor-pointer hover:border-[#A89880] transition-all group ${
                    done ? "border-[#2A6B5A]/40" : "border-[#E8DDD0]"
                  }`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#A89880]">
                            Day {dayPlan.day}
                          </span>
                          {done && (
                            <span className="flex items-center gap-1 text-[9px] font-[family-name:var(--font-mono)] text-[#2A6B5A]">
                              <CheckCircle2 size={9} /> Complete
                            </span>
                          )}
                        </div>
                        <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-[#1A1208] mb-1">
                          {dayPlan.title}
                        </h3>
                        <p className="text-[11px] font-[family-name:var(--font-mono)] text-[#A89880] leading-relaxed">
                          {dayPlan.focus}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <ArrowRight size={14} className="text-[#D8CCBF] group-hover:text-[#A89880] transition-colors" />
                        <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880]">
                          {drillsDone}/{totalDrills}
                        </span>
                      </div>
                    </div>

                    {/* Phase progress dots */}
                    <div className="mt-3 flex gap-1">
                      {dayPlan.phases.map((phase) => {
                        const phaseDone = Object.keys(dayProgress.drills).some((id) => id.startsWith(phase.id))
                        return (
                          <div
                            key={phase.id}
                            className={`h-1 flex-1 rounded-full transition-all ${
                              phaseDone ? "opacity-100" : "opacity-30"
                            }`}
                            style={{ backgroundColor: phaseDone ? color : "#D8CCBF" }}
                          />
                        )
                      })}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="pb-12" />
      </div>
    </div>
  )
}

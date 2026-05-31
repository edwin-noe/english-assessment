"use client"

import { motion } from "framer-motion"
import {CheckCircle2, ArrowRight } from 'lucide-react'
import Link from "next/link"
import { WEEK_TITLES, LEARNING_PLAN } from "@/data/learning-plan"
import { useLearningStore } from "@/store/learning"

const WEEK_COLORS = ["#C14B2A", "#2A6B5A", "#4A6B8A", "#7A4A8A"]

export default function LearnPage() {
  const { isDayComplete, getWeekCompletionPct } = useLearningStore()
  const weeks = [1, 2, 3, 4]

  return (
    <div className="min-h-dvh bg-[#EDE4D7] px-4 py-12">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <Link href="/">
            <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[#A89880] hover:text-[#1A1208] transition-colors cursor-pointer">
              ← Home
            </span>
          </Link>
          <div className="mt-6">
            <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] text-[#A89880] mb-3">
              Your Learning Plan
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A1208]">
              4-Week <em className="italic text-[#C14B2A]">Programme</em>
            </h1>
            <p className="mt-3 text-sm text-[#7A6248] font-[family-name:var(--font-inter)] leading-relaxed">
              Targeted at your diagnostic weaknesses. 5 days per week, 20–30 minutes per day.
            </p>
          </div>
        </motion.div>

        {/* Weeks */}
        <div className="space-y-4">
          {weeks.map((week, wi) => {
            const weekDays = LEARNING_PLAN.filter((d) => d.week === week)
            const totalDays = weekDays.length
            const pct = getWeekCompletionPct(week, totalDays)
            const info = WEEK_TITLES[week]
            const color = WEEK_COLORS[wi]

            return (
              <motion.div
                key={week}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: wi * 0.08 }}
                className="bg-white border border-[#E8DDD0] rounded-2xl overflow-hidden"
              >
                {/* Week header */}
                <div className="px-5 pt-5 pb-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest mb-1"
                        style={{ color }}>
                        Week {week}
                      </p>
                      <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#1A1208]">
                        {info.title}
                      </h2>
                      <p className="text-[11px] text-[#A89880] font-[family-name:var(--font-mono)] mt-1 leading-relaxed">
                        {info.theme}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-[#1A1208]">
                        {pct}<span className="text-base text-[#A89880]">%</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1 w-full rounded-full bg-[#EDE4D7] overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ delay: 0.3 + wi * 0.1, duration: 0.6, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>

                  {/* Day grid */}
                  <div className="grid grid-cols-5 gap-1.5">
                    {weekDays.map((dayPlan) => {
                      const done = isDayComplete(week, dayPlan.day)
                      return (
                        <Link
                          key={dayPlan.day}
                          href={`/learn/day/${week}/${dayPlan.day}`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className={`relative rounded-xl p-2.5 text-center cursor-pointer transition-all border ${
                              done
                                ? "bg-[#EAF4F0] border-[#2A6B5A]/30"
                                : "bg-[#F8F4EE] border-[#E8DDD0] hover:border-[#A89880]"
                            }`}
                          >
                            {done && (
                              <CheckCircle2 size={10} className="text-[#2A6B5A] mx-auto mb-0.5" />
                            )}
                            <div className="text-[10px] font-[family-name:var(--font-mono)] font-bold text-[#1A1208]">
                              D{dayPlan.day}
                            </div>
                            <div className="text-[8px] font-[family-name:var(--font-mono)] text-[#A89880] mt-0.5 leading-tight line-clamp-2">
                              {dayPlan.title.split(" ").slice(0, 2).join(" ")}
                            </div>
                          </motion.div>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* View week link */}
                <Link href={`/learn/week/${week}`}>
                  <div className="px-5 py-3 border-t border-[#F0E8DC] flex items-center justify-between hover:bg-[#F8F4EE] transition-colors cursor-pointer">
                    <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#A89880]">
                      View Week Overview
                    </span>
                    <ArrowRight size={12} className="text-[#D8CCBF]" />
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

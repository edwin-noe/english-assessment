"use client"

import { motion } from "framer-motion"
import { questions } from "@/data/questions"
import { useAssessmentStore } from "@/store/assessment"

export function ProgressBar() {
  const currentIndex = useAssessmentStore((s) => s.currentIndex)
  const answers = useAssessmentStore((s) => s.answers)

  const total = questions.length
  const answered = Object.values(answers).filter((v) => v.trim()).length
  const progressPct = ((currentIndex + 1) / total) * 100

  return (
    <div className="w-full space-y-2">
      {/* Thin warm progress line */}
      <div className="relative h-px w-full bg-[#D8CCBF]">
        <motion.div
          className="absolute inset-y-0 left-0 bg-[#1A1208]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Counter row */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] tracking-wider uppercase">
          {answered} answered
        </span>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#7A6248]">
            {currentIndex + 1} / {total}
          </span>
          <span className="px-2 py-0.5 bg-[#1A1208] text-white text-[10px] font-[family-name:var(--font-mono)] tracking-wider">
            {Math.round(progressPct)}%
          </span>
        </div>
      </div>
    </div>
  )
}

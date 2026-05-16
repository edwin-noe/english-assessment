"use client"

import { motion } from "framer-motion"
import { Question } from "@/types"
import { cn } from "@/lib/utils"

interface Props {
  question: Question
  value: string
  onChange: (val: string) => void
}

export function MCQQuestion({ question, value, onChange }: Props) {
  return (
    <div className="space-y-3">
      {question.options?.map((option, i) => {
        const selected = value === option.id
        return (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.2 }}
            onClick={() => onChange(option.id)}
            className={cn(
              "w-full flex items-center gap-4 px-4 py-4 rounded-lg border text-left transition-all duration-200 cursor-pointer group",
              selected
                ? "border-[#1A1208] bg-white"
                : "border-[#D8CCBF] bg-white hover:border-[#A89880]"
            )}
          >
            {/* Circle letter */}
            <span
              className={cn(
                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-[family-name:var(--font-mono)] transition-all duration-200",
                selected
                  ? "bg-[#1A1208] text-white"
                  : "border border-[#D8CCBF] text-[#7A6248] group-hover:border-[#A89880]"
              )}
            >
              {option.id.toUpperCase()}
            </span>
            <span
              className={cn(
                "text-sm leading-relaxed transition-colors",
                selected ? "text-[#1A1208] font-medium" : "text-[#3A2A1A]"
              )}
            >
              {option.text}
            </span>
          </motion.button>
        )
      })}
    </div>
  )
}

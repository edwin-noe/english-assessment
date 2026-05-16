"use client"

import { Question } from "@/types"
import { Textarea } from "./ui/textarea"

interface Props {
  question: Question
  value: string
  onChange: (val: string) => void
}

export function SpeakingQuestion({ question, value, onChange }: Props) {
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0

  return (
    <div className="space-y-4">
      {question.context && (
        <div className="px-4 py-3 rounded-lg bg-[#F5EFE6] border border-[#D8CCBF]">
          <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#C14B2A] font-bold">
            Scenario
          </span>
          <p className="text-xs text-[#7A6248] mt-1">{question.context}</p>
        </div>
      )}
      <div className="relative">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your spoken response naturally, as if you were speaking..."
          className="min-h-[180px]"
          autoFocus
        />
        <div className="absolute bottom-3 right-3 text-[10px] text-[#A89880] font-[family-name:var(--font-mono)] bg-white/80 px-2 py-1 rounded">
          {wordCount} {wordCount === 1 ? "word" : "words"}
        </div>
      </div>
    </div>
  )
}

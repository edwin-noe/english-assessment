"use client"

import { Question } from "@/types"
import { Textarea } from "./ui/textarea"
import { Lightbulb } from "lucide-react"

interface Props {
  question: Question
  value: string
  onChange: (val: string) => void
}

export function EssayQuestion({ question, value, onChange }: Props) {
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0

  return (
    <div className="space-y-4">
      {question.hint && (
        <div className="flex items-start gap-2 px-4 py-3 rounded-lg bg-[#F5EFE6] border border-[#D8CCBF] text-[#7A6248] text-xs">
          <Lightbulb size={13} className="mt-0.5 flex-shrink-0 text-[#C14B2A]" />
          <span>{question.hint}</span>
        </div>
      )}
      <div className="relative">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your response here..."
          className="min-h-[200px]"
          autoFocus
        />
        <div className="absolute bottom-3 right-3 text-[10px] text-[#A89880] font-[family-name:var(--font-mono)] bg-white/80 px-2 py-1 rounded">
          {wordCount} {wordCount === 1 ? "word" : "words"}
        </div>
      </div>
    </div>
  )
}

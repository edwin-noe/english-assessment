"use client"

import { Question } from "@/types"
import { Input } from "./ui/input"
import { Lightbulb } from "lucide-react"

interface Props {
  question: Question
  value: string
  onChange: (val: string) => void
}

export function FillQuestion({ question, value, onChange }: Props) {
  return (
    <div className="space-y-4">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your answer here..."
        autoFocus
      />
      {question.hint && (
        <div className="flex items-start gap-2 px-4 py-3 rounded-lg bg-[#F5EFE6] border border-[#D8CCBF] text-[#7A6248] text-xs font-[family-name:var(--font-inter)]">
          <Lightbulb size={13} className="mt-0.5 flex-shrink-0 text-[#C14B2A]" />
          <span>{question.hint}</span>
        </div>
      )}
    </div>
  )
}

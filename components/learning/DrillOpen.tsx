"use client"

import { Mic } from "lucide-react"
import { Drill } from "@/data/learning-plan"

interface Props {
  drill: Drill
  value: string
  revealed: boolean
  onChange: (v: string) => void
}

export function DrillOpen({ drill, value, revealed, onChange }: Props) {
  const isSpeaking = drill.type === "speaking"
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0
  const limit = drill.wordLimit

  return (
    <div className="space-y-3">
      {drill.hint && !revealed && (
        <div className="px-3 py-2 rounded-lg bg-[#F5F0E8] border border-[#E8DDD0]">
          <p className="text-[11px] font-[family-name:var(--font-mono)] text-[#7A6248] leading-relaxed">
            {drill.hint}
          </p>
        </div>
      )}

      {isSpeaking && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F0E8] border border-[#E8DDD0]">
          <Mic size={12} className="text-[#C14B2A] flex-shrink-0" />
          <p className="text-[11px] font-[family-name:var(--font-mono)] text-[#7A6248]">
            Practise speaking aloud, then write a summary of what you said.
          </p>
        </div>
      )}

      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => !revealed && onChange(e.target.value)}
          readOnly={revealed}
          rows={isSpeaking ? 5 : 4}
          placeholder={isSpeaking ? "Write a summary of what you said…" : "Write your answer here…"}
          className={`w-full px-4 py-3 rounded-xl border text-sm font-[family-name:var(--font-inter)] leading-relaxed outline-none resize-none transition-all ${
            revealed
              ? "border-[#D8CCBF] bg-[#F5F0E8] text-[#7A6248]"
              : "border-[#D8CCBF] bg-white text-[#1A1208] focus:border-[#1A1208]"
          }`}
        />
        {limit && (
          <span className={`absolute bottom-3 right-3 text-[10px] font-[family-name:var(--font-mono)] ${
            wordCount > limit ? "text-[#C14B2A]" : "text-[#D8CCBF]"
          }`}>
            {wordCount}/{limit}w
          </span>
        )}
      </div>

      {revealed && drill.correct && (
        <div className="px-4 py-3 rounded-xl bg-[#EAF4F0] border border-[#2A6B5A]/20">
          <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#2A6B5A] mb-1.5">
            Model Answer
          </p>
          <p className="text-sm text-[#1A3A2A] leading-relaxed whitespace-pre-wrap">{drill.correct}</p>
        </div>
      )}
    </div>
  )
}

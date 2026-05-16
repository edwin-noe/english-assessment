"use client"

import { useState } from "react"
import { CheckCircle2, XCircle } from "lucide-react"
import { Drill } from "@/data/learning-plan"

interface Props {
  drill: Drill
  value: string
  revealed: boolean
  onChange: (v: string) => void
}

export function DrillFill({ drill, value, revealed, onChange }: Props) {
  const blanks = drill.blanks ?? []
  const [inputs, setInputs] = useState<string[]>(() =>
    value ? JSON.parse(value) : blanks.map(() => "")
  )

  const update = (i: number, v: string) => {
    if (revealed) return
    const next = [...inputs]
    next[i] = v
    setInputs(next)
    onChange(JSON.stringify(next))
  }

  return (
    <div className="space-y-3">
      {blanks.map((correct, i) => {
        const input = inputs[i] ?? ""
        const isCorrect = revealed && input.trim().toLowerCase() === correct.toLowerCase()
        const isWrong = revealed && !isCorrect

        return (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] w-4 flex-shrink-0">
              {i + 1}.
            </span>
            <div className="relative flex-1">
              <input
                type="text"
                value={revealed ? (isCorrect ? input : correct) : input}
                onChange={(e) => update(i, e.target.value)}
                readOnly={revealed}
                placeholder="Type your answer…"
                className={`w-full px-3 py-2.5 rounded-lg border text-sm font-[family-name:var(--font-inter)] outline-none transition-all ${
                  isCorrect
                    ? "border-[#2A6B5A] bg-[#EAF4F0] text-[#2A6B5A]"
                    : isWrong
                    ? "border-[#C14B2A] bg-[#FEF0EC] text-[#C14B2A]"
                    : "border-[#D8CCBF] bg-white text-[#1A1208] focus:border-[#1A1208]"
                }`}
              />
              {isCorrect && (
                <CheckCircle2 size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2A6B5A]" />
              )}
              {isWrong && (
                <XCircle size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C14B2A]" />
              )}
            </div>
            {isWrong && (
              <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] flex-shrink-0 italic">
                → {correct}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}

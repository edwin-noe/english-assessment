"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle } from "lucide-react"
import { Drill } from "@/data/learning-plan"

interface Props {
  drill: Drill
  selected: string | undefined
  revealed: boolean
  onSelect: (id: string) => void
}

export function DrillMCQ({ drill, selected, revealed, onSelect }: Props) {
  return (
    <div className="space-y-2">
      {drill.options?.map((opt) => {
        const isSelected = selected === opt.id
        const isCorrect = opt.id === drill.correct
        let variant = "default"
        if (revealed) {
          if (isCorrect) variant = "correct"
          else if (isSelected && !isCorrect) variant = "wrong"
        } else if (isSelected) {
          variant = "selected"
        }

        return (
          <motion.button
            key={opt.id}
            onClick={() => !revealed && onSelect(opt.id)}
            whileTap={!revealed ? { scale: 0.98 } : {}}
            className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all cursor-pointer ${
              variant === "correct"
                ? "border-[#2A6B5A] bg-[#EAF4F0] text-[#1A1208]"
                : variant === "wrong"
                ? "border-[#C14B2A] bg-[#FEF0EC] text-[#1A1208]"
                : variant === "selected"
                ? "border-[#1A1208] bg-[#1A1208] text-white"
                : "border-[#E8DDD0] bg-white text-[#3A2A1A] hover:border-[#A89880]"
            } ${revealed ? "cursor-default" : ""}`}
          >
            <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-[family-name:var(--font-mono)] font-bold transition-all ${
              variant === "selected" ? "border-white text-white" :
              variant === "correct" ? "border-[#2A6B5A] text-[#2A6B5A]" :
              variant === "wrong" ? "border-[#C14B2A] text-[#C14B2A]" :
              "border-[#D8CCBF] text-[#A89880]"
            }`}>
              {opt.id.toUpperCase()}
            </span>
            <span className="flex-1 text-sm leading-relaxed">{opt.text}</span>
            {revealed && isCorrect && <CheckCircle2 size={15} className="text-[#2A6B5A] flex-shrink-0" />}
            {revealed && isSelected && !isCorrect && <XCircle size={15} className="text-[#C14B2A] flex-shrink-0" />}
          </motion.button>
        )
      })}
    </div>
  )
}

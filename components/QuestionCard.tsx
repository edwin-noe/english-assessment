"use client"

import { motion } from "framer-motion"
import { Question } from "@/types"
import { useAssessmentStore } from "@/store/assessment"
import { MCQQuestion } from "./MCQQuestion"
import { FillQuestion } from "./FillQuestion"
import { EssayQuestion } from "./EssayQuestion"
import { SpeakingQuestion } from "./SpeakingQuestion"

const TYPE_LABEL: Record<string, string> = {
  mcq:            "Multiple Choice",
  fill:           "Fill in the Blank",
  essay:          "Written Response",
  speaking:       "Spoken Response",
  synonym:        "Synonym",
  sentence_usage: "Sentence Usage",
}

const SECTION_ABBR: Record<string, string> = {
  "Grammar & Sentence Structure": "Grammar",
  "Vocabulary & Context Usage":   "Vocabulary",
  "Writing Skills":               "Writing",
  "Speaking Simulation":          "Speaking",
  "Reading Comprehension":        "Reading",
}

interface Props {
  question: Question
  direction: number
  questionNumber: number
}

export function QuestionCard({ question, direction, questionNumber }: Props) {
  const answers    = useAssessmentStore((s) => s.answers)
  const setAnswer  = useAssessmentStore((s) => s.setAnswer)
  const currentAnswer = answers[question.id] ?? ""

  const numStr = String(questionNumber).padStart(2, "0")

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: direction * 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -30 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full bg-white rounded-2xl shadow-sm border border-[#E8DDD0] p-6 sm:p-8"
    >
      {/* Question number + category tag */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl font-[family-name:var(--font-playfair)] font-bold text-[#D8C9B5] leading-none select-none">
          {numStr}
        </span>
        <span className="px-2.5 py-1 border border-[#D8CCBF] text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#7A6248]">
          {SECTION_ABBR[question.section] ?? question.section}
        </span>
        <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] uppercase tracking-wider">
          {TYPE_LABEL[question.type]}
        </span>
      </div>

      {/* Reading passage */}
      {question.context &&
        !question.context.startsWith("See Passage") && (
          <div className="mb-5 p-4 rounded-lg bg-[#F8F3EE] border border-[#E8DDD0] text-sm text-[#5A4A38] leading-relaxed whitespace-pre-line max-h-56 overflow-y-auto font-[family-name:var(--font-inter)]">
            {question.context}
          </div>
        )}

      {/* Question text */}
      <h2 className="text-lg sm:text-xl font-[family-name:var(--font-playfair)] font-semibold text-[#1A1208] leading-snug mb-7">
        {question.question}
      </h2>

      {/* Answer inputs */}
      {(question.type === "mcq" || question.type === "synonym") && (
        <MCQQuestion question={question} value={currentAnswer} onChange={(v) => setAnswer(question.id, v)} />
      )}
      {question.type === "fill" && (
        <FillQuestion question={question} value={currentAnswer} onChange={(v) => setAnswer(question.id, v)} />
      )}
      {question.type === "essay" && (
        <EssayQuestion question={question} value={currentAnswer} onChange={(v) => setAnswer(question.id, v)} />
      )}
      {(question.type === "speaking" || question.type === "sentence_usage") && (
        <SpeakingQuestion question={question} value={currentAnswer} onChange={(v) => setAnswer(question.id, v)} />
      )}
    </motion.div>
  )
}

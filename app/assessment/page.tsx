"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProgressBar } from "@/components/ProgressBar"
import { QuestionCard } from "@/components/QuestionCard"
import { questions } from "@/data/questions"
import { useAssessmentStore } from "@/store/assessment"
import Link from "next/link"

export default function AssessmentPage() {
  const router = useRouter()
  const { currentIndex, answers, goNext, goPrev, start } = useAssessmentStore()
  const [direction, setDirection] = useState(1)

  const question = questions[currentIndex]
  const currentAnswer = answers[question?.id] ?? ""
  const isLast  = currentIndex === questions.length - 1
  const isFirst = currentIndex === 0

  const canProceed =
    question?.type === "mcq" || question?.type === "synonym"
      ? currentAnswer !== ""
      : currentAnswer.trim().length > 0

  const handleNext = () => {
    start()
    setDirection(1)
    isLast ? router.push("/review") : goNext()
  }

  const handlePrev = () => {
    setDirection(-1)
    goPrev()
  }

  if (!question) return null

  return (
    <div className="min-h-dvh bg-[#EDE4D7] flex flex-col">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#EDE4D7]/90 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4 pt-5 pb-4">

          {/* Title line */}
          <div className="flex items-center justify-between mb-4">
            <Link href="/">
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[#A89880] hover:text-[#1A1208] transition-colors cursor-pointer">
                ← Back
              </span>
            </Link>
            <h1 className="font-[family-name:var(--font-playfair)] text-base font-bold text-[#1A1208]">
              IT English <em className="text-[#C14B2A] not-italic italic">Assessment</em>
            </h1>
            <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] uppercase tracking-wider">
              {Object.values(answers).filter((v) => v.trim()).length} / {questions.length}
            </span>
          </div>

          <ProgressBar />
        </div>
      </header>

      {/* Question */}
      <main className="flex-1 flex flex-col max-w-2xl w-full mx-auto px-4 py-6">
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <QuestionCard
              key={question.id}
              question={question}
              direction={direction}
              questionNumber={currentIndex + 1}
            />
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="pt-6 pb-6">
          <div className="flex items-center justify-between gap-3">
            <Button variant="outline" onClick={handlePrev} disabled={isFirst} size="sm">
              <ArrowLeft size={14} />
              Prev
            </Button>

            <div className="flex items-center gap-2">
              {!canProceed && !isLast && (
                <Button variant="ghost" size="sm" onClick={handleNext}
                  className="text-[#A89880] hover:text-[#7A6248] normal-case tracking-normal font-[family-name:var(--font-inter)] text-xs font-normal">
                  Skip
                </Button>
              )}
              {isLast ? (
                <Button onClick={handleNext} size="sm">
                  <Flag size={13} />
                  Review & Finish
                </Button>
              ) : (
                <Button onClick={handleNext} disabled={!canProceed} size="sm">
                  Next Question <ArrowRight size={14} />
                </Button>
              )}
            </div>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-1.5 mt-5">
            {Array.from({ length: Math.min(9, questions.length) }, (_, i) => {
              const base = Math.max(0, Math.min(currentIndex - 4, questions.length - 9))
              const idx  = base + i
              const answered = !!(answers[questions[idx]?.id]?.trim())
              const isCurrent = idx === currentIndex
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    useAssessmentStore.getState().goTo(idx)
                  }}
                  className={`rounded-full transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? "w-5 h-2 bg-[#1A1208]"
                      : answered
                      ? "w-2 h-2 bg-[#C14B2A]/40 hover:bg-[#C14B2A]/60"
                      : "w-2 h-2 bg-[#D8CCBF] hover:bg-[#A89880]"
                  }`}
                  aria-label={`Question ${idx + 1}`}
                />
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

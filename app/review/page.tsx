"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { AlertCircle, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { questions, SECTION_ORDER } from "@/data/questions"
import { useAssessmentStore } from "@/store/assessment"
import Link from "next/link"

export default function ReviewPage() {
  const router = useRouter()
  const { answers, goTo, submit } = useAssessmentStore()

  const totalAnswered = Object.values(answers).filter((v) => v.trim()).length
  const totalQuestions = questions.length
  const unanswered = totalQuestions - totalAnswered

  const handleSubmit = () => {
    submit()
    router.push("/results")
  }

  return (
    <div className="min-h-dvh bg-[#EDE4D7]">
      <header className="sticky top-0 z-50 bg-[#EDE4D7]/90 backdrop-blur-sm border-b border-[#D8CCBF]">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/assessment">
            <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[#A89880] hover:text-[#1A1208] transition-colors cursor-pointer">
              ← Back
            </span>
          </Link>
          <h1 className="font-[family-name:var(--font-playfair)] text-base font-bold text-[#1A1208]">
            Review <em className="italic text-[#C14B2A] not-italic">Answers</em>
          </h1>
          <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#7A6248]">
            {totalAnswered}/{totalQuestions}
          </span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {unanswered > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-[#E8DDD0] text-[#C14B2A] text-xs font-[family-name:var(--font-mono)]"
          >
            <AlertCircle size={14} />
            {unanswered} question{unanswered > 1 ? "s" : ""} unanswered — you can still submit.
          </motion.div>
        )}

        <div className="space-y-6">
          {SECTION_ORDER.map((section, si) => {
            const sqs = questions.filter((q) => q.section === section)
            const sAnswered = sqs.filter((q) => answers[q.id]?.trim()).length

            return (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: si * 0.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#7A6248]">
                    {section}
                  </span>
                  <span className={`text-[10px] font-[family-name:var(--font-mono)] ${sAnswered === sqs.length ? "text-[#2A6B5A]" : "text-[#A89880]"}`}>
                    {sAnswered}/{sqs.length}
                  </span>
                </div>

                <div className="space-y-1">
                  {sqs.map((q) => {
                    const answered = !!answers[q.id]?.trim()
                    const qIndex = questions.findIndex((x) => x.id === q.id)
                    const preview = answers[q.id]?.trim()
                      ? answers[q.id].length > 70 ? answers[q.id].slice(0, 70) + "…" : answers[q.id]
                      : null

                    return (
                      <button
                        key={q.id}
                        onClick={() => { goTo(qIndex); router.push("/assessment") }}
                        className="w-full text-left flex items-start gap-3 px-4 py-3 bg-white border border-[#E8DDD0] rounded-lg hover:border-[#C14B2A]/30 transition-all cursor-pointer group"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {answered
                            ? <CheckCircle2 size={14} className="text-[#2A6B5A]" />
                            : <div className="w-[14px] h-[14px] rounded-full border border-[#D8CCBF]" />
                          }
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] mb-0.5">
                            Q{qIndex + 1} · {q.type.toUpperCase()}
                          </div>
                          <div className="text-xs text-[#3A2A1A] line-clamp-1 leading-relaxed">
                            {q.question.length > 90 ? q.question.slice(0, 90) + "…" : q.question}
                          </div>
                          {preview && (
                            <div className="mt-0.5 text-[10px] text-[#A89880] italic line-clamp-1">
                              → {preview}
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#D8CCBF] group-hover:text-[#C14B2A] transition-colors flex-shrink-0">
                          Edit
                        </span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 pb-10"
        >
          <Button size="lg" variant="success" className="w-full" onClick={handleSubmit}>
            <Send size={14} />
            Submit Assessment
          </Button>
          <p className="text-center text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] mt-3 uppercase tracking-wider">
            Download JSON after submission for AI analysis
          </p>
        </motion.div>
      </main>
    </div>
  )
}

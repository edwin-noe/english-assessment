"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAssessmentStore } from "@/store/assessment"
import { questions } from "@/data/questions"

const SECTIONS = [
  { name: "Grammar & Sentence Structure", count: 40, types: "MCQ · Fill in blank" },
  { name: "Vocabulary & Context Usage",   count: 40, types: "MCQ · Synonym · Usage" },
  { name: "Writing Skills",               count: 10, types: "Essay prompts" },
  { name: "Speaking Simulation",          count: 10, types: "Scenario responses" },
  { name: "Reading Comprehension",        count: 15, types: "Dialogue · Questions" },
]

export default function HomePage() {
  const { started, currentIndex, answers, reset } = useAssessmentStore()
  const answeredCount = Object.values(answers).filter((v) => v.trim()).length
  const hasProgress = started && answeredCount > 0

  return (
    <main className="min-h-dvh bg-[#EDE4D7] flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl">

        {/* Series label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] text-[#A89880] mb-4"
        >
          Assessment Series · IT Professional
        </motion.p>

        {/* Editorial title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-center font-[family-name:var(--font-playfair)] font-bold leading-tight mb-2"
        >
          <span className="block text-5xl sm:text-6xl text-[#1A1208]">English</span>
          <span className="block text-5xl sm:text-6xl italic text-[#C14B2A]">Assessment</span>
        </motion.h1>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="w-full h-px bg-[#D8CCBF] my-8 origin-left"
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-10 mb-8"
        >
          {[
            { val: questions.length, label: "Questions" },
            { val: "5", label: "Sections" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-[#1A1208]">{val}</div>
              <div className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#A89880] mt-0.5">{label}</div>
            </div>
          ))}
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#A89880]" />
              <span className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-[#1A1208]">60–90</span>
            </div>
            <div className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#A89880] mt-0.5">Minutes</div>
          </div>
        </motion.div>

        {/* Section list */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="space-y-1.5 mb-8"
        >
          {SECTIONS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.28 + i * 0.05 }}
              className="flex items-center justify-between px-4 py-3 bg-white border border-[#E8DDD0] rounded-lg"
            >
              <div>
                <div className="text-sm font-medium text-[#1A1208]">{s.name}</div>
                <div className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] mt-0.5 uppercase tracking-wider">{s.types}</div>
              </div>
              <span className="text-sm font-[family-name:var(--font-mono)] font-bold text-[#C14B2A]">{s.count}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col gap-3"
        >
          {hasProgress ? (
            <>
              <p className="text-center text-xs font-[family-name:var(--font-mono)] text-[#7A6248]">
                Progress saved — {answeredCount} answered · Q{currentIndex + 1} of {questions.length}
              </p>
              <Link href="/assessment">
                <Button size="lg" className="w-full">
                  Continue Assessment <ArrowRight size={15} />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-[#A89880] hover:text-[#1A1208] normal-case tracking-normal font-[family-name:var(--font-inter)] text-xs font-normal"
                onClick={() => reset()}
              >
                Start over
              </Button>
            </>
          ) : (
            <Link href="/assessment" onClick={() => useAssessmentStore.getState().start()}>
              <Button size="lg" className="w-full">
                Start Assessment <ArrowRight size={15} />
              </Button>
            </Link>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-[10px] font-[family-name:var(--font-mono)] text-[#B0A090] mt-6 tracking-wider uppercase"
        >
          Progress auto-saved · Resume anytime
        </motion.p>

        {/* Learning plan link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 pt-6 border-t border-[#D8CCBF]"
        >
          <Link href="/learn">
            <div className="flex items-center justify-between px-4 py-4 bg-white border border-[#E8DDD0] rounded-xl hover:border-[#A89880] transition-all cursor-pointer group">
              <div>
                <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#C14B2A] mb-0.5">
                  4-Week Programme
                </p>
                <p className="text-sm font-semibold text-[#1A1208]">Learning Plan</p>
                <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880] mt-0.5">
                  Targeted drills · Grammar · Writing · Speaking
                </p>
              </div>
              <ArrowRight size={14} className="text-[#D8CCBF] group-hover:text-[#A89880] transition-colors flex-shrink-0" />
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Download, RotateCcw, ClipboardCopy, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAssessmentStore } from "@/store/assessment"
import { questions, SECTION_ORDER } from "@/data/questions"
import { useRouter } from "next/navigation"
import Link from "next/link"

const SECTION_SHORT: Record<string, string> = {
  "Grammar & Sentence Structure": "Grammar",
  "Vocabulary & Context Usage":   "Vocabulary",
  "Writing Skills":               "Writing",
  "Speaking Simulation":          "Speaking",
  "Reading Comprehension":        "Reading",
}

export default function ResultsPage() {
  const router = useRouter()
  const { answers, submitted, getExportData, reset } = useAssessmentStore()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!submitted) router.replace("/")
  }, [submitted, router])

  if (!submitted) return null

  const totalAnswered = Object.values(answers).filter((v) => v.trim()).length
  const total = questions.length
  const completionPct = Math.round((totalAnswered / total) * 100)

  const sectionStats = SECTION_ORDER.map((section) => {
    const sqs = questions.filter((q) => q.section === section)
    const answered = sqs.filter((q) => answers[q.id]?.trim()).length
    return { section, answered, total: sqs.length, pct: Math.round((answered / sqs.length) * 100) }
  })

  const handleDownload = () => {
    const data = getExportData()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `english_assessment_${data.session_id}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleCopy = async () => {
    const data = getExportData()
    await navigator.clipboard.writeText(JSON.stringify(data, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-dvh bg-[#EDE4D7] px-4 py-12">
      <div className="max-w-xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] text-[#A89880] mb-3">
            Assessment Complete
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A1208]">
            Well <em className="italic text-[#C14B2A]">Done.</em>
          </h1>
        </motion.div>

        {/* Overall score */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-[#E8DDD0] rounded-2xl p-6 mb-4"
        >
          <div className="flex items-end justify-between mb-4">
            <div>
              <div className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#A89880] mb-1">
                Completion
              </div>
              <div className="text-4xl font-[family-name:var(--font-playfair)] font-bold text-[#1A1208]">
                {completionPct}<span className="text-2xl text-[#A89880]">%</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880]">{totalAnswered} answered</div>
              <div className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880]">{total - totalAnswered} skipped</div>
            </div>
          </div>
          <div className="h-1.5 w-full rounded-full bg-[#EDE4D7] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${completionPct}%` }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="h-full bg-[#1A1208] rounded-full"
            />
          </div>
        </motion.div>

        {/* Section breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-5 gap-2 mb-6"
        >
          {sectionStats.map(({ section, answered, total: sTotal, pct }, i) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.06 }}
              className="bg-white border border-[#E8DDD0] rounded-xl p-3 text-center"
            >
              <div className="text-xs font-[family-name:var(--font-mono)] font-bold text-[#1A1208] mb-0.5">
                {pct}%
              </div>
              <div className="text-[9px] font-[family-name:var(--font-mono)] text-[#A89880] uppercase tracking-wider leading-tight">
                {SECTION_SHORT[section]}
              </div>
              <div className="text-[9px] text-[#C14B2A] font-[family-name:var(--font-mono)] mt-1">
                {answered}/{sTotal}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Export */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white border border-[#E8DDD0] rounded-2xl p-5 mb-4"
        >
          <div className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#A89880] mb-1">
            Export Results
          </div>
          <p className="text-xs text-[#7A6248] mb-4 leading-relaxed">
            Download your JSON and run it through the AI diagnostic tool (Prompt 2) to get your CEFR level and learning plan.
          </p>
          <div className="flex gap-2">
            <Button onClick={handleDownload} className="flex-1">
              <Download size={13} /> Download JSON
            </Button>
            <Button variant="outline" onClick={handleCopy} className="flex-shrink-0">
              {copied ? <Check size={13} className="text-[#2A6B5A]" /> : <ClipboardCopy size={13} />}
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>
        </motion.div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-2 mb-8"
        >
          {[
            { n: "1", t: "Download JSON",         d: "Your answers with full question context" },
            { n: "2", t: "Run AI Diagnostic",      d: "CEFR level · fluency score · weaknesses" },
            { n: "3", t: "Get Learning Plan",       d: "Personalised 4-week improvement plan" },
          ].map((item) => (
            <div key={item.n} className="flex items-center gap-3 px-4 py-3 bg-white border border-[#E8DDD0] rounded-lg">
              <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#D8CCBF] flex items-center justify-center text-[10px] font-[family-name:var(--font-mono)] font-bold text-[#7A6248]">
                {item.n}
              </span>
              <div>
                <div className="text-xs font-semibold text-[#1A1208]">{item.t}</div>
                <div className="text-[10px] font-[family-name:var(--font-mono)] text-[#A89880]">{item.d}</div>
              </div>
              <ArrowRight size={12} className="ml-auto text-[#D8CCBF]" />
            </div>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-3 pb-10"
        >
          <Button variant="outline" onClick={() => { reset(); router.push("/") }} className="flex-1">
            <RotateCcw size={13} /> Take Again
          </Button>
          <Link href="/review" className="flex-1">
            <Button variant="ghost" className="w-full normal-case tracking-normal font-[family-name:var(--font-inter)] font-medium text-xs">
              View All Answers
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

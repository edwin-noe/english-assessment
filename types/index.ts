export type QuestionType = "mcq" | "fill" | "essay" | "speaking" | "synonym" | "sentence_usage"

export type SectionName =
  | "Grammar & Sentence Structure"
  | "Vocabulary & Context Usage"
  | "Writing Skills"
  | "Speaking Simulation"
  | "Reading Comprehension"

export interface Option {
  id: string
  text: string
}

export interface Question {
  id: string
  section: SectionName
  type: QuestionType
  question: string
  options?: Option[]
  correct?: string
  hint?: string
  context?: string
}

export interface Answer {
  question_id: string
  section: SectionName
  question: string
  answer: string
  type: QuestionType
}

export interface AssessmentSession {
  session_id: string
  timestamp: string
  answers: Answer[]
}

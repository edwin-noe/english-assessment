import { Question } from "@/types"

export const questions: Question[] = [
  // ─── SECTION 1: Grammar & Sentence Structure (40 questions) ──────────────────

  // MCQ: 1–30
  {
    id: "g001",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The team ___ already submitted the pull request before the deadline.",
    options: [
      { id: "a", text: "has" },
      { id: "b", text: "have" },
      { id: "c", text: "had" },
      { id: "d", text: "was" },
    ],
    correct: "c",
  },
  {
    id: "g002",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "If the server ___ down last night, we would have lost all the data.",
    options: [
      { id: "a", text: "goes" },
      { id: "b", text: "went" },
      { id: "c", text: "had gone" },
      { id: "d", text: "would go" },
    ],
    correct: "c",
  },
  {
    id: "g003",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The bug ___ by the senior developer before the client noticed it.",
    options: [
      { id: "a", text: "fixed" },
      { id: "b", text: "was fixing" },
      { id: "c", text: "had been fixed" },
      { id: "d", text: "has fixed" },
    ],
    correct: "c",
  },
  {
    id: "g004",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "Neither the frontend nor the backend ___ ready for deployment.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "is" },
      { id: "c", text: "were" },
      { id: "d", text: "have been" },
    ],
    correct: "b",
  },
  {
    id: "g005",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The documentation ___ be updated before the sprint ends.",
    options: [
      { id: "a", text: "can" },
      { id: "b", text: "must" },
      { id: "c", text: "might" },
      { id: "d", text: "should have" },
    ],
    correct: "b",
  },
  {
    id: "g006",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "I suggested ___ the database schema before adding new features.",
    options: [
      { id: "a", text: "to review" },
      { id: "b", text: "reviewing" },
      { id: "c", text: "review" },
      { id: "d", text: "reviewed" },
    ],
    correct: "b",
  },
  {
    id: "g007",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "Which sentence is grammatically correct?",
    options: [
      { id: "a", text: "The data is corrupt and needs to be restore." },
      { id: "b", text: "The data are corrupt and needs restoration." },
      { id: "c", text: "The data is corrupt and needs to be restored." },
      { id: "d", text: "The data was corrupt and need to be restored." },
    ],
    correct: "c",
  },
  {
    id: "g008",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The manager asked the developers ___ they had tested the new feature.",
    options: [
      { id: "a", text: "if" },
      { id: "b", text: "that" },
      { id: "c", text: "whether or not" },
      { id: "d", text: "a and c" },
    ],
    correct: "d",
  },
  {
    id: "g009",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "We ___ three deployments this week and all of them succeeded.",
    options: [
      { id: "a", text: "did" },
      { id: "b", text: "have done" },
      { id: "c", text: "had done" },
      { id: "d", text: "were doing" },
    ],
    correct: "b",
  },
  {
    id: "g010",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The report, along with the test results, ___ sent to the client.",
    options: [
      { id: "a", text: "were" },
      { id: "b", text: "was" },
      { id: "c", text: "are" },
      { id: "d", text: "have been" },
    ],
    correct: "b",
  },
  {
    id: "g011",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "By the time the QA team receives the build, the developers ___ all critical bugs.",
    options: [
      { id: "a", text: "will fix" },
      { id: "b", text: "will have fixed" },
      { id: "c", text: "are fixing" },
      { id: "d", text: "fix" },
    ],
    correct: "b",
  },
  {
    id: "g012",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "It ___ crucial that every team member attends the architecture review.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "were" },
      { id: "c", text: "is" },
      { id: "d", text: "would be" },
    ],
    correct: "c",
  },
  {
    id: "g013",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The system ___ for maintenance every Sunday between 2 and 4 AM.",
    options: [
      { id: "a", text: "shuts down" },
      { id: "b", text: "is shut down" },
      { id: "c", text: "was shut down" },
      { id: "d", text: "has been shut down" },
    ],
    correct: "b",
  },
  {
    id: "g014",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "Not only ___ the feature shipped on time, but it also exceeded expectations.",
    options: [
      { id: "a", text: "the team did" },
      { id: "b", text: "did the team" },
      { id: "c", text: "the team was" },
      { id: "d", text: "was the team" },
    ],
    correct: "b",
  },
  {
    id: "g015",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The new API ___ by the frontend team for the past two weeks.",
    options: [
      { id: "a", text: "is being tested" },
      { id: "b", text: "has been tested" },
      { id: "c", text: "has been being tested" },
      { id: "d", text: "was being tested" },
    ],
    correct: "c",
  },
  {
    id: "g016",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "I wish the client ___ us more time to complete the testing phase.",
    options: [
      { id: "a", text: "gives" },
      { id: "b", text: "gave" },
      { id: "c", text: "had given" },
      { id: "d", text: "would give" },
    ],
    correct: "b",
  },
  {
    id: "g017",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The ___ we finish the refactoring, the sooner we can add new features.",
    options: [
      { id: "a", text: "fast" },
      { id: "b", text: "faster" },
      { id: "c", text: "fastest" },
      { id: "d", text: "more fast" },
    ],
    correct: "b",
  },
  {
    id: "g018",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The project was delayed ___ unforeseen technical issues.",
    options: [
      { id: "a", text: "due to" },
      { id: "b", text: "because" },
      { id: "c", text: "since" },
      { id: "d", text: "for" },
    ],
    correct: "a",
  },
  {
    id: "g019",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "Please make sure all variables ___ properly before the code review.",
    options: [
      { id: "a", text: "name" },
      { id: "b", text: "are named" },
      { id: "c", text: "named" },
      { id: "d", text: "have name" },
    ],
    correct: "b",
  },
  {
    id: "g020",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "Each of the microservices ___ its own dedicated database.",
    options: [
      { id: "a", text: "have" },
      { id: "b", text: "are having" },
      { id: "c", text: "has" },
      { id: "d", text: "had have" },
    ],
    correct: "c",
  },
  {
    id: "g021",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The CTO demanded that the security patch ___ immediately.",
    options: [
      { id: "a", text: "deploys" },
      { id: "b", text: "deployed" },
      { id: "c", text: "be deployed" },
      { id: "d", text: "is deployed" },
    ],
    correct: "c",
  },
  {
    id: "g022",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "Despite ___ the deadline, the team's morale remained high.",
    options: [
      { id: "a", text: "miss" },
      { id: "b", text: "missed" },
      { id: "c", text: "missing" },
      { id: "d", text: "to miss" },
    ],
    correct: "c",
  },
  {
    id: "g023",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The results of the load testing ___ shared with the entire team.",
    options: [
      { id: "a", text: "was" },
      { id: "b", text: "were" },
      { id: "c", text: "has been" },
      { id: "d", text: "is" },
    ],
    correct: "b",
  },
  {
    id: "g024",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "Should ___ any issues arise during deployment, contact the on-call engineer.",
    options: [
      { id: "a", text: "there" },
      { id: "b", text: "ever" },
      { id: "c", text: "then" },
      { id: "d", text: "would" },
    ],
    correct: "a",
  },
  {
    id: "g025",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The development team would have met the deadline ___ the unexpected server outage.",
    options: [
      { id: "a", text: "without" },
      { id: "b", text: "except" },
      { id: "c", text: "but for" },
      { id: "d", text: "if not" },
    ],
    correct: "c",
  },
  {
    id: "g026",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "It is the architect, not the junior developers, ___ responsible for this design.",
    options: [
      { id: "a", text: "who are" },
      { id: "b", text: "who is" },
      { id: "c", text: "that are" },
      { id: "d", text: "which is" },
    ],
    correct: "b",
  },
  {
    id: "g027",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The sprint was ___ successful than expected, completing 12 out of 10 story points.",
    options: [
      { id: "a", text: "more" },
      { id: "b", text: "much more" },
      { id: "c", text: "far more" },
      { id: "d", text: "even more" },
    ],
    correct: "c",
  },
  {
    id: "g028",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The code review comments ___ addressed before the merge request is approved.",
    options: [
      { id: "a", text: "need to be" },
      { id: "b", text: "needs to be" },
      { id: "c", text: "need" },
      { id: "d", text: "needs" },
    ],
    correct: "a",
  },
  {
    id: "g029",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "Having ___ the system architecture, we decided to rewrite the core module.",
    options: [
      { id: "a", text: "analyze" },
      { id: "b", text: "analyzed" },
      { id: "c", text: "analyzing" },
      { id: "d", text: "been analyzed" },
    ],
    correct: "b",
  },
  {
    id: "g030",
    section: "Grammar & Sentence Structure",
    type: "mcq",
    question: "The senior engineer recommended that we ___ the legacy code before the upgrade.",
    options: [
      { id: "a", text: "document" },
      { id: "b", text: "documented" },
      { id: "c", text: "documenting" },
      { id: "d", text: "to document" },
    ],
    correct: "a",
  },

  // Fill in blank: 31–40
  {
    id: "g031",
    section: "Grammar & Sentence Structure",
    type: "fill",
    question:
      "Complete the sentence: The application ___ (crash) three times yesterday before we found the root cause.",
    hint: "Use past simple tense",
  },
  {
    id: "g032",
    section: "Grammar & Sentence Structure",
    type: "fill",
    question: "Complete the sentence: This feature ___ (integrate) into the main branch since last Monday.",
    hint: "Use present perfect passive",
  },
  {
    id: "g033",
    section: "Grammar & Sentence Structure",
    type: "fill",
    question:
      "Complete the sentence: We ___ (work) on this optimization for two weeks by the time the client review begins.",
    hint: "Use future perfect continuous",
  },
  {
    id: "g034",
    section: "Grammar & Sentence Structure",
    type: "fill",
    question: "Correct the error: 'The team have completed their task but the results was not satisfactory.'",
    hint: "Fix subject-verb agreement issues",
  },
  {
    id: "g035",
    section: "Grammar & Sentence Structure",
    type: "fill",
    question:
      "Complete the sentence: If I ___ (be) the project manager, I would have allocated more time for testing.",
    hint: "Third conditional (past unreal)",
  },
  {
    id: "g036",
    section: "Grammar & Sentence Structure",
    type: "fill",
    question: "Complete the sentence: The pipeline ___ (set up) to run automatically on every push to main.",
    hint: "Use present simple passive",
  },
  {
    id: "g037",
    section: "Grammar & Sentence Structure",
    type: "fill",
    question:
      "Rewrite in passive voice: 'The DevOps team deployed the new version to production at midnight.'",
    hint: "Focus on what was done, not who did it",
  },
  {
    id: "g038",
    section: "Grammar & Sentence Structure",
    type: "fill",
    question: "Complete the sentence: The developer insisted on ___ (use) TypeScript throughout the project.",
    hint: "Use gerund after 'insist on'",
  },
  {
    id: "g039",
    section: "Grammar & Sentence Structure",
    type: "fill",
    question:
      "Correct the sentence: 'Neither the tests nor the linter are passing, which makes the build fail.'",
    hint: "Check subject-verb agreement with 'neither...nor'",
  },
  {
    id: "g040",
    section: "Grammar & Sentence Structure",
    type: "fill",
    question:
      "Complete the sentence: The report clearly shows ___ the microservices architecture ___ better scalability.",
    hint: "Fill in relative pronoun and verb form",
  },

  // ─── SECTION 2: Vocabulary & Context Usage (40 questions) ───────────────────

  // MCQ context: 41–60
  {
    id: "v001",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question:
      "The team needed to ___ the legacy codebase before adding new features to avoid technical debt.",
    options: [
      { id: "a", text: "refactor" },
      { id: "b", text: "reformat" },
      { id: "c", text: "recycle" },
      { id: "d", text: "restate" },
    ],
    correct: "a",
  },
  {
    id: "v002",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "During the code review, the senior developer identified a critical ___ in the authentication flow.",
    options: [
      { id: "a", text: "vulnerability" },
      { id: "b", text: "variability" },
      { id: "c", text: "versatility" },
      { id: "d", text: "visibility" },
    ],
    correct: "a",
  },
  {
    id: "v003",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "The QA engineer wrote a detailed ___ report to help developers reproduce the bug.",
    options: [
      { id: "a", text: "defect" },
      { id: "b", text: "default" },
      { id: "c", text: "deficit" },
      { id: "d", text: "deflect" },
    ],
    correct: "a",
  },
  {
    id: "v004",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "We need to ___ the API response to ensure it meets the expected JSON schema.",
    options: [
      { id: "a", text: "validate" },
      { id: "b", text: "evaluate" },
      { id: "c", text: "navigate" },
      { id: "d", text: "activate" },
    ],
    correct: "a",
  },
  {
    id: "v005",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question:
      "The application uses ___ processing to handle thousands of requests simultaneously without blocking.",
    options: [
      { id: "a", text: "asynchronous" },
      { id: "b", text: "synchronous" },
      { id: "c", text: "autonomous" },
      { id: "d", text: "anonymous" },
    ],
    correct: "a",
  },
  {
    id: "v006",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question:
      "The architect recommended a ___ approach to break the monolith into smaller, independent services.",
    options: [
      { id: "a", text: "microservices" },
      { id: "b", text: "monolithic" },
      { id: "c", text: "multilateral" },
      { id: "d", text: "modular" },
    ],
    correct: "a",
  },
  {
    id: "v007",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "The system analyst documented all the functional ___ before the development team began coding.",
    options: [
      { id: "a", text: "requirements" },
      { id: "b", text: "recruitments" },
      { id: "c", text: "reinforcements" },
      { id: "d", text: "replacements" },
    ],
    correct: "a",
  },
  {
    id: "v008",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "We ___ the performance bottleneck to an inefficient database query in the user service.",
    options: [
      { id: "a", text: "traced" },
      { id: "b", text: "tracked" },
      { id: "c", text: "attributed" },
      { id: "d", text: "confirmed" },
    ],
    correct: "c",
  },
  {
    id: "v009",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "The DevOps team set up a CI/CD ___ to automate testing and deployment.",
    options: [
      { id: "a", text: "pipeline" },
      { id: "b", text: "timeline" },
      { id: "c", text: "guideline" },
      { id: "d", text: "baseline" },
    ],
    correct: "a",
  },
  {
    id: "v010",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "The code was ___ into smaller functions to improve readability and testability.",
    options: [
      { id: "a", text: "decomposed" },
      { id: "b", text: "recomposed" },
      { id: "c", text: "composed" },
      { id: "d", text: "proposed" },
    ],
    correct: "a",
  },
  {
    id: "v011",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "Please ___ the ticket with more details before moving it to the 'In Progress' column.",
    options: [
      { id: "a", text: "elaborate" },
      { id: "b", text: "exaggerate" },
      { id: "c", text: "emulate" },
      { id: "d", text: "evaluate" },
    ],
    correct: "a",
  },
  {
    id: "v012",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question:
      "The system must handle sudden ___ in traffic without crashing, especially during peak hours.",
    options: [
      { id: "a", text: "spikes" },
      { id: "b", text: "strikes" },
      { id: "c", text: "streaks" },
      { id: "d", text: "spans" },
    ],
    correct: "a",
  },
  {
    id: "v013",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question:
      "The test suite has high code ___, meaning most of the codebase is covered by automated tests.",
    options: [
      { id: "a", text: "coverage" },
      { id: "b", text: "capacity" },
      { id: "c", text: "capability" },
      { id: "d", text: "consistency" },
    ],
    correct: "a",
  },
  {
    id: "v014",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "The team held a ___ to review what went wrong and prevent similar issues in the future.",
    options: [
      { id: "a", text: "retrospective" },
      { id: "b", text: "perspective" },
      { id: "c", text: "prospective" },
      { id: "d", text: "introspective" },
    ],
    correct: "a",
  },
  {
    id: "v015",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question:
      "We need to ensure backward ___ when updating the API so existing clients are not affected.",
    options: [
      { id: "a", text: "compatibility" },
      { id: "b", text: "complexity" },
      { id: "c", text: "capacity" },
      { id: "d", text: "capability" },
    ],
    correct: "a",
  },
  {
    id: "v016",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "The system ___ the request before forwarding it to the internal service.",
    options: [
      { id: "a", text: "authenticates" },
      { id: "b", text: "accumulates" },
      { id: "c", text: "activates" },
      { id: "d", text: "accelerates" },
    ],
    correct: "a",
  },
  {
    id: "v017",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "The error log shows that the service is ___ to memory leaks after long uptime periods.",
    options: [
      { id: "a", text: "prone" },
      { id: "b", text: "prone to" },
      { id: "c", text: "subject" },
      { id: "d", text: "liable" },
    ],
    correct: "b",
  },
  {
    id: "v018",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question:
      "The new feature will be released ___ — first to 5% of users, then gradually to everyone.",
    options: [
      { id: "a", text: "incrementally" },
      { id: "b", text: "permanently" },
      { id: "c", text: "invariably" },
      { id: "d", text: "instantaneously" },
    ],
    correct: "a",
  },
  {
    id: "v019",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "The QA team found a ___ bug that only appears when two specific conditions occur together.",
    options: [
      { id: "a", text: "intermittent" },
      { id: "b", text: "persistent" },
      { id: "c", text: "consistent" },
      { id: "d", text: "permanent" },
    ],
    correct: "a",
  },
  {
    id: "v020",
    section: "Vocabulary & Context Usage",
    type: "mcq",
    question: "We ___ the deployment to the previous stable version after the rollout caused errors.",
    options: [
      { id: "a", text: "rolled back" },
      { id: "b", text: "rolled out" },
      { id: "c", text: "rolled forward" },
      { id: "d", text: "rolled over" },
    ],
    correct: "a",
  },

  // Synonym: 21–30
  {
    id: "v021",
    section: "Vocabulary & Context Usage",
    type: "synonym",
    question: "Choose the best synonym for 'implement' in an IT workplace context.",
    options: [
      { id: "a", text: "deploy" },
      { id: "b", text: "discuss" },
      { id: "c", text: "dismiss" },
      { id: "d", text: "delay" },
    ],
    correct: "a",
  },
  {
    id: "v022",
    section: "Vocabulary & Context Usage",
    type: "synonym",
    question: "Choose the best synonym for 'prioritize' when managing a task backlog.",
    options: [
      { id: "a", text: "rank" },
      { id: "b", text: "ignore" },
      { id: "c", text: "archive" },
      { id: "d", text: "abandon" },
    ],
    correct: "a",
  },
  {
    id: "v023",
    section: "Vocabulary & Context Usage",
    type: "synonym",
    question: "Choose the best synonym for 'diagnose' when investigating a system failure.",
    options: [
      { id: "a", text: "troubleshoot" },
      { id: "b", text: "escalate" },
      { id: "c", text: "terminate" },
      { id: "d", text: "document" },
    ],
    correct: "a",
  },
  {
    id: "v024",
    section: "Vocabulary & Context Usage",
    type: "synonym",
    question: "Choose the best synonym for 'obsolete' when describing outdated technology.",
    options: [
      { id: "a", text: "deprecated" },
      { id: "b", text: "optimized" },
      { id: "c", text: "deployed" },
      { id: "d", text: "developed" },
    ],
    correct: "a",
  },
  {
    id: "v025",
    section: "Vocabulary & Context Usage",
    type: "synonym",
    question: "Choose the best synonym for 'scalable' in system design discussions.",
    options: [
      { id: "a", text: "extensible" },
      { id: "b", text: "stable" },
      { id: "c", text: "reliable" },
      { id: "d", text: "portable" },
    ],
    correct: "a",
  },
  {
    id: "v026",
    section: "Vocabulary & Context Usage",
    type: "synonym",
    question: "Choose the best synonym for 'concise' when describing good documentation.",
    options: [
      { id: "a", text: "brief" },
      { id: "b", text: "vague" },
      { id: "c", text: "verbose" },
      { id: "d", text: "complex" },
    ],
    correct: "a",
  },
  {
    id: "v027",
    section: "Vocabulary & Context Usage",
    type: "synonym",
    question: "Choose the best synonym for 'latency' when discussing network performance.",
    options: [
      { id: "a", text: "delay" },
      { id: "b", text: "bandwidth" },
      { id: "c", text: "throughput" },
      { id: "d", text: "capacity" },
    ],
    correct: "a",
  },
  {
    id: "v028",
    section: "Vocabulary & Context Usage",
    type: "synonym",
    question: "Choose the best synonym for 'robust' when describing a well-built system.",
    options: [
      { id: "a", text: "resilient" },
      { id: "b", text: "rigid" },
      { id: "c", text: "complex" },
      { id: "d", text: "minimal" },
    ],
    correct: "a",
  },
  {
    id: "v029",
    section: "Vocabulary & Context Usage",
    type: "synonym",
    question: "Choose the best synonym for 'iterate' in Agile development.",
    options: [
      { id: "a", text: "cycle" },
      { id: "b", text: "cancel" },
      { id: "c", text: "archive" },
      { id: "d", text: "finalize" },
    ],
    correct: "a",
  },
  {
    id: "v030",
    section: "Vocabulary & Context Usage",
    type: "synonym",
    question: "Choose the best synonym for 'bottleneck' in a performance context.",
    options: [
      { id: "a", text: "constraint" },
      { id: "b", text: "solution" },
      { id: "c", text: "feature" },
      { id: "d", text: "pipeline" },
    ],
    correct: "a",
  },

  // Sentence Usage: 31–40
  {
    id: "v031",
    section: "Vocabulary & Context Usage",
    type: "sentence_usage",
    question: "Write a sentence using the word 'escalate' in an IT support or workplace context.",
    hint: "E.g., escalating a bug to a higher tier, or escalating a concern to management",
  },
  {
    id: "v032",
    section: "Vocabulary & Context Usage",
    type: "sentence_usage",
    question: "Write a sentence using the phrase 'root cause analysis' in a post-incident report context.",
    hint: "Think about what happens after a production outage",
  },
  {
    id: "v033",
    section: "Vocabulary & Context Usage",
    type: "sentence_usage",
    question: "Write a sentence using the word 'deprecated' to describe an old API endpoint.",
    hint: "Warn developers about using old features",
  },
  {
    id: "v034",
    section: "Vocabulary & Context Usage",
    type: "sentence_usage",
    question: "Write a sentence using 'throughput' when describing system performance.",
    hint: "How many transactions or requests can the system handle?",
  },
  {
    id: "v035",
    section: "Vocabulary & Context Usage",
    type: "sentence_usage",
    question: "Write a sentence using 'stakeholder' in a project requirements meeting.",
    hint: "Who are the people affected by or interested in the project?",
  },
  {
    id: "v036",
    section: "Vocabulary & Context Usage",
    type: "sentence_usage",
    question: "Write a sentence using 'redundancy' in the context of system reliability.",
    hint: "How do we ensure the system keeps running if one component fails?",
  },
  {
    id: "v037",
    section: "Vocabulary & Context Usage",
    type: "sentence_usage",
    question: "Write a sentence using 'regression' in a QA or testing context.",
    hint: "A bug that reappears after being fixed, or a test to check for it",
  },
  {
    id: "v038",
    section: "Vocabulary & Context Usage",
    type: "sentence_usage",
    question: "Write a sentence using 'bandwidth' in a workplace resource context (not networking).",
    hint: "Bandwidth can also mean team capacity or available time",
  },
  {
    id: "v039",
    section: "Vocabulary & Context Usage",
    type: "sentence_usage",
    question: "Write a sentence using 'leverage' as a verb in a technical strategy meeting.",
    hint: "How can we use an existing tool or system to our advantage?",
  },
  {
    id: "v040",
    section: "Vocabulary & Context Usage",
    type: "sentence_usage",
    question: "Write a sentence using 'deliverable' in the context of a sprint or project milestone.",
    hint: "What is the specific output expected at the end of a phase?",
  },

  // ─── SECTION 3: Writing Skills (10 questions) ────────────────────────────────

  {
    id: "w001",
    section: "Writing Skills",
    type: "essay",
    question:
      "Explain a technical problem you have recently faced in your work (a bug, system failure, or performance issue). Describe the problem clearly, explain what caused it, and how you resolved it. Write 150–200 words.",
    hint: "Include: what happened, root cause, steps taken, result",
  },
  {
    id: "w002",
    section: "Writing Skills",
    type: "essay",
    question:
      "Write a professional QA bug report for the following scenario: A user reported that when they click 'Submit' on the registration form, the page refreshes but the account is not created, and no error message appears. Write 150–200 words.",
    hint: "Include: Title, Environment, Steps to Reproduce, Expected Result, Actual Result, Severity",
  },
  {
    id: "w003",
    section: "Writing Skills",
    type: "essay",
    question:
      "Write a system analysis explanation for a new team member explaining how a user authentication system works in a web application. Keep it simple but technically accurate. Write 150–200 words.",
    hint: "Cover: login flow, token/session management, security considerations",
  },
  {
    id: "w004",
    section: "Writing Skills",
    type: "essay",
    question:
      "Write a professional email to your manager requesting an extension on a project deadline. The original deadline is this Friday, but due to unexpected API changes from a third-party vendor, you need 3 more business days. Write 120–150 words.",
    hint: "Be professional, explain the reason clearly, propose the new deadline",
  },
  {
    id: "w005",
    section: "Writing Skills",
    type: "essay",
    question:
      "Write a daily work summary for your team's standup meeting. Yesterday you: fixed a login bug, reviewed 2 pull requests, and attended an architecture meeting. Today you plan to: work on the payment module and write unit tests. Write 80–100 words.",
    hint: "Follow the standup format: Yesterday / Today / Blockers",
  },
  {
    id: "w006",
    section: "Writing Skills",
    type: "essay",
    question:
      "Your team is debating whether to use REST or GraphQL for a new API. Write a technical recommendation explaining which option you would choose and why, considering your team's current skills and the project's needs. Write 150–200 words.",
    hint: "Pros/cons of each, specific reasons for your recommendation",
  },
  {
    id: "w007",
    section: "Writing Skills",
    type: "essay",
    question:
      "Write a professional Slack message to a colleague asking them to review your code. The PR implements a new caching layer and you want feedback specifically on the cache invalidation logic. Write 60–80 words.",
    hint: "Be concise but polite, include the PR link placeholder and specific review focus",
  },
  {
    id: "w008",
    section: "Writing Skills",
    type: "essay",
    question:
      "Write an incident report summary after a 45-minute production outage. The cause was a misconfigured environment variable that was deployed Friday evening. Write 150–200 words.",
    hint: "Include: Timeline, Root Cause, Impact, Resolution, Prevention steps",
  },
  {
    id: "w009",
    section: "Writing Skills",
    type: "essay",
    question:
      "Explain to a non-technical stakeholder why the team needs two extra weeks to complete proper security testing before the product launch. Write a clear, jargon-free explanation of 120–150 words.",
    hint: "Explain risks in business terms, not technical terms",
  },
  {
    id: "w010",
    section: "Writing Skills",
    type: "essay",
    question:
      "Write a short technical specification (tech spec) introduction for a feature: a real-time notification system for a project management tool. Cover the problem, proposed solution, and key technical decisions. Write 150–200 words.",
    hint: "Include: Problem Statement, Proposed Solution, Technology Choices",
  },

  // ─── SECTION 4: Speaking Simulation (10 questions) ───────────────────────────

  {
    id: "s001",
    section: "Speaking Simulation",
    type: "speaking",
    question:
      "Your manager asks in a meeting: 'Can you give us a quick update on where the project stands right now?' Respond as you would in a real standup or status meeting. Write your response naturally as if speaking.",
    context: "Project Management Meeting — Status Update",
  },
  {
    id: "s002",
    section: "Speaking Simulation",
    type: "speaking",
    question:
      "A colleague says: 'I don't understand why we need automated testing. It just takes more time.' How do you respond professionally to explain the value of automated testing?",
    context: "Team Discussion — Persuasion & Technical Explanation",
  },
  {
    id: "s003",
    section: "Speaking Simulation",
    type: "speaking",
    question:
      "Your client says: 'The app is slow, it takes 10 seconds to load. This is unacceptable.' How do you respond to manage the situation professionally while acknowledging the issue?",
    context: "Client Call — Handling a Complaint",
  },
  {
    id: "s004",
    section: "Speaking Simulation",
    type: "speaking",
    question:
      "In a code review, you need to give feedback to a junior developer whose code works but has poor readability and no error handling. How do you deliver constructive feedback?",
    context: "Code Review — Constructive Feedback",
  },
  {
    id: "s005",
    section: "Speaking Simulation",
    type: "speaking",
    question:
      "Your manager asks: 'We're behind schedule. What can we cut from scope to still deliver on time?' How do you respond, considering team morale, priorities, and technical risks?",
    context: "Sprint Planning — Scope Negotiation",
  },
  {
    id: "s006",
    section: "Speaking Simulation",
    type: "speaking",
    question:
      "A new team member asks you: 'What's the difference between unit testing and integration testing? When should I use each one?' Explain it clearly as you would to a junior developer.",
    context: "Mentoring — Technical Explanation",
  },
  {
    id: "s007",
    section: "Speaking Simulation",
    type: "speaking",
    question:
      "You are in a job interview and the interviewer asks: 'Tell me about a challenging technical problem you solved. Walk me through how you approached it.' Write your response as you would speak it.",
    context: "Job Interview — Problem-Solving Story (STAR method)",
  },
  {
    id: "s008",
    section: "Speaking Simulation",
    type: "speaking",
    question:
      "Your team lead says: 'We should rewrite the entire backend in a new framework.' You disagree because the risk is too high. How do you professionally push back and propose an alternative?",
    context: "Technical Discussion — Respectful Disagreement",
  },
  {
    id: "s009",
    section: "Speaking Simulation",
    type: "speaking",
    question:
      "You are running a quick daily standup. Introduce the format and guide the team through it. Write what you would say to open and run a 10-minute standup meeting.",
    context: "Standup Facilitator — Meeting Leadership",
  },
  {
    id: "s010",
    section: "Speaking Simulation",
    type: "speaking",
    question:
      "A colleague asks: 'Hey, can you explain what a REST API is in simple terms? I need to explain it to our product manager who isn't technical.' How do you explain it simply?",
    context: "Workplace Communication — Simplifying Technical Concepts",
  },

  // ─── SECTION 5: Reading Comprehension (15 questions) ─────────────────────────

  // Passage A (5 questions)
  {
    id: "r001",
    section: "Reading Comprehension",
    type: "mcq",
    context: `PASSAGE A — Read carefully and answer the questions.

Sarah (QA Lead): Good morning everyone. Before we start, I want to review the critical bugs from yesterday's regression run. We found three severity-1 issues that block the release.

Dev: Which ones? I fixed the login timeout bug last night.

Sarah: The login timeout is resolved — good work. The two remaining blockers are: first, the payment gateway is returning a 502 error intermittently, and second, the user profile picture upload is silently failing on iOS 16.

Dev: The 502 error might be a backend issue. Let me check the logs and loop in the backend team.

Sarah: Please do. And for the iOS upload issue — is that a frontend or a server-side bug?

Dev: It's likely a MIME type validation issue on the server. I'll investigate and update the ticket by noon.

Sarah: Perfect. We can't push to production until both are resolved. Let's sync again at 3 PM.`,
    question: "According to the dialogue, how many severity-1 bugs are still blocking the release?",
    options: [
      { id: "a", text: "One" },
      { id: "b", text: "Two" },
      { id: "c", text: "Three" },
      { id: "d", text: "Four" },
    ],
    correct: "b",
  },
  {
    id: "r002",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage A above",
    question: "What does the developer suggest as the likely cause of the iOS photo upload failure?",
    options: [
      { id: "a", text: "A frontend rendering bug" },
      { id: "b", text: "Network connectivity issues" },
      { id: "c", text: "A MIME type validation issue on the server" },
      { id: "d", text: "An outdated iOS SDK" },
    ],
    correct: "c",
  },
  {
    id: "r003",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage A above",
    question: "What action did the developer agree to take regarding the 502 error?",
    options: [
      { id: "a", text: "Fix it immediately and close the ticket" },
      { id: "b", text: "Check the logs and involve the backend team" },
      { id: "c", text: "Escalate it to the CTO" },
      { id: "d", text: "Ignore it until the next sprint" },
    ],
    correct: "b",
  },
  {
    id: "r004",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage A above",
    question: "What is the meaning of 'intermittently' as used in Sarah's dialogue?",
    options: [
      { id: "a", text: "Constantly and predictably" },
      { id: "b", text: "Occasionally and unpredictably" },
      { id: "c", text: "Only during peak hours" },
      { id: "d", text: "After a specific user action" },
    ],
    correct: "b",
  },
  {
    id: "r005",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage A above",
    question: "What is Sarah's main concern expressed in the final line of the dialogue?",
    options: [
      { id: "a", text: "The developer is working too slowly" },
      { id: "b", text: "The team meeting is too short" },
      { id: "c", text: "Production deployment requires all blockers to be fixed first" },
      { id: "d", text: "The QA team needs more resources" },
    ],
    correct: "c",
  },

  // Passage B (5 questions)
  {
    id: "r006",
    section: "Reading Comprehension",
    type: "mcq",
    context: `PASSAGE B — Read carefully and answer the questions.

Project Manager: Hi team, I wanted to discuss our current sprint velocity. We committed to 40 story points this sprint, but we're at day 8 of 10 and only completed 22 points.

Dev A: We ran into unexpected complexity with the third-party API integration. The documentation was outdated, so we had to reverse-engineer the endpoints.

Dev B: Also, two team members were out sick for two days, which impacted our capacity significantly.

PM: I understand. For the retrospective, we should capture these impediments more clearly. Going forward, should we add buffer time when integrating external APIs?

Dev A: Definitely. And we should spike on unknown integrations first — maybe allocate a day just to explore before committing to estimates.

PM: Good thinking. Let's also be more transparent with the stakeholders about blockers early, rather than discovering the gap at the end of the sprint.`,
    question: "What was the primary technical reason the team fell behind in the sprint?",
    options: [
      { id: "a", text: "Poor code quality requiring rewrites" },
      { id: "b", text: "Outdated third-party API documentation requiring reverse engineering" },
      { id: "c", text: "Incorrect sprint planning estimates" },
      { id: "d", text: "A production outage that consumed team time" },
    ],
    correct: "b",
  },
  {
    id: "r007",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage B above",
    question: "What percentage of committed story points has the team completed so far?",
    options: [
      { id: "a", text: "40%" },
      { id: "b", text: "55%" },
      { id: "c", text: "80%" },
      { id: "d", text: "22%" },
    ],
    correct: "b",
  },
  {
    id: "r008",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage B above",
    question: "What does Dev A suggest doing before committing to estimates for unknown integrations?",
    options: [
      { id: "a", text: "Hiring an external consultant" },
      { id: "b", text: "Skipping the integration and building a mock" },
      { id: "c", text: "Allocating a day to spike and explore first" },
      { id: "d", text: "Reducing the sprint to 5 days" },
    ],
    correct: "c",
  },
  {
    id: "r009",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage B above",
    question: "In this context, what does 'velocity' most likely refer to?",
    options: [
      { id: "a", text: "How fast the servers respond" },
      { id: "b", text: "The speed at which code is written" },
      { id: "c", text: "The amount of work a team completes per sprint" },
      { id: "d", text: "Network performance metrics" },
    ],
    correct: "c",
  },
  {
    id: "r010",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage B above",
    question: "What does the PM suggest should change about communication with stakeholders?",
    options: [
      { id: "a", text: "Stop sharing sprint metrics with stakeholders" },
      { id: "b", text: "Report blockers early rather than at the end of the sprint" },
      { id: "c", text: "Have more meetings with stakeholders during the sprint" },
      { id: "d", text: "Only communicate through formal reports" },
    ],
    correct: "b",
  },

  // Passage C (5 questions)
  {
    id: "r011",
    section: "Reading Comprehension",
    type: "mcq",
    context: `PASSAGE C — Read carefully and answer the questions.

Tech Lead: Alright, let's discuss the architecture for the new notification service. We have two main options: a push-based model using WebSockets, or a pull-based model using polling.

Analyst: What's the key trade-off between the two?

Tech Lead: WebSockets give you real-time, bi-directional communication — great for user experience, but they require persistent connections which puts more load on the server. Polling is simpler but introduces latency and is less efficient because clients are constantly asking 'any updates?' even when there are none.

Analyst: Given that our users need instant notifications for critical alerts, it sounds like WebSockets are the right choice.

Tech Lead: I agree, but we need to consider scalability. With WebSockets, if we have 100,000 concurrent users, we need proper load balancing and a stateful session management strategy.

Analyst: Could we use a hybrid approach — WebSockets for critical alerts, and polling for less time-sensitive updates?

Tech Lead: That's actually a smart pattern. It reduces server load while keeping the user experience sharp where it matters most.`,
    question: "What is the main advantage of WebSockets over polling, according to the Tech Lead?",
    options: [
      { id: "a", text: "It is simpler to implement" },
      { id: "b", text: "It uses less server resources" },
      { id: "c", text: "It provides real-time, bi-directional communication" },
      { id: "d", text: "It works better on mobile devices" },
    ],
    correct: "c",
  },
  {
    id: "r012",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage C above",
    question: "What scalability challenge does the Tech Lead mention regarding WebSockets?",
    options: [
      { id: "a", text: "WebSockets are not compatible with modern browsers" },
      { id: "b", text: "Persistent connections require load balancing and stateful session management" },
      { id: "c", text: "WebSockets cannot handle more than 1,000 users" },
      { id: "d", text: "WebSockets require expensive third-party libraries" },
    ],
    correct: "b",
  },
  {
    id: "r013",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage C above",
    question: "What is a key disadvantage of the polling approach mentioned in the dialogue?",
    options: [
      { id: "a", text: "It requires persistent connections" },
      { id: "b", text: "It is not compatible with REST APIs" },
      { id: "c", text: "Clients constantly request updates even when there are none, causing inefficiency" },
      { id: "d", text: "It cannot handle real-time data" },
    ],
    correct: "c",
  },
  {
    id: "r014",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage C above",
    question: "What hybrid approach does the Analyst propose?",
    options: [
      { id: "a", text: "Use WebSockets on mobile and polling on desktop" },
      { id: "b", text: "Use WebSockets for critical alerts and polling for less time-sensitive updates" },
      { id: "c", text: "Replace both with a message queue system" },
      { id: "d", text: "Use polling first and migrate to WebSockets later" },
    ],
    correct: "b",
  },
  {
    id: "r015",
    section: "Reading Comprehension",
    type: "mcq",
    context: "See Passage C above",
    question: "In this context, what does 'latency' most likely mean?",
    options: [
      { id: "a", text: "The cost of running the server" },
      { id: "b", text: "The delay between an event occurring and the client receiving the update" },
      { id: "c", text: "The number of users connected simultaneously" },
      { id: "d", text: "The frequency of polling requests" },
    ],
    correct: "b",
  },
]

export const SECTION_ORDER = [
  "Grammar & Sentence Structure",
  "Vocabulary & Context Usage",
  "Writing Skills",
  "Speaking Simulation",
  "Reading Comprehension",
] as const

export const SECTION_COLORS: Record<string, string> = {
  "Grammar & Sentence Structure": "blue",
  "Vocabulary & Context Usage": "violet",
  "Writing Skills": "emerald",
  "Speaking Simulation": "orange",
  "Reading Comprehension": "rose",
}

export const SECTION_ICONS: Record<string, string> = {
  "Grammar & Sentence Structure": "BookOpen",
  "Vocabulary & Context Usage": "Library",
  "Writing Skills": "PenLine",
  "Speaking Simulation": "MessageSquare",
  "Reading Comprehension": "FileText",
}

-- CreateTable
CREATE TABLE "phase_attempts" (
    "id" TEXT NOT NULL,
    "userKey" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "phaseId" TEXT NOT NULL,
    "attemptNum" INTEGER NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "phase_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "phase_attempts_userKey_week_day_idx" ON "phase_attempts"("userKey", "week", "day");

-- CreateTable
CREATE TABLE "learning_days" (
    "id" TEXT NOT NULL,
    "userKey" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "learning_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drill_answers" (
    "id" TEXT NOT NULL,
    "learningDayId" TEXT NOT NULL,
    "drillId" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "isCorrect" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "drill_answers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "learning_days_userKey_idx" ON "learning_days"("userKey");

-- CreateIndex
CREATE UNIQUE INDEX "learning_days_userKey_week_day_key" ON "learning_days"("userKey", "week", "day");

-- CreateIndex
CREATE UNIQUE INDEX "drill_answers_learningDayId_drillId_key" ON "drill_answers"("learningDayId", "drillId");

-- AddForeignKey
ALTER TABLE "drill_answers" ADD CONSTRAINT "drill_answers_learningDayId_fkey" FOREIGN KEY ("learningDayId") REFERENCES "learning_days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

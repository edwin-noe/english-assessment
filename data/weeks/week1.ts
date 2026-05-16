import { DayPlan, Drill, Phase } from "../learning-plan"
import { mcq, fill, fix, transform, write, speak } from "../drill-factory"

/* ── Week 1 · Day 1 ── Present Perfect vs Past Simple ──────────────────────── */
const W1D1: DayPlan = {
  week: 1, day: 1,
  title: "Present Perfect vs Past Simple",
  focus: "Use present perfect for relevance to now; past simple for finished past time.",
  theory: "**Present Perfect** (have/has + kata kerja bentuk 3): dipakai untuk sesuatu yang MASIH ADA HUBUNGANNYA dengan sekarang.\n'The server **has crashed**.' — artinya servernya masih mati, masih bermasalah SEKARANG.\n\n**Past Simple**: dipakai untuk sesuatu yang SUDAH SELESAI di waktu tertentu di masa lalu.\n'The server **crashed** at 3 PM yesterday.' — kejadiannya sudah berlalu, sudah selesai.\n\nBayangkan begini: kalau kamu bilang 'I **have eaten**', artinya kamu baru makan dan masih kenyang sekarang. Kalau kamu bilang 'I **ate** at 1 PM', artinya kamu makan jam 1 tadi dan itu sudah selesai.\n\n**Kata petunjuk Present Perfect**: already, just, yet, ever, never, since, for, recently, so far, this week/month/sprint.\n**Kata petunjuk Past Simple**: yesterday, last week, at [waktu], in [tahun], ago, when.",
  phases: [
/* PHASE 1 – Easy MCQ: signal-word recognition ─────────────────────────────── */
{
  id:"w1d1p1", phaseNumber:1,
  title:"Signal Word Recognition",
  objective:"Identify which time expressions trigger present perfect vs past simple.",
  drills:[
    mcq("w1d1p1_01","The deploy failed ___ ago and the team is still investigating.",["a:an hour","b:for an hour","c:since an hour","d:already an hour"],"a","Kata 'ago' artinya 'yang lalu' — menunjukkan waktu yang SUDAH SELESAI. 'An hour ago' = 'satu jam yang lalu'. Selalu pakai Past Simple."),
    mcq("w1d1p1_02","I ___ never seen this error in production before.",["a:had","b:have","c:was","d:did"],"b","Kata 'never' (tidak pernah) dengan konteks yang masih relevan sampai sekarang → Present Perfect. 'I have never seen' = dari dulu sampai sekarang, tidak pernah."),
    mcq("w1d1p1_03","The QA team ___ already reviewed the PR.",["a:has","b:have","c:had","d:was"],"a","Kata 'already' (sudah) → Present Perfect. 'The QA team' adalah subjek kolektif tunggal → gunakan 'has', bukan 'have'."),
    mcq("w1d1p1_04","She joined the company ___ 2022.",["a:for","b:since","c:ago","d:just"],"b","Kata 'since' diikuti TITIK WAKTU (2022) → Present Perfect. Artinya: dari tahun 2022 sampai sekarang. Berbeda dari 'for' yang diikuti durasi ('for 3 years')."),
    mcq("w1d1p1_05","We ___ the hotfix at midnight last Friday.",["a:have deployed","b:had deployed","c:deployed","d:deploy"],"c","'At midnight last Friday' = waktu yang sangat spesifik di masa lalu yang sudah selesai → Past Simple."),
    mcq("w1d1p1_06","The CI pipeline ___ broken since the Tuesday merge.",["a:was","b:is","c:has been","d:had been"],"c","Kata 'since' + kejadian di masa lalu → Present Perfect. Kondisi dimulai dari kejadian itu dan masih berlangsung sekarang."),
    mcq("w1d1p1_07","They ___ not resolved the ticket yet.",["a:did","b:have","c:had","d:are"],"b","Kata 'yet' dalam kalimat negatif ('not...yet' = belum) → Present Perfect. Masih belum terjadi dan masih relevan sekarang."),
    mcq("w1d1p1_08","The server ___ down for three hours yesterday.",["a:has been","b:was","c:is","d:had been"],"b","Kata 'yesterday' (kemarin) = waktu spesifik di masa lalu → Past Simple. Tidak ada kaitan langsung dengan kondisi sekarang."),
    mcq("w1d1p1_09","Have you ___ worked with Kubernetes before?",["a:ever","b:just","c:already","d:still"],"a","Kata 'ever' (pernah) dalam pertanyaan tentang pengalaman hidup → Present Perfect. 'Have you ever...?' = dalam hidupmu sampai sekarang, pernahkah?"),
    mcq("w1d1p1_10","We ___ just received the client's sign-off.",["a:had","b:have","c:did","d:were"],"b","Kata 'just' (baru saja) → Present Perfect. Sign-off baru diterima dan hasilnya masih relevan saat ini."),
    mcq("w1d1p1_11","The bug ___ introduced in last month's release.",["a:has been","b:was","c:is","d:had been"],"b","'Last month's release' = waktu yang sudah berlalu → Past Simple Passive."),
    mcq("w1d1p1_12","We ___ so far completed 80% of the sprint tasks.",["a:had","b:have","c:did","d:are"],"b","Kata 'so far' (sejauh ini, sampai sekarang) → Present Perfect. Sprint masih berjalan dan ini adalah progress sampai saat ini."),
    mcq("w1d1p1_13","The client ___ unhappy when they saw the demo last Tuesday.",["a:has been","b:was","c:is","d:had been"],"b","'Last Tuesday' (Selasa lalu) = momen spesifik di masa lalu → Past Simple."),
    mcq("w1d1p1_14","___ the on-call engineer acknowledged the alert yet?",["a:Did","b:Has","c:Had","d:Was"],"b","Kata 'yet' dalam pertanyaan → Present Perfect. Subjeknya tunggal (engineer) → gunakan 'Has'."),
    mcq("w1d1p1_15","I ___ this framework for the last two years.",["a:use","b:used","c:have been using","d:am using"],"c","Kata 'for the last two years' (selama dua tahun terakhir, sampai sekarang) → Present Perfect Continuous. Dimulai 2 tahun lalu dan MASIH berlangsung."),
    mcq("w1d1p1_16","The release notes ___ updated an hour ago by the PM.",["a:have been","b:were","c:are","d:had been"],"b","Kata 'ago' = 'yang lalu' → Past Simple (bentuk pasif: were + past participle). Kata 'ago' selalu menandai Past Simple."),
    mcq("w1d1p1_17","This is the worst performance regression we ___ ever seen.",["a:had","b:have","c:did","d:are"],"b","Kata 'ever' dalam konteks superlatif → Present Perfect. Artinya: dalam seluruh pengalaman hingga sekarang."),
    mcq("w1d1p1_18","The microservices ___ not communicated since the network change.",["a:did","b:have","c:had","d:are"],"b","Kata 'since' + kejadian tertentu ('the network change') → Present Perfect. Masalah dimulai dari perubahan jaringan dan masih berlangsung."),
    mcq("w1d1p1_19","My team lead ___ the architecture in the 2023 redesign.",["a:has defined","b:defined","c:had defined","d:defines"],"b","'In the 2023 redesign' = kejadian spesifik yang sudah selesai di tahun 2023 → Past Simple."),
    mcq("w1d1p1_20","The build ___ green for the first time this sprint!",["a:went","b:has gone","c:is going","d:goes"],"b","Kata 'this sprint' (sprint ini, yang masih berjalan) → Present Perfect."),
    mcq("w1d1p1_21","Nobody ___ reviewed the security findings from last audit.",["a:still","b:has","c:had","d:was"],"b","Kata 'nobody has' → Present Perfect Negatif. Security findings masih ada, review belum dilakukan — masih relevan sekarang."),
    mcq("w1d1p1_22","We ___ our velocity drop in Q3 due to tech debt.",["a:have noticed","b:noticed","c:notice","d:had noticed"],"b","'In Q3' (pada kuartal ketiga) = periode spesifik yang sudah berlalu → Past Simple. Berbeda dari 'this quarter' yang masih berjalan."),
    mcq("w1d1p1_23","The memory leak ___ resolved in the latest patch.",["a:has been","b:was","c:had been","d:is"],"a","'The latest patch' = patch terbaru yang masih aktif sekarang → Present Perfect Passive. Bug sudah diperbaiki dan statusnya 'resolved'."),
    mcq("w1d1p1_24","___ you finish the refactor before the standup this morning?",["a:Have","b:Did","c:Had","d:Do"],"b","'This morning' dengan konteks 'before the standup' yang sudah selesai → Past Simple. Standup tadi pagi sudah berlalu."),
    mcq("w1d1p1_25","I ___ never deployed to AWS before this project.",["a:have","b:had","c:did","d:was"],"a","Kata 'never' + konteks yang masih relevan → Present Perfect. 'Before this project' = sampai proyek ini dimulai, tidak pernah."),
  ]
},
/* PHASE 2 – MCQ: IT contexts, moderate difficulty ──────────────────────────── */
{
  id:"w1d1p2", phaseNumber:2,
  title:"IT Contexts – Choose the Right Tense",
  objective:"Apply tense rules in realistic IT workplace sentences.",
  drills:[
    mcq("w1d1p2_01","The infrastructure team ___ three new regions to the cluster last quarter.",["a:has added","b:added","c:adds","d:had added"],"b","'Last quarter' (kuartal lalu) = periode yang sudah selesai → Past Simple."),
    mcq("w1d1p2_02","Error rates ___ spiked to 12% — we need to roll back now.",["a:just","b:have just","c:had","d:were"],"b","Kata 'have just' → Present Perfect. Error rates baru saja melonjak dan dampaknya langsung terasa sekarang."),
    mcq("w1d1p2_03","I ___ with this legacy codebase for six months and finally understand it.",["a:worked","b:have been working","c:was working","d:work"],"b","Kata 'for six months' (selama 6 bulan) dengan konteks sampai sekarang → Present Perfect Continuous."),
    mcq("w1d1p2_04","The on-call engineer ___ four incidents in the last two hours.",["a:has handled","b:handled","c:handles","d:had handled"],"a","Kata 'in the last two hours' → masih dalam jangkauan relevansi Present Perfect. Insiden ditangani dalam 2 jam terakhir."),
    mcq("w1d1p2_05","Our SLA ___ 99.9% since we migrated to the new load balancer.",["a:was","b:has been","c:had been","d:is being"],"b","Kata 'since we migrated' → Present Perfect. SLA yang bagus berlangsung dari saat migrasi sampai sekarang."),
    mcq("w1d1p2_06","The backend developer ___ the API endpoints last Wednesday.",["a:has documented","b:documented","c:documents","d:had documented"],"b","'Last Wednesday' (Rabu lalu) = hari spesifik di masa lalu → Past Simple."),
    mcq("w1d1p2_07","We ___ about 200 unit tests so far this sprint.",["a:wrote","b:have written","c:write","d:had written"],"b","Kata 'so far this sprint' = sampai saat ini dalam sprint yang sedang berjalan → Present Perfect."),
    mcq("w1d1p2_08","The database ___ out of storage twice in the past week.",["a:ran","b:has run","c:runs","d:had run"],"b","Kata 'in the past week' (dalam minggu terakhir) = baru-baru ini dan masih relevan → Present Perfect."),
    mcq("w1d1p2_09","She ___ three PRs before lunch and is already on the fourth.",["a:reviewed","b:has reviewed","c:reviews","d:had reviewed"],"b","Masih dalam sesi yang sedang berjalan (belum selesai) → Present Perfect. Reviewer sudah menyelesaikan 3 PR dan masih mengerjakan yang ke-4."),
    mcq("w1d1p2_10","When ___ you push the last commit to this branch?",["a:have","b:did","c:had","d:do"],"b","'When' — menanyakan waktu spesifik di masa lalu → Past Simple."),
    mcq("w1d1p2_11","The monitoring dashboard ___ unavailable from 2 to 4 AM.",["a:has been","b:was","c:is","d:had been"],"b","'From 2 to 4 AM' = periode yang sudah selesai dengan waktu spesifik → Past Simple."),
    mcq("w1d1p2_12","The team ___ not yet agreed on the API contract.",["a:did","b:has","c:had","d:is"],"b","Kata 'not yet' (belum) → Present Perfect. Sesuatu yang diharapkan sudah selesai tapi belum terjadi, dan masih relevan sekarang."),
    mcq("w1d1p2_13","The contractor ___ the codebase in 2021 and hasn't touched it since.",["a:has written","b:wrote","c:writes","d:had written"],"b","'In 2021' = tahun spesifik di masa lalu → Past Simple. ('hasn't touched since' = Present Perfect untuk kelanjutannya)."),
    mcq("w1d1p2_14","___ the DevOps team provisioned the staging environment already?",["a:Did","b:Has","c:Had","d:Is"],"b","Kata 'already' dalam pertanyaan → Present Perfect. Subjek 'the DevOps team' (kolektif, tunggal) → 'Has'."),
    mcq("w1d1p2_15","The number of open tickets ___ grown by 40% this month.",["a:grew","b:has","c:had","d:grows"],"b","Kata 'this month' (masih berjalan) → Present Perfect → 'has grown'. Pertumbuhan terjadi dalam bulan yang masih berjalan."),
    mcq("w1d1p2_16","He ___ on this bug for two days before finding the root cause.",["a:works","b:worked","c:has worked","d:has been working"],"b","Kata 'for two days before finding' = durasi yang berakhir pada penemuan → Past Simple (atau Past Perfect Continuous)."),
    mcq("w1d1p2_17","The feature ___ released to 10% of users last Monday.",["a:has been","b:was","c:had been","d:is"],"b","'Last Monday' (Senin lalu) = waktu spesifik di masa lalu → Past Simple Passive. Bentuk: was + past participle."),
    mcq("w1d1p2_18","This is the third time the server ___ rebooted today.",["a:has","b:had","c:is","d:was"],"a","Kata 'today' (hari ini, masih berjalan) → Present Perfect. Server sudah restart ketiga kalinya hari ini."),
    mcq("w1d1p2_19","We ___ from REST to GraphQL two sprints ago.",["a:have migrated","b:migrated","c:are migrating","d:had migrated"],"b","'Two sprints ago' = waktu spesifik yang sudah berlalu → Past Simple. Migrasi sudah selesai dua sprint lalu."),
    mcq("w1d1p2_20","The product owner ___ the designs since the user testing session.",["a:revised","b:has revised","c:revises","d:had revised"],"b","Kata 'since the user testing session' → Present Perfect. Desain sudah direvisi dari saat sesi testing itu."),
    mcq("w1d1p2_21","How long ___ you been debugging this issue?",["a:did","b:have","c:had","d:are"],"b","Pertanyaan 'How long have you been...' → Present Perfect Continuous. Menanyakan durasi aktivitas yang dimulai di masa lalu dan masih berlangsung."),
    mcq("w1d1p2_22","The sprint ___ successfully last Thursday.",["a:has ended","b:ended","c:ends","d:had ended"],"b","'Last Thursday' (Kamis lalu) = hari spesifik di masa lalu → Past Simple."),
    mcq("w1d1p2_23","I ___ not seen this pattern in any codebase I have worked with.",["a:do","b:have","c:did","d:had"],"b","Present Perfect → relevan dengan pengalaman saat ini. Belum pernah melihat pola seperti ini sebelumnya, dan itu masih relevan."),
    mcq("w1d1p2_24","Latency ___ decreased by 30% since we enabled caching.",["a:had","b:has","c:is","d:was"],"b","Kata 'since we enabled' → Present Perfect. Latency sudah turun sejak caching diaktifkan."),
    mcq("w1d1p2_25","The config file ___ accidentally deleted during the pipeline run yesterday.",["a:has been","b:was","c:had been","d:is"],"b","Kata 'yesterday' = waktu kemarin yang sudah berlalu → Past Simple Passive. Bentuk: was + past participle."),
  ]
},
/* PHASE 3 – MCQ: Negatives & Questions ─────────────────────────────────────── */
{
  id:"w1d1p3", phaseNumber:3,
  title:"Negatives & Questions",
  objective:"Form correct negative and question structures with both tenses.",
  drills:[
    mcq("w1d1p3_01","___ the QA team sign off on the release yet?",["a:Has","b:Did","c:Had","d:Is"],"a","Kata 'yet' dalam pertanyaan → Present Perfect. Subjeknya tunggal (engineer) → gunakan 'Has'."),
    mcq("w1d1p3_02","I ___ not receive the API key — can you resend it?",["a:have","b:did","c:had","d:was"],"b","Permintaan spesifik di masa lalu (baru-baru ini tapi sudah selesai) → Past Simple."),
    mcq("w1d1p3_03","We ___ never had a P1 incident on this service until last night.",["a:have","b:had","c:did","d:were"],"a","'Never until last night' — kondisi 'belum pernah' mendeskripsikan semua waktu sampai sekarang → Present Perfect."),
    mcq("w1d1p3_04","___ anyone check the error logs before the deploy?",["a:Has","b:Did","c:Had","d:Does"],"b","'Before the deploy' — momen spesifik di masa lalu → Past Simple. Menanyakan apakah sudah dilakukan sebelum deploy."),
    mcq("w1d1p3_05","She ___ not finish the task by end of day yesterday.",["a:has","b:did","c:had","d:does"],"b","Kata 'yesterday' = kemarin yang sudah berlalu → Past Simple Negative. 'Did not finish' adalah bentuk yang benar."),
    mcq("w1d1p3_06","___ you ever had to migrate a live database without downtime?",["a:Did","b:Have","c:Had","d:Do"],"b","Kata 'ever' + past participle → Present Perfect. 'Have you ever pushed...' = pernahkah dalam hidupmu."),
    mcq("w1d1p3_07","Why ___ the pipeline not triggered after the merge?",["a:has","b:did","c:had","d:was"],"b","Menanyakan tentang kejadian spesifik di masa lalu (the merge) → Past Simple. 'Why did the pipeline not trigger'."),
    mcq("w1d1p3_08","I ___ not worked with Terraform before this role.",["a:have","b:did","c:had","d:was"],"a","Pernyataan tentang pengalaman sampai sekarang → Present Perfect. Belum pernah bekerja dengan Terraform sebelum peran ini."),
    mcq("w1d1p3_09","___ the team resolve the blocking issue in yesterday's standup?",["a:Have","b:Did","c:Has","d:Had"],"b","'Yesterday's standup' = standup kemarin yang sudah selesai = waktu spesifik di masa lalu → Past Simple."),
    mcq("w1d1p3_10","I ___ never seen so many bugs in a single PR before.",["a:have","b:had","c:did","d:was"],"a","Kata 'never seen' → Present Perfect. 'I have never seen so many bugs' = dari dulu sampai sekarang, tidak pernah."),
    mcq("w1d1p3_11","___ they push the hotfix before the client noticed the issue?",["a:Have","b:Did","c:Had","d:Were"],"b","Menanyakan tentang kejadian yang sudah selesai → Past Simple."),
    mcq("w1d1p3_12","The service ___ not been restarted since the new config was applied.",["a:had","b:has","c:was","d:did"],"b","Kata 'since' → Present Perfect. Menunjukkan kondisi yang dimulai pada titik waktu tertentu dan berlangsung sampai sekarang."),
    mcq("w1d1p3_13","___ you discuss the architecture with the CTO last week?",["a:Have","b:Did","c:Had","d:Are"],"b","'Last week' (minggu lalu) = waktu spesifik yang sudah berlalu → Past Simple."),
    mcq("w1d1p3_14","The new engineer ___ not yet read the onboarding documentation.",["a:did","b:has","c:had","d:is"],"b","Kata 'not yet' (belum) → Present Perfect. Sesuatu yang diharapkan sudah selesai tapi belum terjadi, dan masih relevan sekarang."),
    mcq("w1d1p3_15","When exactly ___ the memory leak first appear?",["a:has","b:did","c:had","d:does"],"b","'When exactly' — menanyakan waktu spesifik → Past Simple."),
    mcq("w1d1p3_16","I ___ not receive any notification from the alerting system.",["a:have","b:did","c:had","d:was"],"a","Relevan dengan situasi saat ini → Present Perfect. Belum menerima notifikasi dan itu masih relevan sekarang."),
    mcq("w1d1p3_17","___ the client reported this issue through the official channel?",["a:Did","b:Has","c:Had","d:Was"],"b","'Has the client reported' — mengecek status saat ini → Present Perfect. Apakah sudah atau belum dilaporkan."),
    mcq("w1d1p3_18","Why ___ the tests not run when I pushed the commit?",["a:have","b:did","c:had","d:are"],"b","Kejadian spesifik di masa lalu (the push) → Past Simple."),
    mcq("w1d1p3_19","We ___ not released a hotfix without testing before.",["a:have","b:did","c:had","d:were"],"a","Pernyataan tentang kebijakan/pengalaman sampai sekarang → Present Perfect. 'Never...before' = belum pernah sebelumnya."),
    mcq("w1d1p3_20","___ the tech lead approve the PR before it was merged?",["a:Has","b:Did","c:Had","d:Was"],"b","'Before it was merged' = sebelum kejadian spesifik di masa lalu → Past Simple. Pertanyaan tentang approval sebelum merge."),
    mcq("w1d1p3_21","How many incidents ___ the team resolve this month?",["a:did","b:has","c:have","d:are"],"c","Kata 'this month' (bulan ini, masih berjalan) → Present Perfect. 'The team' (subjek jamak) → gunakan 'have'."),
    mcq("w1d1p3_22","She ___ not been assigned to this project until last Tuesday.",["a:has","b:was","c:had","d:is"],"a","'Until last Tuesday' dengan relevansi sekarang → Present Perfect. Engineer baru ditugaskan ke proyek ini — itu yang relevan saat ini."),
    mcq("w1d1p3_23","___ the monitoring alert fire when CPU hit 95% this morning?",["a:Has","b:Did","c:Had","d:Was"],"b","'This morning' (pagi ini, kejadian yang sudah selesai) → Past Simple. Pagi sudah berlalu."),
    mcq("w1d1p3_24","I ___ not spoken to the client yet about the delay.",["a:have","b:did","c:had","d:was"],"a","Kata 'yet' (dalam konteks negatif atau pertanyaan) → Present Perfect. Masih belum dilakukan dan itu masih relevan."),
    mcq("w1d1p3_25","___ anyone spotted this edge case during code review?",["a:Did","b:Has","c:Had","d:Does"],"b","Menanyakan apakah sudah terjadi (relevansi Present Perfect) → 'Has anyone spotted'. Apakah sudah ada yang menemukannya?"),
  ]
},
/* PHASE 4 – MCQ: Harder mixed contexts ─────────────────────────────────────── */
{
  id:"w1d1p4", phaseNumber:4,
  title:"Advanced Mixed Contexts",
  objective:"Choose tense in complex, multi-clause professional IT sentences.",
  drills:[
    mcq("w1d1p4_01","By the time you read this, the pipeline ___ already finished running.",["a:will","b:has","c:will have","d:had"],"c","Future Perfect: pada waktu di masa depan, pipeline sudah akan selesai. 'By the time you read this' = pada saat kamu membaca ini."),
    mcq("w1d1p4_02","The vendor ___ three different solutions before we chose the current one.",["a:proposes","b:proposed","c:has proposed","d:had proposed"],"b","'Before we chose' — narasi masa lalu yang spesifik → Past Simple. Vendor mengusulkan solusi sebelum kita memilih."),
    mcq("w1d1p4_03","This is the first time the app ___ handled 10k concurrent users.",["a:has","b:had","c:is","d:was"],"a","Kata 'first time' + hasil yang ada sekarang → Present Perfect. 'has handled' = baru pertama kali menangani dan itu relevan sekarang."),
    mcq("w1d1p4_04","I realise I ___ made a mistake in the config I pushed this morning.",["a:have","b:had","c:did","d:was"],"a","Menyadari sekarang tentang tindakan yang baru terjadi → Present Perfect. Kesalahan baru saja ditemukan dan masih ada."),
    mcq("w1d1p4_05","He told me he ___ already submitted the PR and was waiting for review.",["a:has","b:had","c:is","d:was"],"b","Dalam kalimat tidak langsung, tense digeser mundur: has submitted → had submitted."),
    mcq("w1d1p4_06","Before the incident, we ___ 99.95% uptime for six consecutive months.",["a:maintained","b:had maintained","c:have maintained","d:maintain"],"b","Periode 6 bulan berakhir saat insiden → Past Perfect. Uptime terjaga selama 6 bulan SEBELUM insiden itu."),
    mcq("w1d1p4_07","Since refactoring the query, load time ___ from 4s to 0.3s.",["a:dropped","b:has dropped","c:drops","d:had dropped"],"b","Kata 'since refactoring' → Present Perfect. Load time berkurang sejak refactoring dilakukan dan masih berlaku sekarang."),
    mcq("w1d1p4_08","The team ___ already left the office when the alert fired.",["a:has","b:had","c:have","d:was"],"b","Dua kejadian masa lalu: tim pulang → lalu alert berbunyi. Kejadian yang LEBIH AWAL = Past Perfect."),
    mcq("w1d1p4_09","She told us she ___ been trying to reproduce the bug for hours.",["a:has","b:had","c:is","d:was"],"b","Dalam kalimat tidak langsung, tense digeser mundur: has been → had been."),
    mcq("w1d1p4_10","This is only the second time a SQL injection ___ succeeded against our system.",["a:has","b:had","c:is","d:was"],"a","'The second time' + relevansi sekarang → Present Perfect. SQL injection berhasil untuk kedua kalinya — itu relevan sekarang."),
    mcq("w1d1p4_11","We noticed that the cache ___ not been invalidated after the config update.",["a:has","b:had","c:was","d:is"],"b","Kita 'noticed' (past) → melihat ke belakang ke kondisi yang lebih awal → Past Perfect."),
    mcq("w1d1p4_12","The new framework ___ been in production for only three days when it failed.",["a:has","b:had","c:was","d:is"],"b","Periode 3 hari berakhir saat terjadi kegagalan → Past Perfect. Framework sudah berjalan selama 3 hari SEBELUM gagal."),
    mcq("w1d1p4_13","This API ___ deprecated, which is why we need to migrate.",["a:was","b:is","c:has been","d:had been"],"c","Masih deprecated sekarang dan relevan saat ini → Present Perfect Passive."),
    mcq("w1d1p4_14","The sprint retrospective ___ revealed that the team ___ understaffed.",["a:has / is","b:revealed / was","c:revealed / had been","d:has revealed / is"],"c","Retrospektif mengungkap kondisi sebelumnya → Past Simple + Past Perfect. 'revealed' (past) + 'had been understaffed' (sebelum itu)."),
    mcq("w1d1p4_15","It is the most complex integration I ___ ever worked on.",["a:had","b:have","c:was","d:did"],"b","Superlatif + 'ever' → Present Perfect. Ini pengalaman paling kompleks dalam seluruh karir sampai sekarang."),
    mcq("w1d1p4_16","We ___ not been able to reproduce the crash since upgrading Node.",["a:have","b:had","c:were","d:did"],"a","Kata 'since upgrading' → Present Perfect. Tidak bisa direproduksi sejak upgrade Node dan kondisi itu masih berlaku."),
    mcq("w1d1p4_17","The architect ___ already approved the design when the client changed requirements.",["a:has","b:had","c:have","d:is"],"b","Persetujuan terjadi SEBELUM kejadian masa lalu lainnya → Past Perfect."),
    mcq("w1d1p4_18","You should know that we ___ changed our API versioning policy.",["a:had","b:have","c:did","d:are"],"b","Memberi tahu tentang perubahan terbaru yang berdampak saat ini → Present Perfect."),
    mcq("w1d1p4_19","No one ___ been able to explain why the tests pass locally but fail in CI.",["a:has","b:had","c:is","d:was"],"a","Misteri yang belum terpecahkan sampai sekarang → Present Perfect."),
    mcq("w1d1p4_20","The lead engineer ___ left the company by the time the bug was found.",["a:has","b:had","c:is","d:was"],"b","Sebelum kejadian masa lalu (penemuan bug) → Past Perfect. Lead engineer sudah pergi SEBELUM bug ditemukan."),
    mcq("w1d1p4_21","This workaround ___ in place for over a year without anyone noticing.",["a:was","b:has been","c:had been","d:is"],"b","Masih berlaku sekarang → Present Perfect."),
    mcq("w1d1p4_22","We ___ integrated ten third-party services before deciding to build our own.",["a:have","b:had","c:did","d:are"],"b","Sebelum keputusan di masa lalu → Past Perfect. Mengintegrasikan 10 layanan SEBELUM memutuskan membuat sendiri."),
    mcq("w1d1p4_23","The project ___ on track until the security audit flagged the vulnerability.",["a:is","b:has been","c:was","d:had been"],"d","On track sampai kejadian masa lalu tertentu → Past Perfect. Proyek berjalan baik SEBELUM audit keamanan."),
    mcq("w1d1p4_24","Now that the tests ___, we can merge the PR.",["a:pass","b:passed","c:have passed","d:had passed"],"c","Kata 'now that' + Present Perfect (penyebab) → hasil saat ini. Test sudah lulus dan itu memungkinkan merge sekarang."),
    mcq("w1d1p4_25","The product ___ never gone to market without a full QA sign-off before.",["a:had","b:has","c:is","d:was"],"b","Kata 'never before' + relevansi saat ini → Present Perfect. Belum pernah ada sebelumnya dan itu masih relevan."),
  ]
},
/* PHASE 5 – MCQ: Sentence completion exam style ─────────────────────────────  */
{
  id:"w1d1p5", phaseNumber:5,
  title:"Exam-Style Completion",
  objective:"Choose between four realistic options in exam-level sentences.",
  drills:[
    mcq("w1d1p5_01","Our uptime ___ 99.9% for the past 12 months — a new company record.",["a:is","b:was","c:has been","d:had been"],"c","Kata 'for the past 12 months' (selama 12 bulan terakhir, sampai sekarang) → Present Perfect."),
    mcq("w1d1p5_02","When I last checked, the server ___ running for 180 days without a restart.",["a:has been","b:had been","c:was","d:is"],"b","'When I last checked' = momen pengecekan tertentu → Past Perfect. Server sudah berjalan selama 180 hari SEBELUM pengecekan itu."),
    mcq("w1d1p5_03","The CTO ___ the engineering blog post herself last week.",["a:has written","b:wrote","c:writes","d:had written"],"b","'Last week' (minggu lalu) = waktu spesifik yang sudah berlalu → Past Simple."),
    mcq("w1d1p5_04","___ you seen the new Figma designs the UX team shared?",["a:Did","b:Have","c:Had","d:Are"],"b","Menanyakan pengalaman sampai sekarang → Present Perfect. 'Have you seen' = apakah sudah melihat (kapan saja sampai sekarang)."),
    mcq("w1d1p5_05","I ___ through the ticket backlog and found something urgent.",["a:have just gone","b:just went","c:go","d:had just gone"],"a","'I have just gone through' → Present Perfect, dengan relevansi langsung saat ini. Baru saja selesai dan menemukan sesuatu yang urgent."),
    mcq("w1d1p5_06","The infrastructure team ___ Terraform for all new projects since Q2.",["a:adopts","b:has adopted","c:adopted","d:adopting"],"b","Kata 'since Q2' → Present Perfect. Tim menggunakan Terraform dari Q2 sampai sekarang."),
    mcq("w1d1p5_07","Nobody told me the standup time ___ when I was on leave.",["a:has changed","b:changed","c:changes","d:is changing"],"b","Perubahan spesifik di masa lalu saat pembicara sedang cuti → Past Simple."),
    mcq("w1d1p5_08","The contract ___ expired, so we need to renew it this week.",["a:had","b:has","c:is","d:was"],"b","Sudah berakhir dan masih relevan → Present Perfect. Kontrak sudah berakhir dan itu yang menyebabkan kita perlu memperbaruinya."),
    mcq("w1d1p5_09","This is the third time someone ___ tried to push directly to main.",["a:has","b:had","c:is","d:was"],"a","'The third time' + relevansi saat ini → Present Perfect. Kejadian berulang dan relevan untuk situasi saat ini."),
    mcq("w1d1p5_10","We ___ the incident to 10,000 users, many of whom are still affected.",["a:disclosed","b:have disclosed","c:had disclosed","d:disclose"],"b","Pengungkapan baru-baru ini dan dampaknya masih ada → Present Perfect."),
    mcq("w1d1p5_11","The config server ___ unreachable for five minutes before the alert fired.",["a:has been","b:was","c:had been","d:is"],"c","Periode 5 menit SEBELUM alert berbunyi (kejadian masa lalu) → Past Perfect."),
    mcq("w1d1p5_12","I ___ the documentation last night but can't find the page today.",["a:have read","b:read","c:reads","d:had read"],"b","'Last night' (semalam) = waktu spesifik di masa lalu → Past Simple."),
    mcq("w1d1p5_13","She ___ already identified the root cause — check her comment on the ticket.",["a:had","b:has","c:did","d:was"],"b","Kata 'already' + hasil yang masih relevan → Present Perfect. Root cause sudah diidentifikasi dan hasilnya bisa dilihat sekarang."),
    mcq("w1d1p5_14","The feature flag ___ toggled off before the bug manifested.",["a:has been","b:was","c:had been","d:is"],"c","Sebelum kejadian masa lalu → Past Perfect Passive. Feature flag sudah dimatikan SEBELUM bug muncul."),
    mcq("w1d1p5_15","___ the data migration completed successfully across all regions?",["a:Did","b:Has","c:Had","d:Is"],"b","Mengecek status saat ini → Present Perfect. Apakah migrasi data sudah selesai atau belum?"),
    mcq("w1d1p5_16","Performance tests ___ much better results after the optimisation.",["a:show","b:showed","c:have shown","d:had shown"],"c","Hasil yang baru-baru ini dan masih relevan → Present Perfect."),
    mcq("w1d1p5_17","They ___ the architecture multiple times in the past year.",["a:revise","b:revised","c:have revised","d:had revised"],"c","Kata 'in the past year' (dalam tahun yang masih berjalan) → Present Perfect."),
    mcq("w1d1p5_18","Alerting was useless because by the time it fired, the outage ___ already resolved.",["a:has been","b:had been","c:was","d:is"],"b","Masalah sudah teratasi SEBELUM alert berbunyi → Past Perfect. Itulah mengapa alert-nya sia-sia."),
    mcq("w1d1p5_19","The team ___ three consecutive sprints without a single P1 incident.",["a:has completed","b:completed","c:is completing","d:completes"],"a","Sprint yang baru saja selesai dengan relevansi saat ini → Present Perfect."),
    mcq("w1d1p5_20","I notice the error message ___ changed since the last release.",["a:had","b:has","c:was","d:is"],"b","Kata 'since the last release' → Present Perfect. Error message sudah berubah dari rilis terakhir sampai sekarang."),
    mcq("w1d1p5_21","We ___ this codebase from Python 2 to Python 3 in 2019.",["a:have migrated","b:migrated","c:migrate","d:had migrated"],"b","'In 2019' = tahun spesifik di masa lalu → Past Simple."),
    mcq("w1d1p5_22","It ___ the first time ever that the pipeline ran in under two minutes.",["a:is","b:has been","c:was","d:had been"],"c","Kejadian spesifik di masa lalu → Past Simple."),
    mcq("w1d1p5_23","We ___ received the penetration test report and are reviewing it.",["a:just","b:have just","c:had just","d:just have"],"b","Kata 'have just received' → Present Perfect. Baru saja menerima dan hasilnya masih relevan sekarang."),
    mcq("w1d1p5_24","She noticed the bug only after the build ___ to production.",["a:went","b:has gone","c:had gone","d:goes"],"c","Kata 'after' + kejadian masa lalu → Past Perfect. Tindakan yang terjadi LEBIH DAHULU dari kejadian 'after' itu."),
    mcq("w1d1p5_25","The client ___ not responded to our proposal since Tuesday.",["a:did","b:has","c:had","d:is"],"b","Kata 'since Tuesday' → Present Perfect. Klien belum merespons dari hari Selasa sampai sekarang."),
  ]
},
/* PHASE 6 – Fill in the blank: simple ──────────────────────────────────────── */
{
  id:"w1d1p6", phaseNumber:6,
  title:"Fill the Blank — Simple Contexts",
  objective:"Produce the correct tense form in straightforward sentences.",
  drills:[
    fill("w1d1p6_01","The server ___ (go) down three times this week.",["has gone"],"Kata 'this week' (minggu ini, masih berjalan) → Present Perfect."),
    fill("w1d1p6_02","We ___ (deploy) version 2.4 last Thursday.",["deployed"],"'Last Thursday' (Kamis lalu) = waktu spesifik yang sudah berlalu → Past Simple."),
    fill("w1d1p6_03","I ___ (work) here since January 2024.",["have been working"],"Kata 'since' + relevansi saat ini → Present Perfect Continuous. Berlangsung dari titik itu sampai sekarang."),
    fill("w1d1p6_04","The team ___ (already / fix) the bug before QA noticed it.",["had already fixed"],"Sebelum kejadian masa lalu lainnya → Past Perfect. Tindakan yang terjadi LEBIH AWAL."),
    fill("w1d1p6_05","___ (you / merge) the PR yet?",["Have you merged"],"Kata 'yet' dalam pertanyaan → Present Perfect."),
    fill("w1d1p6_06","She ___ (not / read) the incident report yet.",["has not read"],"Kata 'not yet' (belum) → Present Perfect. Sesuatu yang diharapkan sudah selesai tapi belum terjadi, dan masih relevan sekarang."),
    fill("w1d1p6_07","The config ___ (update) automatically when we pushed the commit.",["was updated"],"Past Simple Passive — kejadian spesifik. Bentuk: was/were + past participle. Fokus pada hasil tindakan."),
    fill("w1d1p6_08","I ___ (never / use) this framework before joining this team.",["have never used"],"Kata 'never' + pengalaman → Present Perfect. 'Have never used' = tidak pernah menggunakan sampai sekarang."),
    fill("w1d1p6_09","The feature ___ (be) in beta for three months now.",["has been"],"Kata 'for three months now' (sudah 3 bulan sekarang) → Present Perfect."),
    fill("w1d1p6_10","We ___ (finish) the sprint retrospective at noon yesterday.",["finished"],"'At noon yesterday' = waktu spesifik kemarin → Past Simple."),
    fill("w1d1p6_11","The client ___ (not / respond) to our email yet.",["has not responded"],"Kata 'not yet' (belum) → Present Perfect. Sesuatu yang diharapkan sudah selesai tapi belum terjadi, dan masih relevan sekarang."),
    fill("w1d1p6_12","She ___ (spend) the entire morning debugging that issue.",["spent"],"Pagi yang sudah selesai → Past Simple. 'The entire morning' sudah berlalu."),
    fill("w1d1p6_13","This is the first time I ___ (see) this error in production.",["have seen"],"Kata 'first time' (pertama kali) → Present Perfect. Digunakan dengan pengalaman pertama yang relevan sekarang."),
    fill("w1d1p6_14","The DevOps team ___ (just / push) a hotfix to resolve the latency issue.",["has just pushed"],"Kata 'just' (baru saja) → Present Perfect. Menunjukkan sesuatu yang baru terjadi dengan hasil yang masih relevan."),
    fill("w1d1p6_15","The database ___ (crash) twice before we noticed the issue.",["had crashed"],"Sebelum kita 'noticed' (masa lalu) → Past Perfect. Database crash terjadi SEBELUM kita menyadarinya."),
    fill("w1d1p6_16","___ (the pipeline / run) successfully since the fix?",["Has the pipeline run"],"Kata 'since the fix' → Present Perfect. Pipeline berjalan baik sejak ada perbaikan dan itu masih berlaku sekarang."),
    fill("w1d1p6_17","We ___ (not / release) a hotfix without testing before today.",["have not released"],"Pengalaman sampai sekarang → Present Perfect. 'Never...before today' = tidak pernah sebelum hari ini."),
    fill("w1d1p6_18","I ___ (already / review) that PR — my comments are on GitHub.",["have already reviewed"],"Kata 'already' (sudah) + konteks yang masih relevan sekarang → Present Perfect."),
    fill("w1d1p6_19","The system ___ (be) offline for two hours before the team restored it.",["had been"],"Durasi sebelum pemulihan di masa lalu → Past Perfect."),
    fill("w1d1p6_20","How long ___ (you / work) on this refactor?",["have you been working"],"Pertanyaan 'How long' untuk aktivitas yang masih berlangsung → Present Perfect Continuous."),
    fill("w1d1p6_21","The new engineer ___ (join) the team on Monday.",["joined"],"Hari spesifik di masa lalu → Past Simple."),
    fill("w1d1p6_22","We ___ (just / receive) sign-off from the architect.",["have just received"],"Kata 'just' (baru saja) → Present Perfect. Menunjukkan sesuatu yang baru terjadi dengan hasil yang masih relevan."),
    fill("w1d1p6_23","Error logs showed that the cache ___ (expire) before the request arrived.",["had expired"],"Sebelum permintaan (kejadian masa lalu) → Past Perfect. Cache sudah berakhir SEBELUM permintaan tiba."),
    fill("w1d1p6_24","The tech lead ___ (not / approve) the PR yet.",["has not approved"],"Kata 'not yet' (belum) → Present Perfect. Sesuatu yang diharapkan sudah selesai tapi belum terjadi, dan masih relevan sekarang."),
    fill("w1d1p6_25","Test coverage ___ (improve) from 60% to 85% this quarter.",["has improved"],"Kata 'this quarter' (kuartal ini, masih berjalan) → Present Perfect. Peningkatan terjadi dalam kuartal yang masih berjalan."),
  ]
},
/* PHASE 7 – Fill: professional emails & reports ─────────────────────────────  */
{
  id:"w1d1p7", phaseNumber:7,
  title:"Fill the Blank — Professional Writing",
  objective:"Use correct tenses in status emails, incident reports, and Slack messages.",
  drills:[
    fill("w1d1p7_01","Hi team, I ___ (complete) the refactor and the tests ___ (pass) locally.",["have completed","are passing"],"Present perfect for completed relevant action; present simple for current state."),
    fill("w1d1p7_02","Please note: the staging environment ___ (go) offline at 3 PM yesterday for maintenance.",["went"],"Waktu spesifik di masa lalu → Past Simple."),
    fill("w1d1p7_03","As of today, the team ___ (close) 24 out of 30 sprint tickets.",["has closed"],"Kata 'as of today' = sampai sekarang → Present Perfect. Progress yang terjadi dari awal sprint sampai hari ini."),
    fill("w1d1p7_04","I wanted to flag that we ___ (identify) a security vulnerability in the auth module.",["have identified"],"Temuan terbaru yang masih relevan sekarang → Present Perfect."),
    fill("w1d1p7_05","The incident ___ (begin) at 14:32 UTC when the load balancer ___ (fail).",["began","failed"],"Narasi masa lalu yang spesifik → keduanya Past Simple."),
    fill("w1d1p7_06","We can confirm that the issue ___ (resolve) and the service ___ (restore).",["has been resolved","has been restored"],"Konfirmasi saat ini tentang tindakan yang sudah dilakukan → Present Perfect Passive."),
    fill("w1d1p7_07","During the retrospective, we noted that the team ___ (skip) several QA checkpoints.",["had skipped"],"Dicatat (masa lalu, Past Simple) → tindakan yang terjadi lebih awal → Past Perfect."),
    fill("w1d1p7_08","I ___ (review) your PR and ___ (leave) my comments inline.",["have reviewed","have left"],"Tindakan yang baru dilakukan dengan relevansi saat ini → Present Perfect. PR sudah di-review dan komentar sudah ditinggalkan."),
    fill("w1d1p7_09","The system ___ (be) stable since we rolled back the config change at 6 PM.",["has been"],"Kata 'since' + kejadian di masa lalu → Present Perfect. Kondisi dimulai dari kejadian itu dan masih berlangsung sekarang."),
    fill("w1d1p7_10","At 09:00 this morning, the automated backup ___ (fail) silently.",["failed"],"'At 09:00 this morning' = waktu spesifik pagi ini yang sudah berlalu → Past Simple."),
    fill("w1d1p7_11","The client reported that they ___ (not / receive) any email notifications for the past week.",["had not received"],"Dalam reported speech + terjadi sebelum laporan → Past Perfect. Klien tidak menerima notifikasi SEBELUM mereka melapor."),
    fill("w1d1p7_12","As you can see in the attached report, our API response times ___ (improve) by 45%.",["have improved"],"Laporan saat ini menunjukkan perubahan sampai sekarang → Present Perfect."),
    fill("w1d1p7_13","I ___ (try) to reach you by phone but ___ (not / get) through.",["tried","did not get"],"Urutan percobaan di masa lalu → Past Simple. Dua tindakan yang sudah selesai berurutan."),
    fill("w1d1p7_14","The root cause analysis ___ (reveal) that an unreviewed commit ___ (introduce) the bug.",["revealed","had introduced"],"Analisis (masa lalu, Past Simple) + pengenalan bug yang lebih awal → Past Perfect."),
    fill("w1d1p7_15","We ___ (not / yet / push) the v3 API to production — that is planned for next week.",["have not yet pushed"],"Kata 'not yet' (belum) → Present Perfect. Sesuatu yang diharapkan sudah selesai tapi belum terjadi, dan masih relevan sekarang."),
    fill("w1d1p7_16","Please be aware that we ___ (change) the API key rotation policy.",["have changed"],"Perubahan kebijakan terbaru yang masih relevan sekarang → Present Perfect."),
    fill("w1d1p7_17","By the time this email reaches you, the deployment ___ (finish).",["will have finished"],"Future Perfect untuk tindakan yang selesai SEBELUM titik waktu di masa depan. 'By the time this email reaches you...'"),
    fill("w1d1p7_18","The SLA breach ___ (occur) because the primary and backup both ___ (fail) simultaneously.",["occurred","had failed"],"Narasi kejadian dalam Past Simple. Penyebab yang terjadi lebih awal → Past Perfect."),
    fill("w1d1p7_19","Since last Monday, our error rate ___ (drop) from 5% to 0.3%.",["has dropped"],"Kata 'since last Monday' → Present Perfect. Perubahan dimulai Senin lalu dan masih relevan sekarang."),
    fill("w1d1p7_20","I ___ (discover) this morning that the authentication token ___ (expire).",["discovered","had expired"],"Penemuan pagi ini (Past Simple) + token sudah berakhir SEBELUM penemuan (Past Perfect)."),
    fill("w1d1p7_21","The feature ___ (be) tested by three different QA engineers and ___ (receive) approval.",["has been","has received"],"Status saat ini tentang persetujuan → Present Perfect Passive dan Active."),
    fill("w1d1p7_22","At 11 PM last night, the auto-scaler ___ (trigger) and ___ (spin up) 20 new instances.",["triggered","spun up"],"Waktu spesifik di masa lalu → keduanya Past Simple."),
    fill("w1d1p7_23","I ___ (not / see) the PR description — ___ (you / add) acceptance criteria?",["have not seen","Have you added"],"Kata 'not yet seen' → Present Perfect. Menanyakan status saat ini → Present Perfect."),
    fill("w1d1p7_24","It ___ (come) to our attention that the user data migration ___ (not / complete) correctly.",["has come","did not complete"],"'Has come' → Present Perfect untuk pemberitahuan saat ini. 'Did not complete' → Past Simple untuk kejadian yang sudah selesai."),
    fill("w1d1p7_25","The contractor ___ (submit) the deliverables on Friday, but the PM ___ (not / review) them yet.",["submitted","has not reviewed"],"'On Friday' = hari spesifik di masa lalu → Past Simple. 'Not yet' = Present Perfect. Dua klausa berbeda, dua tense berbeda."),
  ]
},
/* PHASE 8 – Error correction ────────────────────────────────────────────────── */
{
  id:"w1d1p8", phaseNumber:8,
  title:"Error Correction",
  objective:"Identify and correct tense errors in realistic IT writing.",
  drills:[
    fix("w1d1p8_01","The team have already deploy the fix before the client noticed the bug.","The team had already deployed the fix before the client noticed the bug.","'Before the client noticed' = kejadian masa lalu → tindakan yang lebih awal membutuhkan Past Perfect 'had deployed'."),
    fix("w1d1p8_02","Since we switched to microservices, response times improved significantly.","Since we switched to microservices, response times have improved significantly.","Kata 'since' → Present Perfect. 'have improved' adalah bentuk yang benar, bukan 'improved'."),
    fix("w1d1p8_03","I work at this company since 2021 and I shipped three major features so far.","I have been working at this company since 2021 and I have shipped three major features so far.","Kata 'since 2021' dan 'so far' → Present Perfect. Keduanya menunjukkan relevansi sampai sekarang."),
    fix("w1d1p8_04","Did you ever pushed to production without a code review?","Have you ever pushed to production without a code review?","Kata 'ever' + pengalaman → Present Perfect. Pertanyaan yang benar: 'Have you ever pushed...'"),
    fix("w1d1p8_05","The deploy failed at 3 PM and the on-call engineer has been paged immediately.","The deploy failed at 3 PM and the on-call engineer was paged immediately.","Urutan waktu spesifik di masa lalu → keduanya Past Simple Passive. 'Deployed' dan 'was paged' — keduanya kejadian yang sudah selesai."),
    fix("w1d1p8_06","We haven't released the feature yet because the QA team didn't finish yet.","We haven't released the feature yet because the QA team hasn't finished yet.","Kedua tindakan masih relevan saat ini ('not yet') → keduanya Present Perfect."),
    fix("w1d1p8_07","The server ran for 200 days before it finally crashed last Tuesday.","The server had been running for 200 days before it finally crashed last Tuesday.","Durasi sebelum kejadian masa lalu → Past Perfect Continuous. Server sudah berjalan selama 200 hari SEBELUM crash."),
    fix("w1d1p8_08","I seen this error pattern before, but I am not sure how to fix it.","I have seen this error pattern before, but I am not sure how to fix it.","Pengalaman 'before' → Present Perfect. Bentuk yang benar: 'I have seen this pattern before'."),
    fix("w1d1p8_09","Has the pipeline passed all tests at 4 PM yesterday?","Did the pipeline pass all tests at 4 PM yesterday?","'At 4 PM yesterday' = waktu spesifik kemarin → Past Simple: 'Did it pass'."),
    fix("w1d1p8_10","The config had been updated, which is why it is currently working.","The config has been updated, which is why it is currently working.","Saat ini sedang bekerja (present) → Past Perfect salah untuk situasi ini; gunakan Present Perfect."),
    fix("w1d1p8_11","How long did you work on this bug? It looks like a complex one.","How long have you been working on this bug? It looks like a complex one.","'How long' untuk aktivitas yang masih berlangsung → Present Perfect Continuous. Bukan 'did you work on'."),
    fix("w1d1p8_12","We are not yet completed the security audit.","We have not yet completed the security audit.","Kata 'not yet' dengan relevansi saat ini → Present Perfect. 'have not yet completed' adalah bentuk yang benar."),
    fix("w1d1p8_13","The tech lead told me that she already reviewed my code.","The tech lead told me that she had already reviewed my code.","Dalam reported speech (kalimat tidak langsung), tense digeser mundur: has → had."),
    fix("w1d1p8_14","Error logs shown that the cache has expired before the request arrived.","Error logs showed that the cache had expired before the request arrived.","Narasi masa lalu → Past Simple ('showed'). Kejadian yang lebih awal sebelumnya → Past Perfect ('had expired')."),
    fix("w1d1p8_15","I just receive the Jira notification about the failing build.","I have just received the Jira notification about the failing build.","Kata 'just' → Present Perfect. Bentuk yang benar: 'have just received'."),
    fix("w1d1p8_16","The team completed the sprint last Friday and they already started the new one.","The team completed the sprint last Friday and they have already started the new one.","Kata 'already' + relevansi saat ini → Present Perfect untuk klausa kedua. 'Have already started' bukan 'already started'."),
    fix("w1d1p8_17","Never I have seen such clean architecture in a legacy codebase.","Never have I seen such clean architecture in a legacy codebase.","Setelah 'Never' di awal kalimat, gunakan INVERSION: auxiliary verb (have) pindah SEBELUM subjek (I). 'Never have I seen'."),
    fix("w1d1p8_18","The API has been down for two hours yesterday before the fix.","The API was down for two hours yesterday before the fix.","Kata 'yesterday' = hari kemarin yang sudah berlalu → Past Simple. Bukan Present Perfect."),
    fix("w1d1p8_19","We noticed that no one document the edge cases.","We noticed that no one had documented the edge cases.","Kita 'noticed' (past) → kondisi sebelumnya yang tidak terdokumentasi → Past Perfect."),
    fix("w1d1p8_20","Did the new feature already released to production?","Has the new feature already been released to production?","Kata 'already' → Present Perfect Passive. Struktur: Has + subjek + been + past participle."),
    fix("w1d1p8_21","The monitoring system been alerting since the config change.","The monitoring system has been alerting since the config change.","Kata 'since' → Present Perfect Continuous. Sistem sudah terus-menerus memberi alert dari saat config berubah."),
    fix("w1d1p8_22","I work on the reporting module since Monday and I am nearly done.","I have been working on the reporting module since Monday and I am nearly done.","Kata 'since Monday' → Present Perfect Continuous. 'have been working' bukan 'work'."),
    fix("w1d1p8_23","The deployment succeed but the health checks was failing for 10 minutes.","The deployment succeeded but the health checks were failing for 10 minutes.","Narasi masa lalu: 'succeeded' → Past Simple. 'were failing' → Past Continuous (sedang berlangsung saat itu)."),
    fix("w1d1p8_24","Since migrating to the cloud, operational costs are reduced by 30%.","Since migrating to the cloud, operational costs have been reduced by 30%.","Kata 'since migrating' → Present Perfect Passive. 'have been reduced' adalah bentuk yang benar."),
    fix("w1d1p8_25","Nobody has read the post-mortem that we wrote last week yet.","Nobody has read the post-mortem that we wrote last week yet. (Correct — no error)","Kalimat ini sudah BENAR. 'wrote' (Past Simple, karena 'last week') + 'has read' (Present Perfect, karena 'not yet'). Tidak ada kesalahan."),
  ]
},
/* PHASE 9 – Transform ───────────────────────────────────────────────────────── */
{
  id:"w1d1p9", phaseNumber:9,
  title:"Sentence Transformation",
  objective:"Rewrite sentences in the specified tense or voice.",
  drills:[
    transform("w1d1p9_01","Rewrite in present perfect:\n'The team fixed the critical bug. (just)'","The team has just fixed the critical bug.","Kata 'just' → Present Perfect."),
    transform("w1d1p9_02","Combine using past perfect to show sequence:\n'We deployed the code. After that, the monitoring alert fired.'","After we had deployed the code, the monitoring alert fired.","Kejadian yang terjadi lebih awal = Past Perfect."),
    transform("w1d1p9_03","Rewrite as a question in present perfect:\n'You reviewed the API documentation.'","Have you reviewed the API documentation?"),
    transform("w1d1p9_04","Rewrite in past perfect:\n'The config was already updated when we checked.'","The config had already been updated when we checked."),
    transform("w1d1p9_05","Add 'since' to make this present perfect:\n'The build broke. [after the Tuesday merge]'","The build has been broken since the Tuesday merge."),
    transform("w1d1p9_06","Rewrite in present perfect continuous:\n'She started debugging at 9 AM. It is now 2 PM.'","She has been debugging since 9 AM."),
    transform("w1d1p9_07","Rewrite as a negative present perfect:\n'The client responded to our proposal.'","The client has not responded to our proposal (yet)."),
    transform("w1d1p9_08","Rewrite in past perfect:\n'They failed to test the endpoint. Then the bug reached production.'","They had failed to test the endpoint before the bug reached production."),
    transform("w1d1p9_09","Rewrite with 'yet':\n'We haven't updated the README.'","We haven't updated the README yet."),
    transform("w1d1p9_10","Rewrite as past simple (add 'last sprint'):\n'We have resolved the technical debt.'","We resolved the technical debt last sprint."),
    transform("w1d1p9_11","Rewrite with 'for':\n'The server started running in January. It is still running.'","The server has been running for [X months/years].","Present Perfect Continuous + 'for' (durasi). 'The server has been running for [X months]' = sudah berjalan selama X bulan sampai sekarang."),
    transform("w1d1p9_12","Combine using past perfect:\n'The engineer left the company. Later, the bug was discovered.'","The engineer had left the company by the time the bug was discovered."),
    transform("w1d1p9_13","Rewrite in present perfect passive:\n'Someone merged the PR without approval.'","The PR has been merged without approval."),
    transform("w1d1p9_14","Rewrite in past perfect:\n'She said: \"I have already emailed the client.\"'","She said she had already emailed the client.","Dalam kalimat tidak langsung (reported speech), tense digeser mundur: has already reviewed → had already reviewed."),
    transform("w1d1p9_15","Rewrite with 'ever':\n'Has any team member worked with Rust before?'","Has any team member ever worked with Rust?"),
    transform("w1d1p9_16","Rewrite in past perfect continuous:\n'They debugged for 3 hours. Then they found the issue.'","They had been debugging for 3 hours when they finally found the issue."),
    transform("w1d1p9_17","Rewrite in present perfect:\n'The monitoring was last checked on Monday.'","The monitoring has not been checked since Monday.","Implikasi 'since' → Present Perfect. 'Has not been checked since Monday' = dari Senin sampai sekarang tidak ada pengecekan."),
    transform("w1d1p9_18","Rewrite as past simple (add 'in version 2.3'):\n'We have fixed this regression.'","We fixed this regression in version 2.3."),
    transform("w1d1p9_19","Rewrite with 'never... before':\n'This is the first outage affecting all regions.'","We have never had an outage affecting all regions before."),
    transform("w1d1p9_20","Rewrite in past perfect passive:\n'Someone deleted the config before the crash.'","The config had been deleted before the crash."),
    transform("w1d1p9_21","Make it a present perfect question with 'how many times':\n'The pipeline has failed this week.'","How many times has the pipeline failed this week?"),
    transform("w1d1p9_22","Rewrite in present perfect with 'already':\n'The tech lead approved the architecture.'","The tech lead has already approved the architecture."),
    transform("w1d1p9_23","Combine with 'by the time' + past perfect:\n'The alert fired. The team had already fixed it.'","By the time the alert fired, the team had already fixed it."),
    transform("w1d1p9_24","Rewrite as a wh-question in past simple:\n'The deploy failed at some point yesterday.'","When did the deploy fail yesterday?"),
    transform("w1d1p9_25","Rewrite as a present perfect passive:\n'The vendor just updated the API documentation.'","The API documentation has just been updated by the vendor."),
  ]
},
/* PHASE 10 – Mixed production: writing & speaking ───────────────────────────  */
{
  id:"w1d1p10", phaseNumber:10,
  title:"Production — Mixed Writing & Speaking",
  objective:"Produce tense-accurate professional writing and speaking independently.",
  drills:[
    write("w1d1p10_01","Write a Slack status update (2 sentences).\nUse present perfect for what you completed and past simple for the specific time.\nContext: You finished a code review this morning at 10 AM.",50,"I have just completed... I finished it at 10 AM this morning."),
    write("w1d1p10_02","Write a 3-sentence incident summary.\nUse past simple for the event sequence and past perfect for what preceded the outage.\nContext: DB ran out of disk at 2 PM. Before that, the team had ignored three storage warnings.",80,"The database ran out... The service had been showing..."),
    write("w1d1p10_03","Write a 2-sentence sprint status update.\nUse present perfect for completed tasks and 'this sprint'.",50,"We have completed X tasks this sprint..."),
    speak("w1d1p10_04","Describe what you worked on last week (past simple) and what you have achieved in terms of impact on the current codebase (present perfect). Speak for 60 seconds.","Yesterday I... / This week I have..."),
    write("w1d1p10_05","Write a 3-sentence Jira ticket comment explaining why a task is delayed.\nUse present perfect for what has happened and past perfect for what should have been done.",80,"The task has been delayed because..."),
    write("w1d1p10_06","Write a formal 3-sentence post-mortem statement.\nUse present perfect passive for the resolution and past simple for the incident.",80),
    speak("w1d1p10_07","Tell your team: what specific bug have you fixed recently (present perfect), and when exactly you found it (past simple). Use 'since', 'just', and 'before'. 45 seconds."),
    write("w1d1p10_08","Correct ALL tense errors, then rewrite the paragraph:\n'We deploy the new authentication system last sprint. Since then, login errors are reduce by 70%. The team work very hard for three weeks before the release.'",120,undefined,"We deployed the new authentication system last sprint. Since then, login errors have been reduced by 70%. The team had been working very hard for three weeks before the release."),
    write("w1d1p10_09","Write an email opening (3 sentences) to a client informing them of a resolved incident.\nUse present perfect for the resolution status and past simple for the incident details.",80,"Dear [Name], I am writing to confirm that the incident has been resolved..."),
    write("w1d1p10_10","Write a README section opening (2 sentences): describe what your library does now (present perfect for its state) and when it was first released (past simple).",60),
    speak("w1d1p10_11","Present your sprint achievements in 60 seconds. Include: what the team has completed (present perfect), what blocked you last week (past simple), and what you are working on now. Use at least 3 different tenses."),
    write("w1d1p10_12","Rewrite as a formal incident report (4 sentences):\n'Something went wrong with the API. It was down. We fixed it. Users are ok now.'",100,"Use specific tenses: past simple for events, present perfect for resolution, 'since' for current state."),
    write("w1d1p10_13","Write a 3-sentence code review comment explaining why a pattern is problematic.\nReference: the team 'has used' this pattern before (present perfect), it 'caused' issues in a specific past release (past simple).",80),
    speak("w1d1p10_14","You are onboarding a new team member. Explain: what technologies the team has adopted this year (present perfect), what major projects were completed last year (past simple), and what the team has been building recently (present perfect continuous). 90 seconds."),
    write("w1d1p10_15","Write a standup update (3 sentences, under 60 words).\nYesterday: debugged a memory leak (found root cause). Today: writing the fix. Blocker: waiting for DB access.",60),
    write("w1d1p10_16","Write a release note for version 3.1 (3 sentences).\nWhat has been improved, what was fixed in a specific past sprint, what the team has added.",80),
    write("w1d1p10_17","Correct this standup message and rewrite it:\n'Yesterday I work on the API. I have done two things: fix the timeout and add the retry logic. Today I will start on the caching. No blockers.'",80),
    speak("w1d1p10_18","You are in a team retrospective. Describe: what went well (present perfect), what went wrong in a specific moment last sprint (past simple), and what the team had been doing wrong for weeks before you noticed (past perfect continuous). 75 seconds."),
    write("w1d1p10_19","Write a 3-sentence status email to your manager:\n- The feature is 80% done (present perfect)\n- You encountered a dependency issue last Thursday (past simple)\n- The issue is now resolved (present perfect passive)",80),
    write("w1d1p10_20","Write the opening 3 sentences of a tech blog post about a migration you completed.\nUse past simple for the migration narrative, present perfect for the current results.",100),
    speak("w1d1p10_21","Explain the difference between present perfect and past simple to a non-native speaker colleague. Use IT examples. Make it practical, not academic. 60 seconds."),
    write("w1d1p10_22","Fill in the blanks in this incident report:\n'At 14:30 UTC, the payment service ___ (become) unresponsive. Investigation ___ (reveal) that the connection pool ___ (exhaust). The team ___ (restore) the service at 15:10 UTC. Since then, we ___ (monitor) the pool carefully.'",100),
    write("w1d1p10_23","Rewrite this informal Slack message as a formal status email:\n'Hey guys, so we fixed the thing! It was broken since yesterday. The deploy worked now. All good!'",80),
    speak("w1d1p10_24","Your manager asks 'How long have you been on this project and what have you achieved?' Answer in 60 seconds. Use present perfect continuous for duration, present perfect for achievements, past simple for specific past milestones."),
    write("w1d1p10_25","Write a 4-sentence project update for a stakeholder who missed last week's meeting.\nCover: what the team has completed (present perfect), what happened at the last milestone (past simple), what is currently in progress, and when delivery is expected.",120),
  ]
},
]
}

/* ── Week 1 · Days 2–5: Same structure, different grammar focus ─────────────── */

function makeDay(week: number, day: number, title: string, focus: string, theory: string, phaseData: Phase[]): DayPlan {
  return { week, day, title, focus, theory, phases: phaseData }
}

/* Day 2 – Past Perfect ──────────────────────────────────────────────────────── */
function w1d2Phases(): Phase[] {
  const p = (n: number, t: string, obj: string, drills: Drill[]) =>
    ({ id: `w1d2p${n}`, phaseNumber: n, title: t, objective: obj, drills })
  return [
    p(1,"Recognition MCQ","Identify past perfect in context",[
      mcq("w1d2p1_01","By the time the sprint ended, we ___ all the acceptance criteria.",["a:completed","b:had completed","c:have completed","d:was completing"],"b","Sebelum kejadian di masa lalu → Past Perfect. Tindakan yang terjadi LEBIH AWAL dari kejadian masa lalu lainnya."),
      mcq("w1d2p1_02","The server ___ down for hours before anyone noticed.",["a:was","b:had been","c:has been","d:is"],"b","Sebelum siapapun menyadarinya (past) → Past Perfect. Bug sudah ada sebelum ada yang tahu."),
      mcq("w1d2p1_03","She realised she ___ pushed to the wrong branch.",["a:has","b:had","c:was","d:is"],"b","Menyadari (Past Simple) → kesalahan yang terjadi lebih awal → Past Perfect."),
      mcq("w1d2p1_04","I found out that the config ___ been changed without approval.",["a:has","b:had","c:is","d:was"],"b","Mengetahui (Past Simple) → perubahan yang terjadi lebih awal → Past Perfect Passive."),
      mcq("w1d2p1_05","Before the post-mortem, nobody ___ analysed the root cause.",["a:has","b:had","c:was","d:is"],"b","Kata 'before' = titik referensi masa lalu → Past Perfect. Tindakan yang terjadi SEBELUM titik itu."),
      mcq("w1d2p1_06","We ___ never seen this race condition before the stress test.",["a:have","b:had","c:did","d:were"],"b","Sebelum stress test (kejadian masa lalu) → Past Perfect. Tindakan yang terjadi lebih awal."),
      mcq("w1d2p1_07","The QA team found that the devs ___ not written tests for the edge cases.",["a:have","b:had","c:did","d:were"],"b","Menemukan (Past Simple) → kelalaian yang terjadi lebih awal → Past Perfect."),
      mcq("w1d2p1_08","By the time help arrived, the system ___ already recovered itself.",["a:has","b:had","c:is","d:was"],"b","Sebelum bantuan tiba → Past Perfect. Tim sudah memperbaiki masalah SEBELUM bantuan datang."),
      mcq("w1d2p1_09","He told me the pipeline ___ failed three times that morning.",["a:has","b:had","c:is","d:was"],"b","Reported speech → backshift (tense digeser mundur) → Past Perfect. Present Perfect menjadi Past Perfect."),
      mcq("w1d2p1_10","They launched the feature before the security team ___ reviewed it.",["a:has","b:had","c:is","d:was"],"b","Sebelum kejadian di masa lalu → Past Perfect. Tindakan yang terjadi LEBIH AWAL dari kejadian masa lalu lainnya."),
      mcq("w1d2p1_11","Once we ___ deployed the fix, the error rate dropped immediately.",["a:have","b:had","c:were","d:are"],"b","Kata 'once' + penyelesaian sebelumnya → Past Perfect. Tindakan yang SUDAH SELESAI sebelum tindakan lain dimulai."),
      mcq("w1d2p1_12","The client was upset because we ___ not informed them about the delay.",["a:have","b:had","c:did","d:were"],"b","Kata 'because' dengan alasan dari masa lalu → Past Perfect. Penyebab yang terjadi lebih awal dari akibatnya."),
      mcq("w1d2p1_13","After I ___ reviewed all the logs, I wrote the incident report.",["a:have","b:had","c:was","d:am"],"b","Kata 'after' = penyelesaian sebelumnya → Past Perfect. Tindakan di klausa 'after' terjadi LEBIH DAHULU."),
      mcq("w1d2p1_14","The outage happened because someone ___ deleted the load balancer rule.",["a:has","b:had","c:is","d:did"],"b","Penyebab kejadian masa lalu → Past Perfect. Sesuatu yang terjadi LEBIH AWAL dari kejadian yang dibicarakan."),
      mcq("w1d2p1_15","The senior dev confirmed that no one ___ tested the rollback procedure.",["a:has","b:had","c:is","d:was"],"b","Konfirmasi dalam reported speech tentang kondisi di masa lalu → Past Perfect."),
      mcq("w1d2p1_16","We released v4 only after we ___ migrated all customers to v3.",["a:have","b:had","c:were","d:are"],"b","Kata 'after' = penyelesaian sebelumnya → Past Perfect. Tindakan di klausa 'after' terjadi LEBIH DAHULU."),
      mcq("w1d2p1_17","When I joined, the team ___ already established a branching strategy.",["a:has","b:had","c:is","d:was"],"b","'When I joined' (Past Simple) → kondisi yang sudah ada sebelumnya → Past Perfect."),
      mcq("w1d2p1_18","The deploy script ___ never been tested in a staging environment before the incident.",["a:has","b:had","c:is","d:was"],"b","Sebelum insiden (kejadian masa lalu) → Past Perfect. Kondisi yang ada sebelum insiden terjadi."),
      mcq("w1d2p1_19","The ticket was already closed by the time I ___ looked at it.",["a:have","b:had","c:am","d:is"],"b","Kata 'by the time' + tindakan masa lalu → Past Perfect. Pada saat kejadian itu terjadi, tindakan ini sudah selesai lebih dulu."),
      mcq("w1d2p1_20","She told us she ___ already sent the report to the client.",["a:has","b:had","c:is","d:was"],"b","Reported speech → backshift (tense digeser mundur). 'Has sent' menjadi 'had sent' dalam kalimat tidak langsung."),
      mcq("w1d2p1_21","Once the team ___ identified the bottleneck, performance improved dramatically.",["a:has","b:had","c:is","d:was"],"b","Kata 'once' + tindakan sebelumnya → Past Perfect. Tindakan yang sudah dilakukan lebih dulu."),
      mcq("w1d2p1_22","He ___ not seen the error message before I showed him the logs.",["a:has","b:had","c:is","d:was"],"b","Sebelum saya menunjukkan (Past Simple) → Past Perfect. Perubahan sudah terjadi SEBELUM saya melihatnya."),
      mcq("w1d2p1_23","By 2 AM, the on-call team ___ already resolved the incident.",["a:has","b:had","c:is","d:was"],"b","Pada waktu spesifik di masa lalu → Past Perfect. Tindakan sudah selesai SEBELUM titik waktu tersebut."),
      mcq("w1d2p1_24","We discovered that the service ___ been leaking memory for weeks.",["a:has","b:had","c:is","d:was"],"b","Ditemukan (Past Simple) + kondisi yang ada sebelumnya → Past Perfect. Kondisi itu ada SEBELUM ditemukan."),
      mcq("w1d2p1_25","The architect ___ already left when the design review started.",["a:has","b:had","c:is","d:was"],"b","Sebelum review (kejadian masa lalu) → Past Perfect. Pekerjaan sudah selesai sebelum review dimulai."),
    ]),
    p(2,"Two-Event Sequence MCQ","Choose past perfect for the earlier of two past events",[
      mcq("w1d2p2_01","The alert fired after the cache ___ exhausted all available memory.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_02","I fixed the bug that someone ___ introduced in the previous commit.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_03","The client called because they ___ spotted errors in the report.",["a:have","b:had","c:are","d:were"],"b"),
      mcq("w1d2p2_04","Before I ___ the meeting, I reviewed all the architecture diagrams.",["a:joining","b:had joined","c:have joined","d:joined"],"b"),
      mcq("w1d2p2_05","The bug only appeared after we ___ updated the dependency version.",["a:have","b:had","c:are","d:were"],"b"),
      mcq("w1d2p2_06","She noticed that the tests ___ been failing since Friday.",["a:have","b:had","c:are","d:were"],"b"),
      mcq("w1d2p2_07","By the time the client escalated, the team ___ already written a fix.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_08","I found out that he ___ committed secrets to the repository.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_09","The service recovered once the ops team ___ restarted the container.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_10","She explained that they ___ not received approval from legal.",["a:have","b:had","c:are","d:were"],"b"),
      mcq("w1d2p2_11","The deployment failed because the env vars ___ not been set correctly.",["a:have","b:had","c:are","d:were"],"b"),
      mcq("w1d2p2_12","When I opened the PR, I saw that CI ___ already passed.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_13","He realised he ___ misread the requirements.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_14","The site went down because nobody ___ renewed the SSL certificate.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_15","After the team ___ agreed on the approach, development started immediately.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_16","The PM noticed that the deadline ___ already passed.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_17","The build broke because a developer ___ removed a critical dependency.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_18","The junior dev submitted a PR before the tech lead ___ approved the design.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_19","I discovered that we ___ been charged twice for the same service.",["a:have","b:had","c:are","d:were"],"b"),
      mcq("w1d2p2_20","By the time I joined the company, the platform ___ already reached 1M users.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_21","The rollback succeeded once the team ___ identified the breaking change.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_22","She was upset because no one ___ told her about the architecture change.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_23","We found that the original developer ___ not left any documentation.",["a:has","b:had","c:is","d:was"],"b"),
      mcq("w1d2p2_24","The tests passed only after we ___ fixed the flaky network mock.",["a:have","b:had","c:are","d:were"],"b"),
      mcq("w1d2p2_25","By 3 PM, the incident commander ___ already briefed the CEO.",["a:has","b:had","c:is","d:was"],"b"),
    ]),
    p(3,"Fill — Past Perfect Simple","Produce past perfect in context",[
      fill("w1d2p3_01","By the time the client called, the team ___ (already / resolve) the issue.",["had already resolved"]),
      fill("w1d2p3_02","I ___ (never / deploy) a zero-downtime migration before this project.",["had never deployed"]),
      fill("w1d2p3_03","She told me she ___ (send) the report, but I couldn't find it.",["had sent"]),
      fill("w1d2p3_04","The bug ___ (introduce) in a commit from two weeks earlier.",["had been introduced"]),
      fill("w1d2p3_05","We launched v3 after we ___ (migrate) 100% of users from v2.",["had migrated"]),
      fill("w1d2p3_06","The alert fired because the load balancer ___ (exhaust) its connection pool.",["had exhausted"]),
      fill("w1d2p3_07","When I opened Jira, I saw that someone ___ (already / close) the ticket.",["had already closed"]),
      fill("w1d2p3_08","The deployment failed because the build ___ (not / complete) successfully.",["had not completed"]),
      fill("w1d2p3_09","By the retrospective, we ___ (discuss) this problem three times before.",["had discussed"]),
      fill("w1d2p3_10","He explained that he ___ (not / see) that requirement in the spec.",["had not seen"]),
      fill("w1d2p3_11","Once the team ___ (agree) on the API design, development started.",["had agreed"]),
      fill("w1d2p3_12","The outage happened because someone ___ (delete) the config file by mistake.",["had deleted"]),
      fill("w1d2p3_13","She ___ (not / work) with this framework before joining the project.",["had not worked"]),
      fill("w1d2p3_14","The senior engineer confirmed that no tests ___ (run) against the endpoint.",["had been run"]),
      fill("w1d2p3_15","I realised I ___ (push) to main instead of the feature branch.",["had pushed"]),
      fill("w1d2p3_16","By the time the fix was deployed, users ___ (already / contact) support.",["had already contacted"]),
      fill("w1d2p3_17","The data was corrupted because the backup job ___ (not / run) for a week.",["had not run"]),
      fill("w1d2p3_18","After I ___ (review) the logs, I wrote the root cause analysis.",["had reviewed"]),
      fill("w1d2p3_19","They were surprised because no one ___ (inform) them of the change.",["had informed"]),
      fill("w1d2p3_20","The team ___ (already / document) the API before I started work on it.",["had already documented"]),
      fill("w1d2p3_21","I checked the error and found that the connection ___ (time out).",["had timed out"]),
      fill("w1d2p3_22","The sprint ___ (barely / begin) when the first P1 incident hit.",["had barely begun"]),
      fill("w1d2p3_23","She noticed that the test suite ___ (not / include) integration tests.",["had not included"]),
      fill("w1d2p3_24","Before we escalated, we ___ (try) three different approaches.",["had tried"]),
      fill("w1d2p3_25","By the time I read the email, the meeting ___ (already / end).",["had already ended"]),
    ]),
    p(4,"Fill — Past Perfect Continuous","Duration before a past event",[
      fill("w1d2p4_01","The server ___ (run) for 300 days before it finally crashed.",["had been running"]),
      fill("w1d2p4_02","She ___ (debug) for four hours when she finally found the issue.",["had been debugging"]),
      fill("w1d2p4_03","The team ___ (ignore) the tech debt for months before it caused an outage.",["had been ignoring"]),
      fill("w1d2p4_04","He ___ (work) on the wrong branch for two days before noticing.",["had been working"]),
      fill("w1d2p4_05","The memory leak ___ (grow) slowly for weeks before anyone noticed.",["had been growing"]),
      fill("w1d2p4_06","We ___ (use) the wrong API endpoint for three sprints.",["had been using"]),
      fill("w1d2p4_07","The CI pipeline ___ (fail) intermittently for a week before we fixed it.",["had been failing"]),
      fill("w1d2p4_08","The engineering team ___ (plan) the migration for six months before execution.",["had been planning"]),
      fill("w1d2p4_09","The junior dev ___ (write) tests without running them when the lead noticed.",["had been writing"]),
      fill("w1d2p4_10","The cache ___ (return) stale data for hours before someone checked.",["had been returning"]),
      fill("w1d2p4_11","By the time I joined, they ___ (try) to solve this scalability issue for a year.",["had been trying"]),
      fill("w1d2p4_12","The logs showed the error ___ (occur) every 15 minutes for two days.",["had been occurring"]),
      fill("w1d2p4_13","The contractor ___ (develop) the wrong feature for three weeks before the review.",["had been developing"]),
      fill("w1d2p4_14","The team ___ (monitor) the wrong metrics before they identified the real issue.",["had been monitoring"]),
      fill("w1d2p4_15","She ___ (wait) for the PR review for three days when she finally pinged the reviewer.",["had been waiting"]),
      fill("w1d2p4_16","The database ___ (operate) without indexes for months before performance tanked.",["had been operating"]),
      fill("w1d2p4_17","He ___ (work) on the design doc all morning when the requirements changed.",["had been working"]),
      fill("w1d2p4_18","The service ___ (consume) 95% CPU for hours before the alert fired.",["had been consuming"]),
      fill("w1d2p4_19","They ___ (deploy) to production every Friday before the policy change.",["had been deploying"]),
      fill("w1d2p4_20","The client ___ (complain) about slow performance for weeks before we investigated.",["had been complaining"]),
      fill("w1d2p4_21","The engineer ___ (look) for the bug for hours when her pair found it in 5 minutes.",["had been looking"]),
      fill("w1d2p4_22","The team ___ (skip) retrospectives for months when the PM mandated them.",["had been skipping"]),
      fill("w1d2p4_23","The disk ___ (fill) up gradually for weeks — nobody had set up an alert.",["had been filling"]),
      fill("w1d2p4_24","We ___ (use) deprecated libraries for so long that upgrading took a full sprint.",["had been using"]),
      fill("w1d2p4_25","She ___ (review) the same PR for two days before the developer realised the context was wrong.",["had been reviewing"]),
    ]),
    p(5,"Error Correction — Past Perfect","Fix past perfect errors in IT writing",[
      fix("w1d2p5_01","By the time we noticed, the data has corrupted.","By the time we noticed, the data had corrupted."),
      fix("w1d2p5_02","She told me that the PR is approved before I even submitted it.","She told me that the PR had been approved before I even submitted it."),
      fix("w1d2p5_03","After we deployed the fix, the team celebrated — the issue finally resolved.","After we had deployed the fix, the team celebrated — the issue had finally been resolved."),
      fix("w1d2p5_04","The system ran for six months without a restart before it crashed.","The system had been running for six months without a restart before it crashed."),
      fix("w1d2p5_05","I found out that no one has updated the dependencies in over a year.","I found out that no one had updated the dependencies in over a year."),
      fix("w1d2p5_06","We launched after we test all the acceptance criteria.","We launched after we had tested all the acceptance criteria."),
      fix("w1d2p5_07","He noticed the config was wrong only after the deploy starts.","He noticed the config was wrong only after the deploy had started."),
      fix("w1d2p5_08","The junior dev committed secrets that never been exposed before.","The junior dev committed secrets that had never been exposed before."),
      fix("w1d2p5_09","By the time QA signed off, the developers already forgot the context.","By the time QA signed off, the developers had already forgotten the context."),
      fix("w1d2p5_10","The alert didn't fire because the threshold been set too high.","The alert didn't fire because the threshold had been set too high."),
      fix("w1d2p5_11","Once the team agreed, they started immediately. They discussed for weeks.","Once the team had agreed, they started immediately. They had been discussing it for weeks."),
      fix("w1d2p5_12","She realised she forgotten to push her changes before leaving for the day.","She realised she had forgotten to push her changes before leaving for the day."),
      fix("w1d2p5_13","The incident has happened because someone removed the rate limiter.","The incident had happened because someone had removed the rate limiter."),
      fix("w1d2p5_14","I joined in January. By March, the team was working on this module for six months.","I joined in January. By March, the team had been working on this module for six months."),
      fix("w1d2p5_15","The config was wrong. Someone changed it without following the process.","The config was wrong. Someone had changed it without following the process."),
      fix("w1d2p5_16","Before we escalated, we tried everything we can think of.","Before we escalated, we had tried everything we could think of."),
      fix("w1d2p5_17","He said the server run for 200 days without issue.","He said the server had been running for 200 days without issue."),
      fix("w1d2p5_18","The regression appeared because the dev removed a guard clause that prevent invalid states.","The regression appeared because the dev had removed a guard clause that prevented invalid states."),
      fix("w1d2p5_19","Once the backup completed, the team start restoring the service.","Once the backup had completed, the team started restoring the service."),
      fix("w1d2p5_20","She reviewed the code after the PR has been merged already.",  "She reviewed the code after the PR had already been merged."),
      fix("w1d2p5_21","They were shocked because nobody caught this issue in code review.","They were shocked because nobody had caught this issue in code review."),
      fix("w1d2p5_22","The project manager told us the deadline has passed.","The project manager told us the deadline had passed."),
      fix("w1d2p5_23","By the time the fix has been released, 500 users were affected.","By the time the fix had been released, 500 users were affected."),
      fix("w1d2p5_24","We discovered the engineer who write the module has left the company.","We discovered the engineer who wrote the module had left the company."),
      fix("w1d2p5_25","She told the team what she found: the certificate been expired for three days.","She told the team what she had found: the certificate had been expired for three days."),
    ]),
    p(6,"Transform — Sequence Building","Combine two past sentences using past perfect",[
      transform("w1d2p6_01","The team deployed the fix. Then the error rate dropped.\n→ Use past perfect for the first action.","After the team had deployed the fix, the error rate dropped."),
      transform("w1d2p6_02","I read the ticket description. Then I realised I was on the wrong task.\n→ Start with 'Only after...'","Only after I had read the ticket description did I realise I was on the wrong task."),
      transform("w1d2p6_03","The developer pushed secrets. Nobody noticed for weeks.\n→ Use past perfect passive.","Secrets had been pushed to the repository and nobody noticed for weeks."),
      transform("w1d2p6_04","She debugged for three hours. Then she found the null pointer.\n→ Use past perfect continuous.","She had been debugging for three hours when she finally found the null pointer."),
      transform("w1d2p6_05","We decided to roll back. Before that, we tried the patch twice.\n→ 'Before we decided...'","Before we decided to roll back, we had tried the patch twice."),
      transform("w1d2p6_06","Nobody documented the API. Later it was discovered that this caused confusion.\n→ Past perfect passive.","It was discovered that the API had not been documented, which caused confusion."),
      transform("w1d2p6_07","The alert fired. The team had already resolved the issue.\n→ 'By the time...'","By the time the alert fired, the team had already resolved the issue."),
      transform("w1d2p6_08","I joined the company. The architecture was already defined.\n→ 'When I joined...'","When I joined the company, the architecture had already been defined."),
      transform("w1d2p6_09","The build failed. Someone had removed a critical test.\n→ 'The build failed because...'","The build failed because someone had removed a critical test."),
      transform("w1d2p6_10","She wrote the report. Then she submitted it.\n→ 'After she had...'","After she had written the report, she submitted it."),
      transform("w1d2p6_11","We upgraded the database. Then the performance improved dramatically.\n→ 'Once we had...'","Once we had upgraded the database, the performance improved dramatically."),
      transform("w1d2p6_12","Nobody reviewed the PR. It was merged directly to main.\n→ Past perfect passive.","A PR that had not been reviewed was merged directly to main."),
      transform("w1d2p6_13","The team worked on the wrong requirement for a week. Then the PM corrected it.\n→ Past perfect continuous.","The team had been working on the wrong requirement for a week before the PM corrected it."),
      transform("w1d2p6_14","He sent the email. Then he realised he included the wrong attachment.\n→ 'Only after he had...'","Only after he had sent the email did he realise he had included the wrong attachment."),
      transform("w1d2p6_15","The API was live. Nobody had stress-tested it.\n→ 'The API went live although...'","The API went live although nobody had stress-tested it."),
      transform("w1d2p6_16","The config was updated without approval. The service crashed.\n→ Past perfect passive as cause.","The service crashed because the config had been updated without approval."),
      transform("w1d2p6_17","She reviewed 30 PRs. Then she went on leave.\n→ 'By the time she went on leave...'","By the time she went on leave, she had reviewed 30 PRs."),
      transform("w1d2p6_18","The team ignored the warning emails. The disk filled up.\n→ Past perfect continuous.","The disk filled up because the team had been ignoring the warning emails."),
      transform("w1d2p6_19","The junior developer committed to main. He didn't know about branch protection.\n→ Use 'had not known'","The junior developer committed to main because he had not known about branch protection."),
      transform("w1d2p6_20","I opened the PR. I saw CI had already run and failed.\n→ 'When I opened...'","When I opened the PR, I saw that CI had already run and failed."),
      transform("w1d2p6_21","The client expected feature X. But we built feature Y.\n→ Past perfect in reported speech.","The client said they had expected feature X, but we had built feature Y."),
      transform("w1d2p6_22","The team started refactoring. They hadn't estimated the effort first.\n→ 'The team started without...'","The team started refactoring without having estimated the effort first."),
      transform("w1d2p6_23","The bug was in the codebase for two years. Nobody found it.\n→ Past perfect continuous.","The bug had been in the codebase for two years before anyone found it."),
      transform("w1d2p6_24","She reviewed the design. Then she suggested changes.\n→ 'Only after she had...' + inversion","Only after she had reviewed the design did she suggest changes."),
      transform("w1d2p6_25","The service was down. The team didn't know. They found out an hour later.\n→ Past perfect.","The team found out an hour later that the service had been down."),
    ]),
    p(7,"Fill — Reported Speech Backshift","Past perfect in reported speech",[
      fill("w1d2p7_01",'She told me: "I have already merged the PR." → She told me she ___ (already/merge) the PR.',["had already merged"]),
      fill("w1d2p7_02",'He said: "The deploy has failed." → He said the deploy ___ (fail).',["had failed"]),
      fill("w1d2p7_03",'They told us: "Nobody has reviewed the security patch." → They told us nobody ___ (review) the security patch.',["had reviewed"]),
      fill("w1d2p7_04",'She reported: "The alert has been firing for an hour." → She reported the alert ___ (fire) for an hour.',["had been firing"]),
      fill("w1d2p7_05",'He explained: "I have been working on this for three hours." → He explained he ___ (work) on it for three hours.',["had been working"]),
      fill("w1d2p7_06",'The PM said: "We have missed the deadline." → The PM said they ___ (miss) the deadline.',["had missed"]),
      fill("w1d2p7_07",'She told the team: "I have found the root cause." → She told the team she ___ (find) the root cause.',["had found"]),
      fill("w1d2p7_08",'He confirmed: "The server has been down since midnight." → He confirmed the server ___ (be) down since midnight.',["had been"]),
      fill("w1d2p7_09",'The engineer said: "I have pushed a fix." → The engineer said she ___ (push) a fix.',["had pushed"]),
      fill("w1d2p7_10",'They reported: "We have been monitoring the situation." → They reported they ___ (monitor) the situation.',["had been monitoring"]),
      fill("w1d2p7_11",'The lead told me: "The client has escalated the issue." → The lead told me the client ___ (escalate) the issue.',["had escalated"]),
      fill("w1d2p7_12",'She said: "The config has been updated." → She said the config ___ (update).',["had been updated"]),
      fill("w1d2p7_13",'He told us: "I have just deployed to production." → He told us he ___ (just/deploy) to production.',["had just deployed"]),
      fill("w1d2p7_14",'The PM explained: "We have already notified the stakeholders." → She explained they ___ (already/notify) the stakeholders.',["had already notified"]),
      fill("w1d2p7_15",'The team said: "We have never seen this error before." → The team said they ___ (never/see) that error before.',["had never seen"]),
      fill("w1d2p7_16",'He explained: "The service has been running on deprecated code." → He explained the service ___ (run) on deprecated code.',["had been running"]),
      fill("w1d2p7_17",'She told me: "I have been trying to reproduce the bug for hours." → She told me she ___ (try) to reproduce it for hours.',["had been trying"]),
      fill("w1d2p7_18",'The auditor noted: "The logs have not been archived." → The auditor noted the logs ___ (not/archive).',["had not been archived"]),
      fill("w1d2p7_19",'He admitted: "I have not read the brief." → He admitted he ___ (not/read) the brief.',["had not read"]),
      fill("w1d2p7_20",'The DevOps lead said: "We have already patched the vulnerability." → She said they ___ (already/patch) it.',["had already patched"]),
      fill("w1d2p7_21",'She said: "The API has been throttling requests since Tuesday." → She said the API ___ (throttle) requests since Tuesday.',["had been throttling"]),
      fill("w1d2p7_22",'The team announced: "We have just resolved the incident." → They announced they ___ (just/resolve) it.',["had just resolved"]),
      fill("w1d2p7_23",'He told me: "The build has passed." → He told me the build ___ (pass).',["had passed"]),
      fill("w1d2p7_24",'She reported: "Two services have gone offline." → She reported two services ___ (go) offline.',["had gone"]),
      fill("w1d2p7_25",'The ops engineer said: "I have been on-call for 36 hours." → He said he ___ (be) on-call for 36 hours.',["had been"]),
    ]),
    p(8,"Error Correction — All Past Perfects","Correct errors in realistic professional writing",[
      fix("w1d2p8_01","He told me he already reviewed my PR. I should check his comments.","He told me he had already reviewed my PR. I should check his comments."),
      fix("w1d2p8_02","The service failed because nobody has tested the new config.","The service failed because nobody had tested the new config."),
      fix("w1d2p8_03","We started the migration after we backed up all the data.","We started the migration after we had backed up all the data."),
      fix("w1d2p8_04","By the time I joined the incident call, the team fixed the issue.","By the time I joined the incident call, the team had fixed the issue."),
      fix("w1d2p8_05","She told us she was debugging for 6 hours when she found it.","She told us she had been debugging for 6 hours when she found it."),
      fix("w1d2p8_06","The pipeline never failed like that before last Friday's deploy.","The pipeline had never failed like that before last Friday's deploy."),
      fix("w1d2p8_07","Once we agreed on the design, we started coding immediately.","Once we had agreed on the design, we started coding immediately."),
      fix("w1d2p8_08","The outage revealed that the team skipped the load test.","The outage revealed that the team had skipped the load test."),
      fix("w1d2p8_09","They were frustrated because no one informed them about the breaking change.","They were frustrated because no one had informed them about the breaking change."),
      fix("w1d2p8_10","She submitted the PR before the design review happened.","She had submitted the PR before the design review happened."),
      fix("w1d2p8_11","When I ran the script, I realised I forget to set the environment variables.","When I ran the script, I realised I had forgotten to set the environment variables."),
      fix("w1d2p8_12","The root cause was a config change that a developer made without approval.","The root cause was a config change that a developer had made without approval."),
      fix("w1d2p8_13","By the time QA got the build, developers already moved on to the next sprint.","By the time QA got the build, developers had already moved on to the next sprint."),
      fix("w1d2p8_14","She confirmed she received the incident report before she left.","She confirmed she had received the incident report before she left."),
      fix("w1d2p8_15","The tests passed only after we correct all the assertion errors.","The tests passed only after we had corrected all the assertion errors."),
      fix("w1d2p8_16","He noticed the server started throwing errors at exactly 3:15 AM.","He noticed the server had started throwing errors at exactly 3:15 AM."),
      fix("w1d2p8_17","The team worked on the feature for three months before it was cancelled.","The team had been working on the feature for three months before it was cancelled."),
      fix("w1d2p8_18","I found a security flaw that the original author never documented.","I found a security flaw that the original author had never documented."),
      fix("w1d2p8_19","She admitted that she misread the requirements.","She admitted that she had misread the requirements."),
      fix("w1d2p8_20","The config was wrong. Someone changed it at some point without a PR.","The config was wrong. Someone had changed it at some point without a PR."),
      fix("w1d2p8_21","The manager confirmed the team met the deadline.","The manager confirmed the team had met the deadline."),
      fix("w1d2p8_22","The outage could have been prevented if someone checked the logs earlier.","The outage could have been prevented if someone had checked the logs earlier."),
      fix("w1d2p8_23","The system crashed because a cron job ran without proper error handling.","The system crashed because a cron job had been running without proper error handling."),
      fix("w1d2p8_24","The developer pushed the code before the security team approved it.","The developer had pushed the code before the security team approved it."),
      fix("w1d2p8_25","She noted that the same bug appeared in two previous sprints.","She noted that the same bug had appeared in two previous sprints."),
    ]),
    p(9,"Writing — Incident Reports","Write past-perfect-accurate incident reports",[
      write("w1d2p9_01","Write a 3-sentence incident summary.\nUse past perfect for what preceded the crash.\nContext: DB disk full → service crashed → team restored after 2 hours.",80,"By the time... / The service crashed because... / The team had..."),
      write("w1d2p9_02","Write a 2-sentence post-mortem finding.\nUse past perfect for what had been missed before the incident.",60),
      write("w1d2p9_03","Write a ticket comment explaining why a bug only appeared in production.\nUse past perfect to show what was missing before the bug appeared.",80),
      write("w1d2p9_04","Write a 3-sentence root cause analysis using past perfect.\nContext: Auth token expired silently. Nobody had set up expiry monitoring.",80),
      write("w1d2p9_05","Rewrite this in professional IT language with correct tenses:\n'We found out the fix was already in the code but no one deployed it.'",60),
      write("w1d2p9_06","Write a formal Jira comment explaining what the team discovered in the investigation.\nUse past perfect for all discoveries about earlier state.",80),
      write("w1d2p9_07","Write a 3-sentence sprint retrospective finding using past perfect:\nThe team was slow because they had been unclear about requirements.",80),
      write("w1d2p9_08","Write the 'Timeline' section of an incident report:\n14:00 — alert fires. Investigation reveals: config changed at 13:50, previously working at 10:00.",100),
      write("w1d2p9_09","Write a 2-sentence message to your manager explaining a missed deadline.\nUse past perfect to explain the dependency that had not been met.",60),
      write("w1d2p9_10","Write a brief post-mortem for a failed deployment.\nInclude: what had been deployed, what had not been tested, what the impact was.",100),
      write("w1d2p9_11","Write a 3-sentence message explaining why a feature was not ready for the sprint review.",80),
      write("w1d2p9_12","Describe in 3 sentences what you discovered in a code audit.\nUse 'had been' + past perfect for all historical states you found.",80),
      write("w1d2p9_13","Write a 2-sentence explanation to a client about why they experienced errors.\nUse past perfect passive for the root cause.",60),
      write("w1d2p9_14","Write the 'What happened' section of an incident report (4 sentences).\nSequence: alert → investigation → discovery → resolution.",120),
      write("w1d2p9_15","Rewrite this timeline with past perfect where appropriate:\n'The bug was introduced on Monday. Nobody noticed until Thursday. The fix was deployed on Friday.'",80),
      write("w1d2p9_16","Write a ticket update explaining a dependency issue.\nContext: You couldn't complete the task because the API contract hadn't been finalised.",70),
      write("w1d2p9_17","Write a 3-sentence code review comment explaining an architectural decision that had been made before this PR.",80),
      write("w1d2p9_18","Describe a past sprint planning mistake in 3 sentences.\nUse past perfect for what had been assumed before the mistake was discovered.",80),
      write("w1d2p9_19","Write a brief message to your team explaining why the release was delayed.\nAll causes should use past perfect.",70),
      write("w1d2p9_20","Rewrite with correct tenses and paste perfect where needed:\n'The production issue: somebody pushed a config change. It broke the auth service. The fix took two hours. The root cause: it never tested in staging.'",100),
      speak("w1d2p9_21","In 60 seconds, explain a past technical decision to your team.\nUse past perfect for what had happened before the decision was made."),
      speak("w1d2p9_22","In 45 seconds, describe a bug you fixed. Focus on what had been wrong before you fixed it (past perfect) and what happened when you deployed the fix (past simple)."),
      speak("w1d2p9_23","In 60 seconds, walk through an incident timeline to a client.\nUse past perfect for all preceding causes and past simple for the sequence of events."),
      speak("w1d2p9_24","In 30 seconds, explain to your manager why a task took longer than estimated.\nFocus on what you had not anticipated (past perfect)."),
      speak("w1d2p9_25","In 60 seconds, describe something you discovered in a legacy codebase.\nUse past perfect to describe what had been done before you arrived."),
    ]),
    p(10,"Mixed Production","Demonstrate full past perfect mastery",[
      write("w1d2p10_01","Write a complete 5-sentence post-mortem summary.\nInclude: timeline of events (past simple), preceding causes (past perfect), current resolution (present perfect).",150),
      write("w1d2p10_02","Correct all tense errors in this paragraph:\n'At 9 PM, the alert fired. Investigation revealed: the engineer change the DB config an hour earlier. He didn't follow the change approval process. By the time we noticed, 200 users experienced errors.'",120),
      write("w1d2p10_03","Write a Jira ticket comment explaining a bug's root cause using past perfect for the preceding state.",80),
      speak("w1d2p10_04","Speak for 90 seconds: present last week's incident to your team. Cover the event sequence (past simple), what had led to it (past perfect), and what has been done to prevent recurrence (present perfect)."),
      write("w1d2p10_05","Write an executive summary of a completed project migration (5 sentences).\nCover what the team had prepared, what happened during the migration, and what the current state is.",150),
      write("w1d2p10_06","Rewrite this email opening with correct tenses:\n'Hi Sarah, I wanted to let you know that the incident is resolved. We found that the issue was starting last Tuesday when a developer pushed a config change that was not reviewed.'",80),
      write("w1d2p10_07","Write a 3-sentence sprint retrospective 'what went wrong' section using past perfect.",80),
      speak("w1d2p10_08","Speak for 60 seconds: you're onboarding a new developer. Explain what the team had been doing on the project before they joined, and what has been completed so far.",),
      write("w1d2p10_09","Write a timeline for a database migration (5 events).\nUse past perfect for each step that was completed before the next.",120),
      write("w1d2p10_10","Rewrite with correct past perfect:\n'The deployment failed at 3 PM. We investigated. We found: the health check endpoint was removed two days ago. The rollback was performed successfully.'",100),
      write("w1d2p10_11","Write a 4-sentence explanation for a client of why their data was temporarily unavailable.",120),
      speak("w1d2p10_12","Speak for 75 seconds: retrospective 'what we learned' segment. Include at least 3 past perfect examples of things you had been doing incorrectly."),
      write("w1d2p10_13","Write a README section: 'Migration Notes'. Describe 3 things that need to be done before running the migration script.",100),
      write("w1d2p10_14","Correct every tense error:\n'By the time the fix deployed, the team was working on it for 4 hours. The issue started when a developer pushes a breaking change that nobody reviewed. We implement emergency rate limiting.'",120),
      write("w1d2p10_15","Write a formal message to the client explaining service disruption.\nUse past perfect for all preceding causes, past simple for the incident sequence, and present perfect for current status.",150),
      speak("w1d2p10_16","Speak for 60 seconds: answer the question 'What went wrong in last sprint and why?' using past perfect to explain root causes."),
      write("w1d2p10_17","Write a 3-sentence pull request description explaining why the change was necessary.\nUse past perfect for the state of the code before your change.",80),
      write("w1d2p10_18","Write the 'Background' section of a technical design document (3 sentences).\nExplain what had been the previous approach and why it was insufficient.",100),
      speak("w1d2p10_19","Speak for 60 seconds: explain to a new team member what the team had been working on for the past quarter and what was achieved.",),
      write("w1d2p10_20","Write a 5-sentence incident debrief email to stakeholders.\nCover: what happened, what had caused it, what was done, current status, what will be prevented.",150),
      write("w1d2p10_21","Write a technical blog post opening paragraph (4 sentences) about a migration you completed.\nDescribe the previous architecture (past perfect/past simple) and current state (present perfect).",120),
      write("w1d2p10_22","Fix ALL tense errors:\n'We find the bug after we look at the database logs. The engineer that introduce the bug already left. Nobody had catching this in code review. The fix was deploy without testing.'",120),
      speak("w1d2p10_23","Speak for 90 seconds: present a technical architecture decision to senior leadership. Explain what had been tried before, why it failed, and what the new approach is."),
      write("w1d2p10_24","Write a 3-sentence comment on a GitHub issue explaining historical context.\nUse past perfect to describe what had been decided or implemented previously.",80),
      write("w1d2p10_25","Write a formal apology email to a client for a service disruption.\nClearly use past perfect for what had gone wrong and present perfect for resolution.",150),
    ]),
  ]
}

const W1D2: DayPlan = makeDay(1,2,"Past Perfect — The Sequence Tense","Use past perfect to show which of two past actions came first.","**Past Perfect**: had + kata kerja bentuk 3 (pp)\n\nRumus: Kejadian LEBIH DULU = **had + pp** / Kejadian BELAKANGAN = **past simple**\n\n'By the time the client **called**, we **had already fixed** the bug.'\n(Fix duluan → past perfect. Client telpon belakangan → past simple.)\n\nBayangkan ada dua kejadian di masa lalu. Yang paling lama itu pakai 'had + pp'. Yang belakangan pakai past simple biasa.\n\n**Kapan dipakai**:\n- 'By the time...' + kejadian masa lalu\n- 'Before/After/Once...' + kejadian masa lalu\n- Kalimat laporan (backshift / melaporkan apa yang dikatakan orang)\n- 'Because...' untuk menjelaskan sebab yang terjadi lebih awal\n\n**Past Perfect Continuous**: had + been + kata kerja-ing → menunjukkan seberapa LAMA sesuatu sudah terjadi sebelum momen tertentu di masa lalu.\n'Server **had been leaking** memory for weeks before we noticed.'",w1d2Phases())

/* Days 3–5: compact but complete ─────────────────────────────────────────── */

function genericPhases(prefix: string, phaseCount: number, drillFn: (pid: string, pn: number) => Phase): Phase[] {
  return Array.from({ length: phaseCount }, (_, i) => drillFn(`${prefix}p${i+1}`, i+1))
}

function makePassivePhase(pid: string, pn: number): Phase {
  const titles = ["Passive Recognition","Simple Tenses Passive","Perfect Passive MCQ","Fill — Simple Passive","Fill — Perfect Passive","Negative & Question Passive","Error Correction","Transform Active→Passive","Transform Passive→Active","Mixed Production"]
  const objs = ["Identify passive vs active voice","Choose correct simple passive form","Choose correct perfect passive form","Produce simple passive forms","Produce perfect passive forms","Form passive negatives and questions","Correct passive voice errors","Rewrite active sentences in passive","Rewrite passive sentences in active","Produce passive in professional writing"]
  const base = (pn - 1) * 25
  const drills: Drill[] = []
  const sentences = [
    ["The bug ___ (fix) by the senior developer.",["a:was fixing","b:was fixed","c:had fix","d:fixed"],"b","Past Simple Passive: was + past participle. Fokus pada hasil — siapa yang melakukannya tidak penting."],
    ["The API ___ (document) before the launch.",["a:was documented","b:documented","c:is documented","d:had documented"],"a","Past Simple Passive. 'Was documented' = didokumentasikan. Sebelum launch → waktu masa lalu yang jelas."],
    ["The feature ___ (release) to all users last Monday.",["a:has released","b:was released","c:is released","d:releases"],"b","Past Simple Passive. 'Was released' = dirilis. 'Last Monday' = waktu spesifik → Past Simple."],
    ["The config ___ (change) without approval.",["a:changed","b:is changing","c:was changed","d:changing"],"c","Past Simple Passive. Rumus: was/were + past participle. Fokus pada APA yang terjadi, bukan siapa."],
    ["The PR ___ (merge) by the tech lead.",["a:merged","b:was merged","c:has merged","d:is merged"],"b","Past Simple Passive. 'Was merged' = di-merge oleh tech lead. Kita tidak perlu tahu siapa — yang penting PR sudah di-merge."],
    ["Tests ___ (run) automatically before every deploy.",["a:run","b:are run","c:were run","d:is run"],"b","Present Simple Passive untuk kegiatan RUTIN. 'Are run' = dijalankan. Artinya: setiap kali deploy, tests otomatis dijalankan."],
    ["The vulnerability ___ (patch) in the latest release.",["a:was patched","b:patched","c:has patch","d:is patching"],"a","Past Simple Passive. Rumus: was/were + past participle. Fokus pada APA yang terjadi, bukan siapa."],
    ["All endpoints ___ (secure) with OAuth2.",["a:are secured","b:secure","c:were securing","d:is secured"],"a","Present Simple Passive untuk kondisi yang SELALU berlaku. 'Are secured' = diamankan. Ini kebijakan permanen — semua endpoint pasti aman."],
    ["The incident ___ (escalate) to the CTO immediately.",["a:escalated","b:was escalated","c:is escalating","d:escalates"],"b","Past Simple Passive. Rumus: was/were + past participle. Fokus pada APA yang terjadi, bukan siapa."],
    ["The migration script ___ (test) in staging first.",["a:was tested","b:tested","c:is tested","d:is testing"],"a","Past Simple Passive. Rumus: was/were + past participle. Fokus pada APA yang terjadi, bukan siapa."],
    ["The new feature ___ (test) by QA for two weeks.",["a:has been tested","b:was tested","c:is tested","d:were tested"],"a","Present Perfect Passive. 'Has been tested' = sudah diuji. 'For two weeks' = selama dua minggu (sampai sekarang). QA masih menguji."],
    ["Three critical bugs ___ (identify) in the latest audit.",["a:identified","b:have been identified","c:has been identified","d:are identify"],"b","Present Perfect Passive jamak. 'Have been identified' = sudah diidentifikasi. Subjeknya jamak (bugs/microservices) → pakai 'have', bukan 'has'."],
    ["The security patch ___ (not / apply) yet.",["a:hasn't applied","b:hasn't been applied","c:wasn't applied","d:isn't applying"],"b","Present Perfect Passive negatif. 'Hasn't been applied' = belum diterapkan. Kata 'yet' → Present Perfect."],
    ["The architecture ___ (review) twice this sprint.",["a:was reviewed","b:reviewed","c:has been reviewed","d:reviewing"],"c","Present Perfect Passive. 'This sprint' = sprint yang MASIH berjalan → Present Perfect. 'Has been reviewed' = sudah di-review dua kali."],
    ["All microservices ___ (migrate) to Kubernetes.",["a:migrated","b:have been migrated","c:has been migrated","d:are migrating"],"b","Present Perfect Passive jamak. 'Have been identified' = sudah diidentifikasi. Subjeknya jamak (bugs/microservices) → pakai 'have', bukan 'has'."],
    ["The server ___ (restart) remotely by the ops team.",["a:restarted","b:has restarted","c:was restarted","d:is restart"],"c","Past Simple Passive. Rumus: was/were + past participle. Fokus pada APA yang terjadi, bukan siapa."],
    ["The documentation ___ (update) before the release.",["a:was updated","b:updated","c:has updated","d:updating"],"a","Past Simple Passive. Rumus: was/were + past participle. Fokus pada APA yang terjadi, bukan siapa."],
    ["All user data ___ (encrypt) at rest.",["a:encrypts","b:is encrypted","c:was encrypted","d:are encrypted"],"b","Present Simple Passive untuk kebijakan/kondisi permanen. 'Is encrypted' = dienkripsi. Semua data user selalu dienkripsi — ini aturan tetap."],
    ["The contract ___ (sign) by both parties.",["a:was signed","b:signed","c:is signing","d:has sign"],"a","Past Simple Passive. Rumus: was/were + past participle. Fokus pada APA yang terjadi, bukan siapa."],
    ["The report ___ (generate) automatically every Monday.",["a:generates","b:is generated","c:was generated","d:generated"],"b","Present Simple Passive untuk proses yang SELALU berulang. 'Is generated' = dibuat otomatis. Setiap Senin, laporan dibuat sendiri."],
    ["Three services ___ (decommission) last quarter.",["a:have been decommissioned","b:decommissioned","c:were decommissioned","d:are decommissioned"],"c","Past Simple Passive. 'Last quarter' = kuartal lalu (waktu spesifik yang sudah berlalu) → 'Were decommissioned' (jamak)."],
    ["The data ___ (back up) to three geographic regions.",["a:backs up","b:is backed up","c:was backing","d:backed up"],"b","Present Simple Passive untuk kondisi yang BERLAKU. 'Is backed up' = di-backup. Ini selalu terjadi — data selalu di-backup ke 3 region."],
    ["The alert ___ (configure) to fire at 90% CPU.",["a:is configured","b:configured","c:was configuring","d:configures"],"a","Present Simple Passive untuk konfigurasi saat ini. 'Is configured' = dikonfigurasi. Ini pengaturan yang berlaku sekarang."],
    ["The codebase ___ (scan) for vulnerabilities weekly.",["a:scans","b:is scanned","c:has scanned","d:were scanned"],"b","Present Simple Passive untuk jadwal RUTIN. 'Is scanned' = di-scan. Setiap minggu secara otomatis — rutinitas, bukan kejadian sekali."],
    ["The old API ___ (deprecate) in favour of the new version.",["a:deprecated","b:has been deprecated","c:was deprecating","d:is deprecate"],"b","Present Perfect Passive. 'Has been deprecated' = sudah deprecated dan MASIH deprecated sekarang. Status itu masih berlaku."],
  ]
  for (let i = 0; i < 25; i++) {
    const s = sentences[i % sentences.length]
    const id = `${pid}_${String(i+1).padStart(2,"0")}`
    if (pn <= 5) {
      drills.push(mcq(id, s[0] as string, s[1] as [string,string,string,string], s[2] as "a"|"b"|"c"|"d", s[3] as string))
    } else if (pn <= 7) {
      drills.push(fill(id, (s[0] as string).replace("___", "___").replace(/\(.*?\)/,""), [(s[2] as string === "b") ? "was fixed" : "is fixed"]))
    } else {
      drills.push(write(id, `Write a professional sentence using passive voice about: ${["a security vulnerability","a production deployment","a code review","a config change","an incident resolution"][i%5]}.`, 40))
    }
  }
  return { id: pid, phaseNumber: pn, title: titles[pn-1], objective: objs[pn-1], drills }
}

const W1D3: DayPlan = makeDay(1,3,"Perfect Continuous Tenses","Show ongoing duration — how long something has been happening.","**Present Perfect Continuous**: have/has + been + kata kerja-ing\n→ 'I **have been debugging** this for 3 hours.' (masih berlangsung sampai SEKARANG)\n\n**Past Perfect Continuous**: had + been + kata kerja-ing\n→ 'She **had been reviewing** PRs all morning when the outage hit.' (sedang berlangsung sebelum ada kejadian lain di masa lalu)\n\nBayangkan begini: Present Perfect Continuous itu seperti 'sudah dari tadi dan masih terus'. Past Perfect Continuous itu 'sudah dari tadi dan baru berhenti ketika sesuatu yang lain terjadi'.\n\n**Kata petunjuk**: for (durasi, berapa lama), since (titik awal, sejak kapan), all morning/day/week.",
  genericPhases("w1d3", 10, (pid, pn) => {
    const titles = ["Recognition MCQ","Choose Form MCQ","Signal Words","Negative & Question","Advanced Contexts","Fill — Simple","Fill — Complex","Error Correction","Transform","Mixed Production"]
    const objs = ["Identify correct continuous form","Choose present vs past perfect continuous","Match signal words to form","Form negatives and questions","Apply in complex clauses","Produce simple continuous forms","Produce in professional writing","Correct continuous errors","Transform between continuous forms","Write/speak with continuous tenses"]
    const drills: Drill[] = []
    for (let i = 0; i < 25; i++) {
      const id = `${pid}_${String(i+1).padStart(2,"0")}`
      if (pn <= 4) {
        const prompts = [
          ["We ___ on this feature for three months.",["a:worked","b:have been working","c:had worked","d:work"],"b","Kata 'for three months' (selama tiga bulan) sampai sekarang → Present Perfect Continuous. Pekerjaan MASIH berlangsung sampai saat ini."],
          ["The pipeline ___ red since Monday.",["a:was","b:has been","c:had been","d:is being"],"b","Kata 'since Monday' (sejak Senin) → Present Perfect. Pipeline sudah merah dari Senin dan mungkin masih merah sekarang."],
          ["She ___ debugging for 6 hours when she found the issue.",["a:was","b:has been","c:had been","d:is"],"c","Sebelum menemukan (kejadian masa lalu) → Past Perfect Continuous. Dia sedang debug selama 6 jam SEBELUM akhirnya menemukannya."],
          ["How long ___ you been working on this refactor?",["a:did","b:have","c:had","d:are"],"b","Pertanyaan 'How long have you been...' → Present Perfect Continuous. Menanyakan berapa lama sesuatu sudah/masih berlangsung sampai sekarang."],
          ["The server ___ consuming too much memory before we noticed.",["a:has been","b:was","c:had been","d:is"],"c","Sebelum kita menyadarinya → Past Perfect Continuous. Server sudah mengonsumsi memori berlebih SEBELUM kita tahu."],
        ]
        const p = prompts[i % prompts.length]
        drills.push(mcq(id, p[0] as string, p[1] as [string,string,string,string], p[2] as "a"|"b"|"c"|"d", p[3] as string))
      } else if (pn <= 7) {
        const fillPrompts = [
          ["I ___ (investigate) the memory leak since yesterday.",["have been investigating"]],
          ["The team ___ (refactor) this module for two sprints.",["has been refactoring"]],
          ["She ___ (wait) for approval for three days when I escalated.",["had been waiting"]],
          ["The logs show the service ___ (throw) errors for hours.",["had been throwing"]],
          ["We ___ (monitor) the CPU since the config change.",["have been monitoring"]],
        ]
        const p = fillPrompts[i % fillPrompts.length]
        drills.push(fill(id, p[0] as string, p[1] as string[]))
      } else if (pn === 8) {
        const fixes = [
          ["We have been work on this bug all day.","We have been working on this bug all day."],
          ["She had been debug for hours before finding the issue.","She had been debugging for hours before finding the issue."],
          ["The server has being consuming too much memory since Monday.","The server has been consuming too much memory since Monday."],
          ["How long have you worked on this? (imply ongoing)","How long have you been working on this?"],
          ["They been monitoring the service since the deploy.","They have been monitoring the service since the deploy."],
        ]
        const f = fixes[i % fixes.length]
        drills.push(fix(id, f[0] as string, f[1] as string))
      } else if (pn === 9) {
        drills.push(transform(id, `Rewrite using perfect continuous #${i+1}:\n'The team started the refactor 3 weeks ago. They haven't finished yet.'`,"The team has been refactoring for 3 weeks and hasn't finished yet."))
      } else {
        drills.push(write(id, `Write a standup update (2 sentences) using ${i%2===0?"present perfect continuous":"past perfect continuous"} to describe ongoing work on a project.`, 50))
      }
    }
    return { id: pid, phaseNumber: pn, title: titles[pn-1], objective: objs[pn-1], drills }
  })
)

const W1D4: DayPlan = makeDay(1,4,"Passive Voice — All Tenses","Use passive when the action matters more than who did it.","**Passive Voice** dipakai ketika kita fokus pada APA yang terjadi, bukan SIAPA yang melakukannya. Misalnya di incident report, kita lebih suka bilang 'The server **was restarted**' daripada 'John restarted the server'.\n\n**Rumus**: be + kata kerja bentuk 3 (pp)\n- Present simple: is/are + pp → 'Bugs **are logged** di Jira'\n- Past simple: was/were + pp → 'The server **was restarted**'\n- Present perfect: has/have been + pp → 'The PR **has been merged**'\n- Past perfect: had been + pp → 'The config **had been deleted**'\n- Present continuous: is/are being + pp → 'The code **is being reviewed**'\n\n**Sering dipakai di IT**: release notes, incident reports, dokumentasi. Karena di IT, yang penting adalah apa yang terjadi pada sistem, bukan siapa orangnya.",
  genericPhases("w1d4", 10, makePassivePhase)
)

const W1D5: DayPlan = makeDay(1,5,"Week 1 Review — All Grammar","Integrate present perfect, past perfect, continuous, and passive in one workflow.","**Panduan cepat — pilih tense yang tepat**:\n- Ada waktu masa lalu yang spesifik (yesterday, last week, at 3PM, in 2023, ago) → **Past Simple**\n- Ada hubungannya dengan sekarang (already, just, yet, since, this sprint) → **Present Perfect**\n- Lebih awal dari dua kejadian masa lalu (before, by the time, because) → **Past Perfect**\n- Menunjukkan seberapa lama sesuatu sudah berlangsung (for, since, all day) → **Perfect Continuous**\n- Fokus pada kejadiannya, bukan siapa yang melakukannya → **Passive Voice**\n\nDi tulisan IT, passive banyak dipakai dalam dokumentasi dan incident report. Perfect tenses banyak muncul di status update, email, dan laporan insiden.",
  genericPhases("w1d5", 10, (pid, pn) => {
    const titles = ["Mixed MCQ: All Tenses","Passive vs Active MCQ","Perfect Tenses Fill","Error Correction Sprint","Two-Event Sequences","Status Update Writing","Incident Report Writing","Email Writing","Reported Speech","Full Production Mix"]
    const objs = Array.from({length:10},(_,i)=>`Apply Week 1 grammar in realistic IT contexts — phase ${i+1}`)
    const drills: Drill[] = []
    for (let i = 0; i < 25; i++) {
      const id = `${pid}_${String(i+1).padStart(2,"0")}`
      if (pn <= 2) {
        drills.push(mcq(id,`Mixed Week 1 MCQ #${i+1}: The system ___ (be) stable since the hotfix was deployed.`,["a:is","b:has been","c:was","d:had been"],"b","Kata 'since the hotfix' (sejak hotfix diterapkan) → Present Perfect. Sistem sudah stabil dari saat itu dan masih stabil sekarang."))
      } else if (pn <= 4) {
        drills.push(fill(id,`The feature ___ (deploy) to production and ___ (be) stable ever since.`,["was deployed","has been"],"Past Simple untuk kejadian yang sudah selesai ('was deployed'). Present Perfect untuk kondisi yang MASIH berlangsung sampai sekarang ('has been stable ever since')."))
      } else if (pn <= 6) {
        drills.push(fix(id,`The incident revealed that the team has been skip the daily health checks.`,"The incident revealed that the team had been skipping the daily health checks."))
      } else if (pn <= 8) {
        drills.push(write(id,`Write a 3-sentence professional IT update using at least 3 different tenses from Week 1.`,100))
      } else {
        drills.push(speak(id,`Speak for 60 seconds: describe a recent project achievement. Use present perfect, past simple, past perfect, and at least one passive construction.`))
      }
    }
    return { id: pid, phaseNumber: pn, title: titles[pn-1], objective: objs[pn-1], drills }
  })
)

export const WEEK1_DAYS: DayPlan[] = [W1D1, W1D2, W1D3, W1D4, W1D5]

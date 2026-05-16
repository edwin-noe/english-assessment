import { DayPlan, Drill, Phase } from "../learning-plan"
import { mcq, fill, fix, transform, write, speak } from "../drill-factory"

function mk(w:number,d:number,title:string,focus:string,theory:string,phases:Phase[]):DayPlan{
  return{week:w,day:d,title,focus,theory,phases}
}
function gp(prefix:string,fn:(pid:string,pn:number)=>Phase):Phase[]{
  return Array.from({length:10},(_,i)=>fn(`${prefix}p${i+1}`,i+1))
}

/* ── Week 2 · Day 1 ── Articles ─────────────────────────────────────────── */

const W2D1=mk(2,1,
  "Articles — a, an, the, ∅",
  "Choose the right article for every IT noun: count vs. mass, first vs. second mention, specific vs. generic.",
  "Artikel itu seperti petunjuk yang memberitahu pendengar 'yang mana sih?'\n\n**a / an** — sebutan pertama, bisa dihitung, salah satu dari banyak:\n'We found **a** critical bug.' (ada banyak bug, ini salah satunya) | 'There was **an** outage.' (pertama kali disebut)\n\n**the** — spesifik, kedua orang sudah tahu yang mana:\n'Fix **the** bug.' (bug yang tadi kita bicarakan) | 'Restart **the** server.' (server kita yang spesifik)\n\n**∅ (tanpa artikel)** — (1) kata benda tak terhitung secara umum: 'We need **feedback**.' 'They lack **experience**.' (2) jamak yang umum: '**Bugs** slow us down.' (3) nama diri/software: '**Kubernetes**, **AWS**, **React**' (4) frasa tetap: 'in **production**', 'on **call**'.\n\n**Jebakan di IT**: 'the data' (dataset yang spesifik kita bicarakan) vs. 'data is valuable' (data secara umum). 'a team' (salah satu tim) vs. 'the team' (tim kita yang spesifik).",
  gp("w2d1",(pid,pn)=>{
    const TITLES=["First vs. Second Mention","Count vs. Mass Nouns","Specific vs. Generic","Proper Nouns & Set Phrases","Advanced Contextual MCQ","Fill — Simple Contexts","Fill — Technical Writing","Error Correction","Transform to Formal Register","Mixed Production"]
    const OBJS=["Identify first-mention (a/an) vs. second-mention (the).","Distinguish countable nouns from uncountable mass nouns.","Choose specific (the) or generic (∅) depending on context.","Zero article for proper nouns, software names, and IT set phrases.","Apply all four article rules in complex IT sentences.","Produce correct articles in short IT sentences.","Produce correct articles in technical writing contexts.","Correct article errors in IT emails and documentation.","Rewrite casual phrasing with precise article use.","Write professional sentences using all article types correctly."]
    const mcqs=[
      mcq(`${pid}_01`,"We found ___ critical bug in ___ authentication module.",["a:a…the","b:a…an","c:the…the","d:a…a"],"a","Bug ini baru pertama kali disebut (satu dari banyak) → pakai 'a'. Authentication module adalah komponen yang spesifik dan keduanya sudah tahu → pakai 'the'."),
      mcq(`${pid}_02`,"___ code you pushed last night broke ___ build.",["a:A…the","b:The…a","c:The…the","d:A…a"],"c","Keduanya tahu kode apa yang di-push (spesifik) → 'the code'. Build CI kita yang satu-satunya (spesifik) → 'the build'."),
      mcq(`${pid}_03`,"___ good software requires ___ thorough testing.",["a:A…a","b:The…the","c:∅…∅","d:A…the"],"c","Kalimat ini adalah kebenaran umum yang berlaku untuk semua software. 'Software' (kata benda umum tak terhitung) dan 'thorough testing' (umum, tak terhitung) → keduanya tanpa artikel."),
      mcq(`${pid}_04`,"She is ___ senior engineer on ___ platform team.",["a:a…a","b:a…the","c:the…the","d:an…the"],"b","Dia salah satu dari banyak senior engineer → 'a senior engineer'. Platform team kita yang spesifik → 'the platform team'."),
      mcq(`${pid}_05`,"We need ___ feedback before we proceed.",["a:a","b:an","c:the","d:∅"],"d","'Feedback' adalah kata benda tak terhitung (seperti 'air' atau 'informasi'). Kata benda tak terhitung dalam konteks umum tidak pakai artikel."),
      mcq(`${pid}_06`,"___ Kubernetes cluster crashed during ___ peak traffic.",["a:A…the","b:The…a","c:The…∅","d:∅…the"],"c","'The Kubernetes cluster' karena cluster kita yang spesifik. 'Peak traffic' adalah frasa tak terhitung yang dipakai sebagai konsep umum → tanpa artikel."),
      mcq(`${pid}_07`,"Can you add ___ unit test for this edge case?",["a:a","b:an","c:the","d:∅"],"a","Kita minta satu unit test (bisa dihitung, pertama kali disebut) → 'a unit test'."),
      mcq(`${pid}_08`,"___ DevOps culture emphasises collaboration and automation.",["a:A","b:The","c:An","d:∅"],"d","Berbicara tentang DevOps culture sebagai konsep umum, bukan yang spesifik → tanpa artikel."),
      mcq(`${pid}_09`,"I deployed ___ application to ___ AWS last night.",["a:the…∅","b:an…the","c:a…the","d:the…the"],"a","Aplikasi yang spesifik (keduanya tahu mana) → 'the application'. AWS adalah nama layanan cloud (nama diri) → tanpa artikel."),
      mcq(`${pid}_10`,"There was ___ outage in ___ EU region for about two hours.",["a:an…the","b:a…an","c:the…the","d:a…∅"],"a","'An outage' karena kata selanjutnya dimulai bunyi vokal 'o' dan ini pertama kali disebut. 'The EU region' karena wilayah yang spesifik."),
      mcq(`${pid}_11`,"___ data from last week's sprint shows ___ improvement.",["a:The…an","b:∅…an","c:The…∅","d:A…the"],"c","'The data' karena dataset yang spesifik (dari sprint minggu lalu). 'Improvement' adalah kata tak terhitung dalam konteks umum → tanpa artikel."),
      mcq(`${pid}_12`,"She wrote ___ excellent test plan for this sprint.",["a:a","b:an","c:the","d:∅"],"b","Pakai 'an' sebelum kata yang dimulai dengan bunyi vokal. 'Excellent' bunyinya dimulai dengan 'e' (vokal) → 'an excellent'."),
      mcq(`${pid}_13`,"___ CI/CD pipeline failed after ___ last merge.",["a:A…a","b:The…the","c:∅…the","d:A…the"],"b","Pipeline CI/CD kita yang spesifik → 'the pipeline'. 'The last merge' = merge terakhir yang sudah diketahui keduanya → 'the'."),
      mcq(`${pid}_14`,"He has ___ experience with ___ React.",["a:an…∅","b:a…the","c:∅…∅","d:the…∅"],"c","'Experience' tak terhitung → tanpa artikel. 'React' adalah nama software (nama diri/proper noun) → tanpa artikel."),
      mcq(`${pid}_15`,"We adopted ___ microservices architecture two years ago.",["a:a","b:an","c:the","d:∅"],"a","Kita mengadopsi satu jenis arsitektur (dari banyak pilihan yang ada) → 'a microservices architecture'."),
      mcq(`${pid}_16`,"Please review ___ PR I opened this morning.",["a:a","b:an","c:the","d:∅"],"c","Keduanya tahu PR mana yang dimaksud (yang dibuka tadi pagi) → 'the'. Setelah ada penjelasan yang membuat spesifik, pakai 'the'."),
      mcq(`${pid}_17`,"___ team is on call this weekend.",["a:A","b:An","c:The","d:∅"],"c","'The team' karena ini tim kita sendiri yang spesifik dan sudah diketahui keduanya."),
      mcq(`${pid}_18`,"We're looking for ___ solution to ___ scalability problem.",["a:a…the","b:the…a","c:a…a","d:∅…the"],"a","'A solution' karena kita mencari satu solusi dari banyak kemungkinan (belum spesifik). 'The scalability problem' karena masalah spesifik yang sudah kita ketahui bersama."),
      mcq(`${pid}_19`,"He was put on ___ call after ___ production incident.",["a:a…the","b:∅…a","c:the…a","d:∅…the"],"d","'On call' adalah frasa tetap (idiom) yang tidak pakai artikel. 'The production incident' = insiden produksi yang spesifik terjadi baru saja."),
      mcq(`${pid}_20`,"___ agile methodology requires frequent iteration.",["a:An","b:The","c:A","d:∅"],"d","Berbicara tentang agile methodology sebagai konsep umum yang berlaku untuk semua → tanpa artikel."),
      mcq(`${pid}_21`,"There is ___ issue with ___ login endpoint.",["a:an…the","b:a…a","c:an…an","d:the…a"],"a","'An issue' karena 'issue' dimulai bunyi vokal 'i' dan pertama kali disebut. 'The login endpoint' karena komponen spesifik dari sistem kita."),
      mcq(`${pid}_22`,"We need to write ___ documentation before ___ release.",["a:∅…∅","b:the…the","c:∅…the","d:a…the"],"c","'Documentation' adalah kata benda tak terhitung dalam konteks umum → tanpa artikel. 'The release' karena rilis yang spesifik yang sudah direncanakan."),
      mcq(`${pid}_23`,"___ AWS is more expensive than ___ Azure for our workload.",["a:The…the","b:∅…∅","c:An…a","d:∅…the"],"b","AWS dan Azure keduanya adalah nama layanan cloud (nama diri/proper noun) → tanpa artikel untuk keduanya."),
      mcq(`${pid}_24`,"Can you schedule ___ meeting with ___ product owner?",["a:a…the","b:the…a","c:a…a","d:∅…the"],"a","'A meeting' karena rapat yang belum ditentukan (salah satu dari banyak kemungkinan). 'The product owner' karena PO kita yang spesifik."),
      mcq(`${pid}_25`,"I added ___ error handling for ___ null pointer exception.",["a:∅…a","b:∅…the","c:an…a","d:an…the"],"a","'Error handling' adalah kata benda tak terhitung → tanpa artikel. 'A null pointer exception' = satu jenis exception (belum spesifik, salah satu dari banyak)."),
    ]
    const fills=[
      fill(`${pid}_01`,"___ engineer assigned to this task is on leave.",["The"],"Engineer yang spesifik (sudah ditunjuk untuk task ini, keduanya tahu siapa) → 'the'."),
      fill(`${pid}_02`,"We deployed ___ fix to production at 2 AM.",["a"],"Satu perbaikan (bisa dihitung, pertama kali disebut) → 'a fix'."),
      fill(`${pid}_03`,"___ TypeScript is strongly typed, unlike ___ JavaScript.",["∅","∅"],"TypeScript dan JavaScript adalah nama bahasa pemrograman (nama diri/proper noun) → tanpa artikel untuk keduanya."),
      fill(`${pid}_04`,"She has ___ deep understanding of ___ distributed systems.",["a","∅"],"'A deep understanding' = satu tingkat pemahaman (bisa dihitung, satu). 'Distributed systems' = sistem secara umum (jamak generik) → tanpa artikel."),
      fill(`${pid}_05`,"Send me ___ update once ___ deployment is complete.",["an","the"],"'An update' karena 'update' dimulai bunyi vokal 'u'. 'The deployment' karena deployment yang spesifik sedang berjalan."),
      fill(`${pid}_06`,"___ security audit revealed ___ vulnerability in ___ API.",["The","a","the"],"'The security audit' = audit yang spesifik (baru dilakukan). 'A vulnerability' = pertama kali disebut. 'The API' = endpoint yang spesifik."),
      fill(`${pid}_07`,"We need ___ test coverage above 80% before ___ release.",["∅","the"],"'Test coverage' adalah kata benda tak terhitung → tanpa artikel. 'The release' = rilis yang spesifik yang sudah direncanakan."),
    ]
    const fixes=[
      fix(`${pid}_01`,"We deployed a fix to the staging and then a production.","We deployed a fix to staging and then production.","'In staging' dan 'in production' adalah frasa tetap (idiom) di dunia IT → tidak pakai artikel."),
      fix(`${pid}_02`,"A team has decided to roll back the deploy.","The team has decided to roll back the deploy.","Kita berbicara tentang tim kita yang spesifik → 'the team', bukan 'a team'."),
      fix(`${pid}_03`,"She has an experience with Kubernetes.","She has experience with Kubernetes.","'Experience' adalah kata benda tak terhitung → tanpa artikel. 'Kubernetes' adalah nama software (nama diri) → juga tanpa artikel."),
      fix(`${pid}_04`,"Please read the agile documentation before a standup.","Please read the agile documentation before the standup.","'The standup' karena standup yang spesifik (sudah dijadwalkan, keduanya tahu)."),
      fix(`${pid}_05`,"I found a solution we were looking for.","I found the solution we were looking for.","Kalimat 'we were looking for' membuat solusinya menjadi spesifik (yang kita cari-cari) → harus pakai 'the'."),
    ]
    const drills:Drill[]=[]
    for(let i=0;i<25;i++){
      const id=`${pid}_${String(i+1).padStart(2,"0")}`
      if(pn<=5) drills.push(mcqs[i%mcqs.length])
      else if(pn<=7) drills.push(fills[i%fills.length])
      else if(pn===8) drills.push(fixes[i%fixes.length])
      else if(pn===9) drills.push(transform(id,`Rewrite this sentence with correct articles:\n'We need the feedback on a API from a team in charge of the integrations.'`,"We need feedback on the API from the team in charge of integrations."))
      else drills.push(write(id,`Write 2 IT-professional sentences: one using 'a/an' for first mention and one using 'the' for a specific referent.`,50))
    }
    return{id:pid,phaseNumber:pn,title:TITLES[pn-1],objective:OBJS[pn-1],drills}
  })
)

/* ── Week 2 · Day 2 ── Subject-Verb Agreement ───────────────────────────── */

const W2D2=mk(2,2,
  "Subject-Verb Agreement",
  "Make the verb match its true grammatical subject — even when nouns, quantifiers, or clauses separate them.",
  "Kata kerja harus 'cocok' dengan subjek kalimat. Kalau subjeknya tunggal, kata kerjanya tunggal. Kalau jamak, kata kerjanya jamak.\n\n**Aturan utama**: Kata kerja sesuai dengan SUBJEK, bukan kata benda yang ada di dekatnya.\n'The list of bugs **is** long.' (subjeknya = 'list', bukan 'bugs' — makanya 'is', bukan 'are')\n\n**Kata benda kolektif** (team, staff, committee): pakai kata kerja tunggal dalam Bahasa Inggris Amerika.\n'**The team has** shipped the feature.' ✓ (team itu satu, jadi 'has')\n\n**Quantifier (kata jumlah)**:\n- 'A number of issues **have**…' ('a number of' = banyak hal, maknanya jamak)\n- 'The number of issues **has**…' ('the number' = angkanya, satu angka, jadi tunggal)\n- 'Each service **has**…' | 'Every endpoint **is**…' → selalu tunggal\n\n**Subjek gabungan**:\n- 'A bug AND a typo **have** been found.' (dua benda digabung dengan 'and' → jamak)\n- 'Either the client OR the devs **are** right.' (or/nor → sesuaikan dengan subjek yang PALING DEKAT dengan kata kerja)\n\n**Kalimat dengan 'there'**: 'There **are** multiple issues.' (subjeknya adalah 'issues', jadi jamak)",
  gp("w2d2",(pid,pn)=>{
    const TITLES=["Core Agreement MCQ","Collective Nouns","Quantifiers — a number of / the number of","Either…Or / Neither…Nor","There is / There are","Fill — Short Sentences","Fill — Technical Paragraphs","Error Correction","Formal vs. Informal Comparison","Write Professional Sentences"]
    const OBJS=["Match verb to grammatical subject despite intervening phrases.","Correctly treat collective nouns as singular in technical contexts.","Distinguish 'a number of' (plural) from 'the number of' (singular).","Apply proximity rule for or/nor coordinate subjects.","Choose 'there is' or 'there are' based on real subject.","Produce correct agreement in short IT sentences.","Produce correct agreement in multi-clause technical writing.","Identify and fix agreement errors in IT documentation.","Compare formal and informal agreement patterns.","Write correct subject-verb agreement in professional context."]
    const m=[
      mcq(`${pid}_01`,"The list of open bugs ___ growing longer every sprint.",["a:are","b:is","c:were","d:have been"],"b","Subjeknya adalah 'list' (tunggal), bukan 'bugs'. Kata benda yang ada di antara jangan sampai mengecoh! Pakai 'is'."),
      mcq(`${pid}_02`,"A number of critical issues ___ been escalated to the CTO.",["a:has","b:have","c:is","d:was"],"b","'A number of' artinya 'banyak' → maknanya jamak → pakai 'have'. Ingat: 'a number of' ≠ 'the number of'."),
      mcq(`${pid}_03`,"The number of failing tests ___ dropped since last sprint.",["a:have","b:are","c:has","d:were"],"c","'The number of' = jumlahnya (satu angka, tunggal) → pakai 'has'. Berbeda dengan 'a number of' yang maknanya jamak."),
      mcq(`${pid}_04`,"The team ___ working overtime to fix the release blocker.",["a:are","b:is","c:have","d:were"],"b","Kata benda kolektif seperti 'team' dalam konteks profesional Amerika → kata kerja tunggal → 'is'."),
      mcq(`${pid}_05`,"Each microservice ___ its own health check endpoint.",["a:have","b:are","c:has","d:were"],"c","'Each' selalu diikuti kata kerja tunggal. Setiap microservice → satu health check → 'has'."),
      mcq(`${pid}_06`,"Neither the frontend developers nor the backend lead ___ reviewed the spec.",["a:have","b:has","c:are","d:were"],"b","Dengan 'neither...nor', kata kerja menyesuaikan subjek yang PALING DEKAT. 'The backend lead' (tunggal) paling dekat dengan kata kerja → 'has'."),
      mcq(`${pid}_07`,"There ___ several blocking issues in the current sprint.",["a:is","b:has","c:are","d:have"],"c","Dalam kalimat 'There is/are', subjek yang sesungguhnya ada di belakang kata kerja. 'Several blocking issues' adalah jamak → 'are'."),
      mcq(`${pid}_08`,"The data from all the servers ___ been aggregated into one dashboard.",["a:have","b:has","c:are","d:is"],"b","Dalam konteks IT, 'data' diperlakukan sebagai kata benda tunggal (massa) → 'has been'. Ini berbeda dengan penggunaan akademis yang jamak."),
      mcq(`${pid}_09`,"Either the database configuration or the network settings ___ causing the latency spike.",["a:are","b:is","c:have","d:were"],"a","Dengan 'either...or', kata kerja menyesuaikan subjek yang PALING DEKAT. 'Network settings' (jamak) paling dekat → 'are'."),
      mcq(`${pid}_10`,"Every function and method in this module ___ been unit-tested.",["a:have","b:are","c:has","d:were"],"c","'Every' membuat subjek menjadi tunggal, walaupun ada dua benda (function dan method) → 'every X and Y' → tunggal → 'has'."),
      mcq(`${pid}_11`,"The infrastructure team, along with the DevOps engineers, ___ responsible for the migration.",["a:are","b:is","c:have","d:were"],"b","'Along with' BUKAN kata penghubung seperti 'and'. Subjek utamanya tetap 'team' (tunggal) → 'is'. Frasa 'along with...' hanya keterangan tambahan."),
      mcq(`${pid}_12`,"None of the unit tests ___ after the last refactor.",["a:passes","b:pass","c:passed","d:is passing"],"b","'None of' dengan kata benda jamak → kata kerja jamak (standar informal) → 'pass'. Soal ini tentang kondisi saat ini."),
      mcq(`${pid}_13`,"The quality and reliability of this codebase ___ significantly improved.",["a:have","b:has","c:is","d:was"],"a","Dua kata benda dihubungkan dengan 'and' → subjek jamak → 'have'. Quality DAN reliability = dua hal."),
      mcq(`${pid}_14`,"There ___ no easy fix for this architectural problem.",["a:are","b:is","c:have","d:were"],"b","Subjek sesungguhnya adalah 'no easy fix'. 'Fix' adalah kata benda tunggal yang tak terhitung dalam konteks ini → 'is'."),
      mcq(`${pid}_15`,"The committee ___ voted to adopt the new deployment process.",["a:have","b:is","c:has","d:are"],"c","'Committee' adalah kata benda kolektif → tunggal dalam konteks profesional Amerika → 'has voted'."),
      mcq(`${pid}_16`,"A series of failed deployments ___ led to this rollback decision.",["a:have","b:has","c:are","d:were"],"b","'A series of' = maknanya satu rangkaian (tunggal) → 'has'. Mirip dengan 'a group of' dan 'a set of'."),
      mcq(`${pid}_17`,"The majority of our API calls ___ going to a single endpoint.",["a:is","b:has","c:are","d:was"],"c","'The majority of' + kata benda jamak ('API calls') → kata kerja jamak → 'are'. Perhatikan kata benda setelah 'of'!"),
      mcq(`${pid}_18`,"Neither the PM nor the engineers ___ aware of this breaking change.",["a:were","b:was","c:are","d:have"],"a","'Neither...nor': kata kerja menyesuaikan subjek yang PALING DEKAT. 'The engineers' (jamak) paling dekat → past tense jamak → 'were'."),
      mcq(`${pid}_19`,"There ___ an increasing number of performance regressions this release.",["a:are","b:have","c:is","d:were"],"c","Subjek sesungguhnya adalah 'an increasing number' (satu angka yang meningkat, tunggal) → 'is'. Jangan tertipu oleh 'regressions' yang jamak di belakang."),
      mcq(`${pid}_20`,"All of the code ___ been reviewed before the merge.",["a:has","b:have","c:is","d:are"],"a","'Code' adalah kata benda massa (tak terhitung) → diperlakukan tunggal → 'has been reviewed'. 'All of the code' = semua kode itu (satu kesatuan)."),
      mcq(`${pid}_21`,"The set of requirements ___ changed twice this week.",["a:have","b:are","c:has","d:were"],"c","Subjek utamanya adalah 'set' (tunggal), bukan 'requirements'. Jangan tertipu! → 'has changed'."),
      mcq(`${pid}_22`,"One of the developers ___ pushed directly to main.",["a:have","b:are","c:has","d:were"],"c","'One of' selalu diikuti kata kerja tunggal. Hanya satu developer yang melakukan ini → 'has pushed'."),
      mcq(`${pid}_23`,"The test suite, including all integration tests, ___ run in under 5 minutes.",["a:run","b:runs","c:running","d:are run"],"b","'Including all integration tests' adalah frasa tambahan (bisa dihilangkan). Subjek utamanya adalah 'suite' (tunggal) → 'runs'."),
      mcq(`${pid}_24`,"Both the frontend and the backend ___ affected by this security patch.",["a:is","b:are","c:has been","d:was"],"b","'Both X and Y' = dua hal → subjek jamak → 'are'. 'Both' selalu menunjukkan dua hal atau lebih."),
      mcq(`${pid}_25`,"The performance metrics over the past quarter ___ shown consistent improvement.",["a:has","b:have","c:is","d:are"],"b","'Metrics' adalah jamak (satu metric, banyak metrics) → 'have shown'. Jangan tertipu oleh frasa panjang di tengah kalimat."),
    ]
    const drills:Drill[]=[]
    for(let i=0;i<25;i++){
      const id=`${pid}_${String(i+1).padStart(2,"0")}`
      if(pn<=5) drills.push(m[i%m.length])
      else if(pn<=7) drills.push(fill(id,`The team, along with the product manager, ___ (approve) the new API design.`,["has approved"],"'The team' = singular subject; 'along with' is parenthetical."))
      else if(pn===8) drills.push(fix(id,`A number of tests has failed after the migration.`,"A number of tests have failed after the migration.","'A number of' = plural meaning → have."))
      else if(pn===9) drills.push(transform(id,`Rewrite using 'The number of…':\n'A number of incidents have been reported this month.'`,"The number of incidents reported this month has increased."))
      else drills.push(write(id,`Write a 2-sentence sprint update. Use at least one collective noun (team, committee, staff) and one quantifier (a number of, the majority of).`,60))
    }
    return{id:pid,phaseNumber:pn,title:TITLES[pn-1],objective:OBJS[pn-1],drills}
  })
)

/* ── Week 2 · Day 3 ── Conditionals ────────────────────────────────────── */

const W2D3=mk(2,3,
  "Conditionals — Types 0, 1, 2, 3 & Mixed",
  "Choose the correct conditional structure based on reality and time: general truth, real future, hypothetical, past regret, or mixed.",
  "Kalimat kondisional itu kalimat 'kalau... maka...'. Ada 4 jenis tergantung seberapa nyata kemungkinannya.\n\n**Type 0** (kebenaran umum/aturan otomatis — selalu benar): If + present, present.\n'If the build **fails**, the pipeline **blocks** the merge.' (ini selalu terjadi secara otomatis)\n\n**Type 1** (kemungkinan nyata di masa depan): If + present, will + kata dasar.\n'If you **push** this fix, the tests **will pass**.' (ini mungkin terjadi beneran)\n\n**Type 2** (hipotetis/kecil kemungkinannya — angan-angan): If + past, would + kata dasar.\n'If we **had** more time, we **would refactor** this.' (kenyataannya waktu kita terbatas)\n\n**Type 3** (penyesalan masa lalu — nasi sudah jadi bubur): If + had + pp, would have + pp.\n'If we **had written** tests, we **would have caught** this bug.' (nyatanya tidak nulis test, dan bug-nya lolos)\n\n**Mixed** (kondisi masa lalu, tapi hasilnya masih terasa sekarang): If + had + pp, would + kata dasar.\n'If we **had documented** this, it **would be** easier to maintain now.' (tidak dokumentasi dulu, sekarang susah)",
  gp("w2d3",(pid,pn)=>{
    const TITLES=["Type Recognition MCQ","Type 0 & 1 Contexts","Type 2 & 3 Contexts","Mixed Conditionals","Negative & Question Forms","Fill — Types 0 & 1","Fill — Types 2 & 3","Error Correction","Transform Between Types","Write Conditional Analysis"]
    const OBJS=["Identify conditional type from context.","Apply Type 0 and Type 1 in IT workplace scenarios.","Apply Type 2 and Type 3 to hypothetical IT decisions.","Produce mixed conditionals for past cause with present result.","Form negative and question conditionals correctly.","Produce Type 0/1 forms in fill-in contexts.","Produce Type 2/3 forms in complex IT scenarios.","Correct conditional errors in professional writing.","Transform conditionals to change type (reality level).","Write reasoned professional analysis using conditionals."]
    const m=[
      mcq(`${pid}_01`,"If the memory usage ___ 90%, the container restarts automatically.",["a:reaches","b:will reach","c:reached","d:had reached"],"a","Type 0: ini aturan otomatis yang selalu terjadi (seperti hukum alam) → if + present, present. Tidak ada 'will'."),
      mcq(`${pid}_02`,"If we ___ the deploy now, we will miss the SLA window.",["a:push","b:would push","c:had pushed","d:pushed"],"a","Type 1: kemungkinan nyata di masa depan → if + present, will + kata dasar. Kita bisa saja push sekarang."),
      mcq(`${pid}_03`,"If we ___ more engineers, we would ship this feature faster.",["a:have","b:had","c:will have","d:have had"],"b","Type 2: hipotetis — kenyataannya kita tidak punya lebih banyak engineer → if + past simple, would + kata dasar."),
      mcq(`${pid}_04`,"If they ___ the code review, they would have caught the injection vulnerability.",["a:did","b:do","c:had done","d:would do"],"c","Type 3: penyesalan — nyatanya tidak melakukan code review, dan vulnerability-nya lolos → if + had + pp, would have + pp."),
      mcq(`${pid}_05`,"If we ___ the API properly, it would be much easier to integrate now.",["a:documented","b:had documented","c:document","d:will document"],"b","Mixed conditional: kondisi di masa lalu (tidak dokumentasi) menyebabkan masalah sekarang → if + had + pp (masa lalu), would + kata dasar (sekarang)."),
      mcq(`${pid}_06`,"If the service ___ down, the load balancer redirects traffic automatically.",["a:goes","b:went","c:would go","d:had gone"],"a","Type 0: ini sistem otomatis yang selalu berjalan → if + present, present. Seperti 'jika lampu merah, berhenti'."),
      mcq(`${pid}_07`,"If you ___ the environment variables before deploying, the app will crash.",["a:don't set","b:won't set","c:hadn't set","d:didn't set"],"a","Type 1 negatif: kemungkinan nyata → if + present negatif + will. 'Won't set' tidak bisa di klausa if untuk Type 1."),
      mcq(`${pid}_08`,"If I ___ the CTO, I would invest in better monitoring tools.",["a:am","b:would be","c:were","d:had been"],"c","Type 2: angan-angan → 'If I were you/the CTO' adalah bentuk baku formal. Gunakan 'were', bukan 'was', dalam bahasa Inggris formal."),
      mcq(`${pid}_09`,"If they ___ a staging environment, they would have found the bug before production.",["a:use","b:used","c:had used","d:would use"],"c","Type 3: penyesalan masa lalu — nyatanya tidak pakai staging, bug-nya sampai ke production → if + had + pp, would have + pp."),
      mcq(`${pid}_10`,"If the database connection pool ___ exhausted, new requests will queue.",["a:is","b:was","c:were","d:has been"],"a","Type 1: menggambarkan perilaku sistem yang nyata → if + present, will/present. Ini bisa terjadi beneran."),
      mcq(`${pid}_11`,"If we switched to a microservices architecture, we ___ to rewrite the entire codebase.",["a:would need","b:will need","c:had needed","d:need"],"a","Type 2: hipotetis — belum tentu terjadi, masih angan-angan → klausa utama pakai 'would + kata dasar'."),
      mcq(`${pid}_12`,"If the team ___ proper branching strategies, they would not be dealing with merge conflicts now.",["a:follows","b:followed","c:had followed","d:will follow"],"c","Mixed: kondisi masa lalu yang salah (tidak ikuti branching strategy) → dampaknya masih terasa sekarang → if + had followed, would not be dealing (sekarang)."),
      mcq(`${pid}_13`,"Should you ___ any access issues, contact the IT helpdesk immediately.",["a:experience","b:experiences","c:experienced","d:have experienced"],"a","Inversi formal dari Type 1: 'Should you experience' = 'If you experience'. Setelah 'Should', pakai kata kerja dasar (bare infinitive)."),
      mcq(`${pid}_14`,"If I ___ you, I would prioritise the security vulnerabilities over new features.",["a:am","b:was","c:were","d:have been"],"c","Type 2: 'If I were you' adalah frasa baku yang harus dihafal. Dalam bahasa Inggris formal, selalu 'were', bukan 'was'."),
      mcq(`${pid}_15`,"If the rollback ___ successfully, we can reschedule the release for next week.",["a:completes","b:will complete","c:completed","d:had completed"],"a","Type 1: kemungkinan nyata → if + present (completes), klausa utama pakai modal present (can)."),
      mcq(`${pid}_16`,"We ___ this outage if we had implemented proper circuit breakers.",["a:would avoid","b:would have avoided","c:will avoid","d:had avoided"],"b","Type 3 klausa utama: kondisi masa lalu yang tidak terjadi → 'would have + pp'. Kita tidak implement circuit breakers, jadi outage-nya terjadi."),
      mcq(`${pid}_17`,"If code reviews ___ mandatory, fewer bugs would reach production.",["a:are","b:were","c:had been","d:will be"],"b","Type 2: hipotetis — seandainya code review wajib (tapi sekarang belum tentu) → if + past simple (were), would + kata dasar."),
      mcq(`${pid}_18`,"If you run the migration script twice, it ___ duplicate entries.",["a:would create","b:creates","c:created","d:had created"],"b","Type 0: aturan umum yang selalu terjadi → if + present, present. Ini pasti terjadi, bukan hanya kemungkinan."),
      mcq(`${pid}_19`,"The system ___ failed if the on-call engineer hadn't responded so quickly.",["a:will have","b:would have","c:had","d:would"],"b","Type 3 klausa utama: seandainya engineer tidak cepat respons (nyatanya cepat) → 'would have failed'. Kita beruntung."),
      mcq(`${pid}_20`,"If we ___ automated tests earlier in the project, we would save time now.",["a:wrote","b:had written","c:write","d:will write"],"b","Mixed: kondisi masa lalu yang tidak terjadi → 'had written'. Hasilnya masih terasa sekarang → 'would save'. Gabungan Type 3 (if) + Type 2 (main clause)."),
      mcq(`${pid}_21`,"Provided that the client ___ the requirements, development can begin next sprint.",["a:approves","b:approved","c:had approved","d:would approve"],"a","'Provided that' = 'asalkan' → sama seperti Type 1 'if' → present + modal present. Kemungkinan yang nyata."),
      mcq(`${pid}_22`,"If there ___ no breaking changes, the upgrade would be straightforward.",["a:is","b:are","c:were","d:had been"],"c","Type 2: hipotetis → if + 'were'. Kita tidak tahu pasti apakah tidak ada breaking changes atau tidak."),
      mcq(`${pid}_23`,"Unless you ___ the feature flag, the new UI will not appear.",["a:toggle","b:toggled","c:had toggled","d:would toggle"],"a","'Unless' artinya 'kecuali jika' atau 'kalau tidak'. Ini seperti Type 1 negatif → unless + present + will."),
      mcq(`${pid}_24`,"If we ___ the legacy system sooner, we would have avoided these compatibility issues.",["a:replace","b:replaced","c:had replaced","d:would replace"],"c","Type 3: penyesalan masa lalu — tidak ganti lebih awal → 'had replaced'. Sekarang kena masalahnya → 'would have avoided'."),
      mcq(`${pid}_25`,"Were the client to ___ the proposal, we would start immediately.",["a:accept","b:accepted","c:have accepted","d:accepting"],"a","Inversi formal Type 2: 'Were the client to accept' = 'If the client accepted'. Setelah 'to', pakai kata kerja dasar (base infinitive)."),
    ]
    const drills:Drill[]=[]
    for(let i=0;i<25;i++){
      const id=`${pid}_${String(i+1).padStart(2,"0")}`
      if(pn<=4) drills.push(m[i%m.length])
      else if(pn===5) drills.push(mcq(id,"___ we adopt continuous deployment, we would release features twice as fast.",["a:If","b:Should","c:Unless","d:Were"],"d","'Were we to adopt' = formal inversion of Type 2 conditional."))
      else if(pn<=7) drills.push(fill(id,"If the API ___ (go) down, the mobile app ___ (show) an offline banner automatically.",["goes","shows"],"Type 0 automated behavior: present + present."))
      else if(pn===8) drills.push(fix(id,"If we would have caught this earlier, we could have prevented the outage.","If we had caught this earlier, we could have prevented the outage.","Type 3 if-clause uses 'had + pp', not 'would have'."))
      else if(pn===9) drills.push(transform(id,"Rewrite as a Type 3 conditional (past regret):\n'We didn't write integration tests. The regression wasn't caught.'","If we had written integration tests, we would have caught the regression."))
      else drills.push(write(id,"Write a 3-sentence sprint retrospective analysis using at least two different conditional types to explain what went wrong and what would be done differently.",80))
    }
    return{id:pid,phaseNumber:pn,title:TITLES[pn-1],objective:OBJS[pn-1],drills}
  })
)

/* ── Week 2 · Day 4 ── Inversions & Formal Grammar ─────────────────────── */

const W2D4=mk(2,4,
  "Inversions & Formal Grammar Structures",
  "Use subject-auxiliary inversion after negative adverbials and formal conditionals to lift register.",
  "Inversi adalah cara untuk terdengar lebih formal dengan cara membalik urutan kata. Biasanya kita taruh subjek dulu lalu kata kerja bantu. Tapi di inversi, urutannya dibalik.\n\n**Inversi dengan kata negatif** — taruh kata negatif/pembatas di depan, lalu balik subjek & kata bantu:\n- 'Never **have I seen** such clean code.' (normal: I have never seen → dibalik: Never have I seen)\n- 'Rarely **does the system** fail under load.' (rarely + does + subjek)\n- 'Hardly **had we deployed** when alerts fired.' (baru saja deploy, langsung ada alert)\n- 'Not until the audit **did we realise** the scope of the issue.' (baru sadar setelah audit)\n- 'Only by automating tests **can we** ensure quality.' (hanya dengan cara ini)\n- 'No sooner **had the patch been applied** than the issue reappeared.' (baru saja, langsung terjadi lagi)\n\n**Inversi kondisional formal** (menggantikan kata 'if', kedengarannya lebih resmi):\n- 'Should you need help, contact support.' (= If you need help)\n- 'Were the client to reject this, we would escalate.' (= If the client rejected this)\n- 'Had we known earlier, we would have acted.' (= If we had known earlier)",
  gp("w2d4",(pid,pn)=>{
    const TITLES=["Inversion Recognition MCQ","Negative Adverbials","Only / Not Until Structures","Formal Conditional Inversions","Mixed Formal Structures","Fill — Simple Inversions","Fill — Formal Writing","Error Correction","Transform to Inverted Form","Write Formal Technical Prose"]
    const OBJS=["Identify inverted structures and their normal equivalents.","Form inversions with never, rarely, seldom, hardly, scarcely.","Invert after 'only' and 'not until' structures.","Use 'should', 'were', 'had' as formal conditional starters.","Identify and produce mixed formal inversion patterns.","Produce simple inversion forms correctly.","Produce inversions in formal IT writing.","Correct inversion errors in professional documents.","Transform standard sentences into formal inverted form.","Write formal IT documentation using inversion for emphasis."]
    const m=[
      mcq(`${pid}_01`,"Never ___ such a complex migration been completed without downtime.",["a:was","b:has","c:have","d:had"],"b","Inversi dengan 'Never' + present perfect: Never + has + subjek + pp. Subjeknya 'such a complex migration' (tunggal) → 'has'."),
      mcq(`${pid}_02`,"Rarely ___ the monitoring system produce false positives.",["a:does","b:is","c:do","d:has"],"a","Inversi dengan 'Rarely' + present simple: Rarely + does + subjek + kata kerja dasar. Subjeknya tunggal → 'does'."),
      mcq(`${pid}_03`,"No sooner ___ the patch deployed than the performance degraded.",["a:was","b:had","c:has","d:is"],"b","'No sooner...than' = inversi past perfect. Rumusnya: No sooner + had + subjek + pp + than + past simple. Artinya 'baru saja dipasang, langsung degraded'."),
      mcq(`${pid}_04`,"Should you ___ any issues with the new API, please raise a ticket.",["a:encounter","b:encounters","c:encountered","d:have encountered"],"a","Inversi kondisional formal: Should + subjek + kata kerja dasar (base infinitive). Ini pengganti 'If you encounter'. Setelah Should, TIDAK ada '-s' atau bentuk lain."),
      mcq(`${pid}_05`,"Only after the security audit ___ management approve the release.",["a:does","b:did","c:has","d:was"],"b","'Only after' + klausa masa lalu → inversi: did + subjek. Konteks kalimatnya di masa lalu → 'did'."),
      mcq(`${pid}_06`,"Had we ___ the requirements earlier, the scope creep would have been avoided.",["a:clarify","b:clarified","c:clarifying","d:to clarify"],"b","Inversi kondisional formal Type 3: Had + subjek + pp → Had we clarified. Ini pengganti 'If we had clarified'."),
      mcq(`${pid}_07`,"Not until the tests ___ green did the team merge the PR.",["a:turn","b:had turned","c:turned","d:turning"],"c","'Not until...did' → klausa 'not until' pakai past simple (turned). Setelah itu baru inversi: did + subjek."),
      mcq(`${pid}_08`,"Only by implementing automated testing ___ we reduce the regression rate.",["a:could","b:we could","c:can","d:we can"],"c","'Only by' + gerund → inversi dengan modal: can + subjek. Urutan kata dibalik: bukan 'we can' tapi 'can we'."),
      mcq(`${pid}_09`,"Hardly ___ we begun the sprint when the client requested major changes.",["a:have","b:had","c:did","d:were"],"b","'Hardly...when' = inversi past perfect. Rumusnya: Hardly + had + subjek + pp + when + past simple."),
      mcq(`${pid}_10`,"Were the deadline ___ extended, we could deliver a more complete feature.",["a:to be","b:being","c:been","d:be"],"a","Inversi kondisional formal Type 2: Were + subjek + to be + pp. Ini pengganti 'If the deadline were extended'."),
      mcq(`${pid}_11`,"Not once ___ the system gone down since the new infrastructure was provisioned.",["a:did","b:has","c:have","d:was"],"b","'Not once' + present perfect: Not once + has + subjek + pp. 'System' tunggal → 'has gone down'."),
      mcq(`${pid}_12`,"Only when the load ___ 10,000 req/s did the latency become noticeable.",["a:reaches","b:reached","c:had reached","d:was reaching"],"b","'Only when' + klausa masa lalu → inversi: did + subjek. Klausa 'only when' pakai past simple (reached)."),
      mcq(`${pid}_13`,"Scarcely ___ the release been published when a regression was spotted.",["a:had","b:has","c:was","d:did"],"a","'Scarcely...when' mirip dengan 'hardly...when' → inversi past perfect: Scarcely + had + subjek + pp."),
      mcq(`${pid}_14`,"Under no circumstances ___ you push directly to the main branch.",["a:should","b:can","c:may","d:shall"],"a","'Under no circumstances' (ekspresi larangan keras) → inversi modal: should + subjek. Ini seperti larangan permanen tim."),
      mcq(`${pid}_15`,"Not only ___ the fix resolve the original bug, it also improved performance.",["a:did…but","b:has…but","c:did","d:had"],"a","'Not only did [subjek] V... but [subjek] also V...' → inversi past simple untuk penekanan. Dua hal yang dilakukan, bukan satu."),
      mcq(`${pid}_16`,"In no way ___ this approach meet our scalability requirements.",["a:does","b:do","c:is","d:has"],"a","'In no way' (tidak dengan cara apapun) → inversi present simple: does + subjek. 'This approach' tunggal → 'does'."),
      mcq(`${pid}_17`,"Little ___ the team realise that the bug was already in production.",["a:did","b:had","c:has","d:was"],"a","'Little did [subjek] realise' = inversi past simple untuk penekanan. Artinya 'tim tidak sadar sama sekali bahwa...'."),
      mcq(`${pid}_18`,"So critical ___ this issue that all other tasks were deprioritised.",["a:is","b:was","c:has been","d:were"],"b","'So + adjektif + was + subjek + that...' = inversi untuk penekanan. Konteksnya masa lalu (tasks were deprioritised) → 'was'."),
      mcq(`${pid}_19`,"Should the client ___ dissatisfied with the delivery, we offer a full revision.",["a:be","b:is","c:was","d:were"],"a","Inversi kondisional formal Should: Should + subjek + kata kerja dasar (base form). Jangan pakai 'is' atau 'was'."),
      mcq(`${pid}_20`,"At no point ___ the team informed of the budget constraints.",["a:was","b:were","c:has","d:is"],"a","'At no point' (tidak pernah sekalipun) → inversi. 'Team' adalah kolektif tunggal (AmE) → 'was'. Masa lalu → 'was'."),
      mcq(`${pid}_21`,"Not until all tests ___ passing will the deployment be approved.",["a:are","b:were","c:have been","d:is"],"a","'Not until' + klausa present → inversi future: will + subjek. Klausa 'not until' pakai present simple (are passing)."),
      mcq(`${pid}_22`,"Only then ___ the management understand the technical debt implications.",["a:did","b:do","c:had","d:would"],"a","'Only then' + past → inversi past simple: did + subjek. 'Only then did management understand' = hanya saat itulah mereka mengerti."),
      mcq(`${pid}_23`,"Had the architecture review ___ conducted, this design flaw would have been caught.",["a:be","b:been","c:being","d:to be"],"b","Inversi kondisional formal Type 3: Had + subjek + been + pp. 'Review been conducted' = review yang sudah dilakukan (passive past perfect)."),
      mcq(`${pid}_24`,"Seldom ___ I encountered code so thoroughly documented.",["a:do","b:have","c:did","d:had"],"b","'Seldom' + present perfect: Seldom + have + subjek + pp. 'Have I encountered' = saya jarang sekali menemukan. Pengalaman sampai sekarang."),
      mcq(`${pid}_25`,"So serious ___ the security breach that the entire system was taken offline.",["a:is","b:are","c:was","d:were"],"c","'So + adjektif + was + subjek + that...' = inversi untuk penekanan. 'The security breach' tunggal + konteks masa lalu → 'was'."),
    ]
    const drills:Drill[]=[]
    for(let i=0;i<25;i++){
      const id=`${pid}_${String(i+1).padStart(2,"0")}`
      if(pn<=4) drills.push(m[i%m.length])
      else if(pn===5) drills.push(mcq(id,"___ have we seen such rapid adoption of a new framework across the organisation.",["a:Never","b:Rarely","c:Seldom","d:Hardly"],"a","All are possible but 'Never' is strongest for emphasis; all use the same inversion pattern."))
      else if(pn<=7) drills.push(fill(id,"Not until the post-mortem ___ (complete) ___ the team fully understand the root cause.",["was completed","did"],"'Not until … was completed did …' → past passive in the not-until clause; inversion after."))
      else if(pn===8) drills.push(fix(id,"Rarely the system has failed under this level of concurrent load.","Rarely has the system failed under this level of concurrent load.","After 'rarely', invert: Rarely + has + subject + pp."))
      else if(pn===9) drills.push(transform(id,"Rewrite using formal inversion:\n'If the client requests major changes, we will need to revise the timeline.'","Should the client request major changes, we will need to revise the timeline."))
      else drills.push(write(id,"Write a 3-sentence formal statement for a post-incident report, using at least two inverted structures (e.g., 'Not until…', 'Only then…', 'Never…').",80))
    }
    return{id:pid,phaseNumber:pn,title:TITLES[pn-1],objective:OBJS[pn-1],drills}
  })
)

/* ── Week 2 · Day 5 ── Week 2 Review ───────────────────────────────────── */

const W2D5=mk(2,5,
  "Week 2 Review — Fossilised Grammar",
  "Integrate articles, subject-verb agreement, conditionals, and inversions in professional IT writing.",
  "**Panduan cepat — ringkasan Week 2**:\n- Artikel: a/an (sebutan pertama, bisa dihitung) | the (spesifik, sudah diketahui kedua pihak) | ∅ (tak terhitung, umum, nama diri, frasa tetap)\n- S-V Agreement: sesuaikan kata kerja dengan subjek utama, bukan kata benda yang dekat. 'A number of' → jamak; 'The number of' → tunggal. Each/every → selalu tunggal.\n- Conditionals: 0 (kebenaran umum) | 1 (kemungkinan nyata) | 2 (hipotetis/angan-angan) | 3 (penyesalan masa lalu) | Mixed (kondisi lama, hasil sekarang).\n- Inversions: Never/Rarely/Seldom/Hardly/Not until/Only → balik urutan kata bantu + subjek. Should/Were/Had → inversi kondisional formal (pengganti 'if' yang lebih resmi).",
  gp("w2d5",(pid,pn)=>{
    const TITLES=["Articles Review MCQ","S-V Agreement Review MCQ","Conditionals Review MCQ","Inversions Review MCQ","Mixed Grammar MCQ","Fill — Mixed Topics","Error Correction Sprint","Transform — Raise the Register","Write a Technical Email","Speak: Meeting Presentation"]
    const OBJS=Array.from({length:10},(_,i)=>`Apply Week 2 grammar accurately in professional IT contexts — phase ${i+1}.`)
    const drills:Drill[]=[]
    for(let i=0;i<25;i++){
      const id=`${pid}_${String(i+1).padStart(2,"0")}`
      if(pn<=2) drills.push(mcq(id,`Week 2 Review #${i+1}: The quality of ___ code ___ improved since we introduced ___ mandatory peer review.`,["a:the…has…a","b:∅…has…∅","c:the…have…an","d:a…has…the"],"a","Kita butuh tiga artikel/verb yang tepat: 'THE code' karena ini kode yang spesifik (codebase kita sendiri, bukan 'kode' pada umumnya); 'HAS improved' karena yang jadi subjek adalah 'quality' (kata benda tunggal, bukan 'code'); 'A mandatory peer review' karena ini menyebut satu proses untuk pertama kalinya."))
      else if(pn<=4) drills.push(fill(id,`If we ___ (adopt) feature flags earlier, we ___ (avoid) the production incident last week.`,["had adopted","would have avoided"],"Type 3 conditional: past regret."))
      else if(pn<=6) drills.push(fix(id,`Not only the frontend team did resolve the issue, they also improved the load time by 40%.`,"Not only did the frontend team resolve the issue, but they also improved the load time by 40%.","'Not only did [subject]…' — auxiliary moves before subject in inversion."))
      else if(pn<=8) drills.push(transform(id,`Raise the register:\n'If there are problems with the API, let us know.'`,"Should any issues arise with the API, please do not hesitate to contact us."))
      else if(pn===9) drills.push(write(id,`Write a formal email to the client explaining a 2-day delay. Use: correct articles throughout, a Type 2 or 3 conditional to explain the cause, and at least one inverted structure for formal register.`,120))
      else drills.push(speak(id,"Speak for 90 seconds: explain a technical architecture decision to a non-technical stakeholder. Use formal conditionals ('Should we…', 'Were we to…'), correct articles, and at least one inverted structure."))
    }
    return{id:pid,phaseNumber:pn,title:TITLES[pn-1],objective:OBJS[pn-1],drills}
  })
)

export const WEEK2_DAYS: DayPlan[] = [W2D1, W2D2, W2D3, W2D4, W2D5]

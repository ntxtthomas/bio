---
title: "Debugging My Job Search"
dek: "How I stopped treating my job search like a black box and started treating it like a broken build."
slug: "debugging-my-job-search"
date: "2026-08-27"
hero: "/articles/debugging-my-job-search/hero.webp"
---

After months of getting nowhere in this tech job market, I decided to apply the same problem-solving methods to my unemployment that I'd use on a difficult production problem.

## The backstory

Like so many others, I was laid off. My last day on the job was ten months ago. I held a software engineering role in the EdTech market for over eight years. Our tech stack was intentionally simple; Ruby on Rails monolith, MySQL, some React here and there, GraphQL endpoints, Heroku, GitLab. At the time, we weren't allowed to use AI. I had a deep desire to learn more, to widen and deepen my knowledge, but I was limited to our stack, and we weren't expanding. We were sunsetting our product and folding it into the main platform. The main platform was run on different languages and developed by different teams. My days were numbered and when layoffs came, I went with it. I wasn't surprised that my name was on the list. I had high hopes that my 8+ years of experience would land me something, likely in EdTech, or, in another domain I have expertise in. With that, I could continue to grow and master my craft. I was wrong.

## The problem

The market I returned to looked very different than the one I left. The roles i was finding seemed increasingly senior. System design appeared constantly. Rails roles increasingly wanted React or Hotwire. AI proficiency was showing up everywhere. Whether these represented the market as a whole or simply the slice of it I was seeing, I didn't know. But the bar appeared to have moved. An engineer would spend years mastering a language but now code has become cheap. The bar was raised, the role expanded. "Ok, no problem" I thought, "I'll dig in and learn these things while I'm applying for different roles. I'll adjust or refine my learning focus as I get feedback from the market." I did just that. I deepened and widened my knowledge base, all the while learning how to navigate the market, interview at different levels, take coding challenges, etc... All of the roles I've applied for since I began this journey have been highly matched for my skillset. Still, no offers came, even for the roles where my engineering experience + domain-alignment position exceptionally well.

This is a problem, but I didn't know what the problem was. There are no observability tools, no logs, no feedback, no one to ask. The rejection letters, if I was lucky enough to get one, never offered any insight that would help me adjust my positioning in the future. It became a guessing game. Months go by and despite all the effort I'm still coming up empty handed. I've since leveraged my entire career of domain expertise and hunting for those roles; Sales Engineering, Solutions Engineering, entry level product management, but nothing is moving the needle and I don't have any definitive reason as to why. Sure, markets expand and contract and clearly we're in one of the contractions. Right? Again, kinda guessing here.

A few things are "for sure" though. I caught on to some patterns and identified them as something I was going to have to navigate;

- Ghost listings: The majority of roles that I had applied to months prior were still being promoted.
- Competition: Due to the layoff trends that are sweeping through the market, every role has hundreds of applicants before I even see it.
- Positioning: My career doesn't fit neatly into a conventional résumé. Software engineering is only one chapter of it, alongside technical sales, commercial real estate, and business ownership.
- Analytics: I have built a "Career Intelligence Application" to track all the assessed and/or applied roles.
- Automation: Much of the process is opaque and impersonal. My most recent rejection email literally began, **"Dear Candidate First Name,..."**.

## The turning point

I'll be the first, and maybe the only, guy to tell you, "I'm a pretty smart guy". And yet, after ten months of this, I couldn't explain why what I was doing wasn't working. Reaching a place of surrender, it occurred to me that I have some formal problem solving frameworks. I used them for engineering, but honestly, they could be used for anything. I wondered if it might provide some insight to this problem I'm experiencing right now.

I decided to use the I-D-E-A-L framework and employ a handful of problem solving methods within that framework in hopes to either solve the problem or gain some helpful insight. If you're thinking in engineering terms, this can be viewed as a reusable problem-solving engine, with its own methods. Here's my approach;

### I - Identify the problem

To be clear, the problem isn't _"I need a job"_, it's bigger than that. That's merely a symptom-level description. A more useful engineering formulation is _"I have marketable professional experience, I am actively presenting it to employers, but the system is not converting that experience into enough interviews to produce an employment offer."_. That gives me something to investigate.

The desired outcome isn't just to get more applications out, it's to "obtain sustainable, gainful employment that makes reasonable use of my existing professional capital, at compensation sufficient to justify the work, within a timeframe that acknowledges my financial runway."

### D - Define and represent the problem

To begin this process I separate the knowns, assumptions, and unknowns so that I have a clearer picture of what I'm working with.

**Knowns**

- I have 8+ years professional software-engineering experience.
- My strongest production stack is Ruby/Rails.
- I have substantial SaaS, API/integration, database, testing, AWS, CI/CD and production-support experience.
- I also have substantial earlier experience in technical sales/product enablement and commercial real estate/business ownership.
- I have applied across junior/mid/senior SWE positions, predominantly Rails/backend/full-stack.
- I've also tested Solutions Engineer/Sales Engineer roles.
- I've applied to unusually high-fit positions and still been rejected before round one.
- 50% of the roles I've applied for have matched 90% or better when assessed through my role-fit rubric, most rejected pre-round one, or unresponded.
- My 11 SE/Solutions applications produced only one first-round interview, (“switch to Sales Engineering because that market will respond better” is not currently supported by evidence).
- My background appears strongest where multiple dimensions intersect: Rails/SaaS + EdTech, Rails/SaaS + PropTech, engineering + integrations, etc.
- I've begun testing a Fit Map specifically because conventional resumes may require recruiters to connect too many dots themselves.

**Assumptions**\
It would be easy to just say "the market is dead" and that would be the end of it. It certainly feels like exactly that from someone sitting in my perspective. But, that's an observation about response rate, not yet an explanation. So, some other assumptions I've entertained;

- Rails is too narrow.
- Senior expectations have moved beyond my experience.
- AI has commoditized software engineers.
- My lack of modern frontend depth is hurting me.
- My lack of system design depth is hurting me.
- My lack of Python is hurting me.
- My resume doesn't differentiate me.
- ATS is filtering me.
- Recruiters aren't understanding my career throughline.
- Being unemployed is hurting me.
- Age is hurting me.
- No formal degree is hurting me.
- There are simply too many qualified applicants.
- Remote-only competition is overwhelming.

Some of these may be true but they haven't been isolated yet.

**Unknowns**

1. Where exactly does the funnel fail?
   Search → qualified posting → application → human review → recruiter screen → hiring manager → technical interview → final → offer.
   Based on what I've experienced, I know overwhelmingly that failure occurs before an interview.

2. Are applications actually reaching humans?
   Unknown.

3. When humans see the application, do they understand the fit?
   Unknown.

4. Is Rails demand insufficient, or merely oversupplied?
   Unknown.

5. Would Python materially increase interview conversion?
   Unknown.

6. Does domain-alignment improve conversion?
   Some evidence has supported this but sample size is small.

7. Does networking/referral materially outperform cold applications for you?
   I don't have enough controlled data.

8. Does the Fit-Map tool I created to submit with some applications improve conversion?
   The experiment just started.

9. Does inbound sourcing convert better than outbound applications?
   Promising signal, insufficient sample.

10. Is my problem qualification, differentiation, discoverability, positioning, market selection, or some combination?
    Unknown.

That is the problem I actually need to debug.

### E - Explore

This can be a fun stage in the problem solving process. It allows you to be creative and think of all kinds of different ways to approach a problem, without committing to any of them. I've been exploring all throughout this journey by hypothesizing and generating plausible strategies. When I first entered the workforce I was in Silicon Valley and the market was brutal. I'd heard stories of someone dressed in a chicken suit walking into the lobby of a prospective employer with their resume. Another writing their resume in Crayola. So, I have some wide parameters to work with. Some of my ideas I've already employed, some I abandoned before employing. This is an ongoing effort, maybe one that causes me to finally end up in a chicken suit myself one day.

To explore the problem rather than immediately prescribe a solution, I pulled several tools from the toolbox: Five Whys, First Principles, Inversion, and Hypothesis-Driven Debugging.

**FIVE WHYS**\
This one seemed a little obvious, but still worthwhile;

1. Why am I unemployed?\
   _Because I haven't received an acceptable offer._

2. Why haven't I received an offer?\
   _Because I'm not reaching enough late-stage interviews._

3. Why am I not reaching late-stage interviews?\
   _Primarily because I'm not getting enough first interviews._

4. Why am I not getting enough first interviews?

This is where evidence ends. That's actually a breakthrough in defining the problem.
I can't continue with "because I don't know Python", or "because I'm aged out", or "because AI destroyed software engineering", and so on. Those would be unverified fifth Whys. The root-cause investigation therefore currently terminates here with _Insufficient conversion from qualified application/candidate discovery → first interview._ Everything downstream is starved. That means spending enormous amounts of energy practicing LeetCode, system design, learning Django, studying Kubernetes, earning another certification, etc. cannot currently be justified as the primary intervention. Those optimize later stages of a pipeline we're rarely entering.

**FIRST PRINCIPLES**\
This is an interesting yet simple approach that I'm told is heavily used by Elon Musk.

Stripping careers, titles, Rails, resumes and LinkedIn away. What absolutely must happen for me to become employed?

There are really only four fundamental conditions:

1. Someone with a problem must discover me.
2. They must believe I can solve the problem.
3. They must believe hiring me is preferable to their alternatives.
4. They and I must agree on acceptable terms.

That's it.

Everything else, (resume, Rails, LinkedIn, Fit Map, Python, recruiter, portfolio, networking, certifications), is an implementation detail supporting one of those four conditions. That gives me a much better system model:

_Discovery → Credibility → Differentiation → Agreement_

My current "failure" appears overwhelmingly concentrated around **Discovery/Credibility/Differentiation**, before **Agreement** is ever tested.

**INVERSION**\
This one should always be asked when problem solving. It can be very revealing.

How can I guarantee that this job search continues failing? Pretty easy;

- Apply almost exclusively through high volume job boards.
- Compete for positions that receive hundreds or thousands of applicants.
- Use the same general presentation everywhere.
- Continue adding skills without knowing whether missing skills caused rejection.
- Change career direction every time another adjacent occupation looks promising.
- Measure applications rather than conversions.
- Treat silence as information about my competence.
- Spend months building credentials before determining whether employers value them.
- Apply equally to 70%, 90%, and 99% matched opportunities.
- Depend entirely on recruiters correctly inferring the connection between my career experience and the employer's problem.
- And, particularly important, change five variables simultaneously and then have no idea which one worked. That's bad debugging. I've done some of that.

So the inverse gives us part of our solution.

**HYPOTHESIS-DRIVEN DEBUGGING**\
This tends to be the most used approach in solving engineering problems in real time. This is all about running experiments against theories.

**H1 — Cold application volume is not the primary solution.**\
Prediction: Increasing applications without changing acquisition channels won't materially change first-interview conversion. I already have substantial supporting evidence.
Action: Don't stop applying but stop optimizing for application count.

**H2 — Extreme relevance should outperform generic qualification.**\
Prediction: Roles where I have both the technical AND domain/business alignment will produce better response rates.
Examples:
Rails + EdTech
Rails + PropTech
Sales Engineer/Solutions Engineer + PropTech (or EdTech) + Technical Sales Mgr
Experiment: Create a cohort of the next 10 unusually domain-aligned positions. Fit Map where appropriate. Tailored resume. Short human cover letter. Measure first-interview conversion separately.

**H3 — My broader career is differentiation, not noise.**\
My resume contains three unusually complementary bodies of experience:
_Software Engineering + Real Estate / Business Operations + Technical Sales / Product Enablement_
A generic recruiter may see career changes. A well aligned domain-amplified company may see _PropTech customer + SaaS engineer + technical seller_
Experiment: Fit Map cohort versus conventional application cohort. Measure interviews.

**H4 — Rails isn't the problem; market concentration might be.**\
This distinction matters enormously. Maybe Rails skills aren't undesirable. Maybe there simply aren't enough Rails openings relative to Rails applicants.
Experiment: I'm tracking qualified opportunities found/week, not merely applications, (for Rails, Python backend, Data Engineering, Solutions/Sales Engineering). After several weeks I'll know whether another ecosystem actually gives me materially more addressable opportunities. That's much better evidence than “I'm seeing Python everywhere.”

### A - Act

This is where it gets experimental, where I want this to become operational rather than philosophical.

**DIVIDE & CONQUER**\
For the next 30 days, I'm not simply “looking for a job.” I'm running a job-search experiment. I've added additional analytics to my Career Intelligence Application and I'm treating every application like a test case — inputs, lane, expected outcome, actual outcome.

Rather than treating every opportunity as part of one giant job market, I'm dividing the search into distinct career lanes so I can compare how each performs. I'm currently testing four experimental lanes:

A — Software Engineering → Keep pursuing the work I'm demonstrably qualified to do today.
B — Sales Engineer / Solutions Engineer → Continue testing this part of my earlier career without treating it as a “transition.”
C — Data Engineering → Begin exposing myself to roles and assessing the actual gaps while learning Python.
D — Entry-Level Product Management → Test whether my engineering, business, customer, and product-adjacent experience translates into an entry point on the Product side.

I'm also separating career lane from domain match. Those aren't the same variable. A Software Engineering role at an EdTech company and a Sales Engineering role at that same company belong to different career lanes, but both benefit from my prior EdTech experience. So I'm tracking domain alignment independently as None, Adjacent, Direct, or Deep. That lets me test whether one career lane actually performs better, whether domain experience is the stronger signal, or whether there's an interaction between the two.

The unit I'm interested in is **interview conversions / qualified opportunities pursued** not applications sent.

**Define The Invariants**\
Here are some things that need to remain fundamentally true throughout execution;
Invariant 1: I don't abandon demonstrated professional capital without evidence.
Invariant 2: Learning should increase optionality or address an observed deficiency.
Invariant 3: A rejection does not establish its cause.
Invariant 4: I don't call an experiment successful because it feels promising.
Invariant 5: I don't call an experiment failed from one observation.
Invariant 6: Employment is the objective.

### L - Look back and learn

Every Friday, I perform the equivalent of an incident review, or a retro, and ask questions like;

- What did we test?
- What happened?
- What did we expect?
- What evidence changed?
- Which hypothesis strengthened?
- Which weakened?
- What single variable should change next?
- Where do I think I am right now? Have I moved the needle at all?

I have not yet solved the unemployment problem.
But I think I've finally reduced it to a much more useful failing case:
An experienced professional with demonstrably relevant skills is producing insufficient first-round interview opportunities despite substantial application activity.
Therefore my immediate problem is not interview performance, not offer negotiation, not LeetCode, and not even primarily acquiring more technical capability. It's "Why isn't credible experience reliably crossing the boundary between qualified candidate and first conversation?".

That's the breakpoint I'm putting `binding.pry` on and I'm not proceeding to another giant list of things I should do from here. My own framework says that's random debugging.

I don't know what the data will show yet. That's the point. I'll update this article as the experiments produce enough evidence to support—or reject—the hypotheses. If the Fit Map does nothing, I'll say so. If Python opens a larger market but doesn't improve conversion, I'll say so. If the thing I've blamed for ten months turns out not to be the problem at all, that may be the most useful result.

The next phase is to apply RSIHEVL specifically to that failure point, (_Reproduce → Simplify → Inspect → Isolate → Hypothesize → Experiment → Verify → Learn & Record_), using my actual application history as the logs. That gives me a methodical way to determine whether I'm debugging market selection, discovery, channel, positioning, differentiation, qualification, or something I haven't recognized yet, before prescribing the fix.

In the meantime, you can read more about how I think about systems like this over on my [Lenses project page](https://www.terrythomas.com/lenses).

---

## Social Teasers

_Fill these in when you're ready to publish. Delete this note before committing the final version._

### LinkedIn

[Write 2–4 sentences here — the hook, a bit of the story, and a line that pushes them to click through. End with the link back to the article, e.g. https://terrythomas.com/articles/debugging-my-job-search]

### Reddit

[Write your Reddit-style version here — usually a bit more casual/direct than LinkedIn, often works better as a question or a blunt statement of the problem before the link.]

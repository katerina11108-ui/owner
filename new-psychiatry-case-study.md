# New Psychiatry — Portfolio Case Study Pack

Source of truth: Figma file `New Psychiatry` (pages `01 Design`: sections `01 Desktop`, `02 Mobile`, `03 Flows`; `03 Components`; `04 Guidelines`).
Social frames: page **Case Study — Social** in the same file.

Legend: **(inferred)** = read from the screens but not confirmed by the author. **(brief)** = stated in the author's brief, not visible in the file.

---

## PART 1 — Mockup analysis (internal)

**Product type.** Marketing + booking website for a licensed psychiatry and psychology centre in Kyiv (online worldwide, offline offices). WordPress + Elementor build, booking and payment through Altegio. B2C, healthcare-adjacent, high-anxiety audience.

**Target users (inferred).**
- Adults in Ukraine and the diaspora who feel "something is wrong" but can't name it or tell a psychologist from a psychiatrist.
- People who already know what they need (a psychiatrist for diagnosis or medication, a couples therapist, a child specialist) and want to book fast.
- The existing Instagram audience (new__psychiatry), who already trust the brand and need a way to book.

**Core JTBD.**
*When I feel bad and don't know whom I need, I want to find a specialist who works with my situation and see when they're free and what it costs, so I can book a first session today without calls, accounts or a long commitment.*

**Key flows found in the file.**
1. Home → Directions (situation) → filtered Search → Specialist profile → Booking.
2. Home → "Не знаю, до кого звернутися" → 5-step Quiz → Quiz results (3 specialists, editable answers) → Booking.
3. Search with filters (desktop sidebar, mobile filter sheet, no-results state) → card "Обрати час".
4. Specialist profile → "Ask a question" form → Sent state.
5. Booking: Time → Your details → Payment (Altegio widget, annotated) → Confirmed (calendar add, reminders timeline, reschedule/cancel).
6. Condition page (Anxiety) → recognition checklist → specialists with this request.
7. Content: Blog, Article, Events & Materials (groups, podcast "ПідМанула Підвела", lectures), About, Directions index, 404 with recovery routes.

**Notable design decisions visible in the screens.**
1. **Situation-first taxonomy.** Directions are grouped into three clusters by lived experience: "Всередині мене", "Між людьми", "Після того, що сталося". Each item gets a one-line plain-language description ("сили закінчились, відпочинок не допомагає") instead of a clinical definition.
2. **Two equal entry paths in the hero.** "Знайти спеціаліста" (I know) next to "Не знаю, до кого звернутися" (5-question quiz). The pre-footer repeats it with a third path: "Мені потрібен психіатр".
3. **A card that answers the questions people would otherwise call about.** Price per 50 min, format, languages, session type, request tags, a video greeting and the nearest free slot. Search is sorted by "найближчий вільний час" by default.
4. **"Who do I need?" explainer.** Psychologist vs psychotherapist vs psychiatrist, each with "часто приходять з…", placed before the quiz.
5. **Checkout with no account.** A 3-step stepper. Only name and email are required; Telegram and "what you want to come with" are optional and labelled as such. A persistent summary pane with price and the 24h free-cancellation rule. Altegio's limits are documented on the canvas.
6. **Per-session payment repeated as a promise.** It appears on the search header, the How-to-book bento, checkout and the payment step.
7. **Trust and safety layer.** MOH licence with a registry link, founders' block, vetting standard, reviews tied to completed sessions, and a crisis line (7333 / 112) as the first FAQ item and in every footer.
8. **Graceful failure states.** "Фахівець не підійшов? Це нормально" rematch prompt, a quiz no-results state, and a 404 page that routes to the most common requests.

**Gaps that need the author's confirmation.** See the full list at the end. The main ones: real specialist data and counts, the licence number, review content, payment provider (WayForPay vs. the monobank/LiqPay note in Altegio), mascot illustrations (not in the file yet), the Dnipro office filter, the founders' titles, and the author's role and timeline.

---

## PART 2 — Case study text (Behance / portfolio)

### 1. Hero
**New Psychiatry — a booking-first website for a mental-health centre that had outgrown Instagram**
Helping people who don't know whom they need find a specialist and book one session in a few minutes.

Role: Product designer, UX writer and no-code developer, end to end *(confirm)* · Timeline: [FILL IN] · Platform: responsive web (desktop + mobile) · Stack: Figma, WordPress + Elementor, Altegio, WayForPay

### 2. Context & problem
New Psychiatry is a Kyiv psychiatry and psychotherapy centre founded by Vasylysa Levchenko and Yevhenii Voronkov, practitioners who work in psychodynamic and clinical approaches. The centre is older than most of its online competitors but had no website. Its audience and voice already lived on Instagram, so the job was not to invent a brand. It was to turn existing trust into booked sessions.

Two problems sat underneath.
**User problem:** most people in distress can't tell a psychologist from a psychotherapist from a psychiatrist, and they describe their state ("I'm just exhausted"), not a diagnosis. A catalogue that asks them to pick a specialty or a condition first makes them guess, and people who are guessing tend to put it off.
**Business problem:** the centre wanted clients to choose specialists themselves. The team does not match clients manually, so the site has to do the matching that a coordinator would otherwise do, for around 30 specialists at launch.

### 3. Goals & constraints
- **Business:** booked and paid sessions as the primary conversion. Reach beyond Kyiv through online sessions. Make the centre's differentiators legible next to Treatfield, Rozmova.me, My Sense and Rari Center.
- **User:** understand whom I need, see price and availability without asking, book without an account, and know what happens next.
- **Constraints:** everything had to be buildable in Elementor by one person. Booking lives in Altegio (moved from Calendly) with one link per specialist. No CRM, no user accounts. Payment is a third-party widget I can style but not redesign. Paid materials follow a payment → Telegram-channel flow.

### 4. Users (assumption-based proto-personas)
*Not research-based. Inferred from the product and the brief; to be validated in interviews.*
- **"Something's wrong" Olena, 29, Kyiv or abroad.** Anxious and exhausted, has never been to therapy, follows the centre on Instagram. Needs: plain language, permission not to know, a price she can see, and no commitment.
- **"I know what I need" Andrii, 41.** Wants a psychiatrist for diagnosis or medication, or a couples therapist. Needs: fast filtering by specialist type, format and language, and an available slot this week.

### 5. Process (only what changed decisions)
- **Competitor teardown** gave the positioning: pay per session (no packages or subscriptions), psychiatrist and psychologist in one team, and founders who still practise. It also surfaced a conflict: Rari Center, a direct competitor, also uses green. I kept green. The brand already owns it on Instagram, and the centre is older.
- **Voice mining instead of frameworks.** The tone came from the centre's Instagram and from how clients describe themselves in specialist questionnaires. The hero went through about 30 versions before landing on "У кожного своя причина тут опинитись" ("Everyone has their own reason for being here"). The line accepts any reason without asking for a label.
- **Designing against the build.** Each section was checked against what Elementor and the Altegio widget can actually do. The checkout screens carry on-canvas notes that separate our screen, the Altegio widget and the post-payment redirect page.

### 6. Key design decisions
**D1 — Navigate by situation, not diagnosis.**
Directions are grouped into three lived-experience clusters. Each request has a one-line description in the client's own words and leads to the specialists who work with it.
*Rationale:* people recognise themselves in a description faster than they map themselves to a clinical term.
*Alternatives:* a specialty-first catalogue, or a condition A–Z.
*Trade-off:* clinicians may find the grouping imprecise, and some requests fit two clusters. I accepted the overlap for the sake of recognition. → **H2**

**D2 — Make "I don't know" a first-class path.**
The hero gives equal weight to "Find a specialist" and "Not sure whom to contact": five questions (request, format, language, budget, for whom) that return three specialists. Every answer stays editable on the results page.
*Alternatives:* a contact form for manual matching, which the team doesn't offer, or a chatbot, which Elementor can't support.
*Trade-off:* a second CTA splits attention, and the quiz can return weak matches when the roster is small. There is a no-results state for that. → **H1**

**D3 — Put everything someone would phone about on the card.**
Price per 50 minutes, format, languages, session type (individual, couple, child), request tags, a video greeting and the nearest free slot. Search sorts by the earliest availability.
*Alternatives:* minimal cards with the detail on the profile.
*Trade-off:* denser cards and a heavier content burden on specialists. Every field has to be filled and kept current. → **H3**

**D4 — One session, no account, three steps.**
The flow is Time → Details → Payment. Only name and email are required, and the optional fields say so. A persistent summary shows the price and the free-cancellation rule (24 hours).
*Alternatives:* account creation for history and rebooking.
*Trade-off:* no client history on our side, and the payment step belongs to Altegio, so visual control and analytics stop at the widget. → **H4**, **H7**

**D5 — Trust is shown, not claimed.**
The licence is shown with a registry link, along with the founders, the vetting standard, reviews only from completed sessions, and a crisis line as the first FAQ answer and in every footer.
*Alternatives:* testimonials and badges.
*Trade-off:* more content to maintain and verify. The licence and review rules need legal confirmation. → **H5**

**D6 — Plan for the mismatch.**
"Specialist didn't fit? That's normal" gives a no-explanation path to a different specialist. Reminders go out at 24 hours and 10 minutes before the session, and the confirmation lets people add it to their calendar.
*Trade-off:* the rematch currently depends on a human replying in Telegram. → **H6**

### 7. Hypotheses
See Part 3. Every decision above maps to at least one hypothesis with a metric and a success criterion.

### 8. Visual design & system
- **Type:** Geologica in a single family, from Display 72 to Caption 12, with weights used for hierarchy instead of many sizes.
- **Colour:** variables split into Primitives (green, sage, neutral, warm) and Semantic tokens (text, bg, border, status). Deep green (green/800) carries brand and primary actions. Warm cream is the page. A dedicated `bg/crisis` warm tone is reserved for safety content.
- **Components:** specialist card, filter chips, the stepper, the booking summary, and spacing and radius tokens (4–999), all built so they map onto Elementor widgets.
- **Accessibility (WCAG AA):** body text on the cream page and cream text on green/800 sit well above 4.5:1 *(to verify with a checker)*. Muted sage text on green is used only at large sizes. Chips are never the only state signal. Focus states and form error text still need to be designed.
- **Illustration (brief):** Manul, the mascot, is a grumpy-looking cat doing caring things, drawn as line art over photography, with no hospital clichés. It is scripted for 10 scenes. The scenes are not in the file yet.

### 9. Validation plan (no results yet)
There is no previous site, so there is no baseline. Weeks 0–6 after launch establish one:
- **Analytics:** GA4 events for hero CTA, quiz start and finish, card "Choose time", checkout step views, and the Altegio redirect to the confirmation page.
- **Usability testing:** 5–6 moderated sessions with first-time therapy seekers on the two entry paths.
- **Later:** A/B tests only where traffic allows, starting with H3. Otherwise sequential before/after comparisons.

Success is directional: an improvement against the baseline, not an invented percentage.

### 10. Reflection
The hardest design material here was language, not layout. Thirty hero drafts taught me to test copy against how clients actually talk. I'd push earlier for analytics access inside the Altegio widget, because the most important step of the funnel currently sits in a third-party iframe. Next I would interview 5–8 recent clients to replace the proto-personas, and test whether the quiz builds trust or just adds a step.

*(≈1,330 words for sections 1–10)*

---

## PART 3 — Hypotheses table

| ID | Hypothesis | Linked decision | Primary metric | Validation method | Success criterion | Risk if wrong |
|---|---|---|---|---|---|---|
| H1 | We believe that giving "Not sure whom to contact" equal weight in the hero, for first-time visitors who can't name their need, will increase the share of visitors who start a booking path, because it legitimises not knowing instead of forcing a guess. | D2 | % of sessions with a hero CTA click (either path) and quiz completion rate | Analytics + usability test | Quiz completion is high enough that quiz → card click is at or above the direct path | The second CTA dilutes the primary one and the quiz becomes a dead end |
| H2 | We believe that grouping requests by lived experience, for visitors who describe states not diagnoses, will increase Direction → specialist-profile views, because recognition is faster than translation into clinical terms. | D1 | Direction click → profile view rate | Analytics, 5-second / first-click tests | Higher than the search-first path; first-click success in tests | Clinically wrong grouping pushes people to the wrong specialist type |
| H3 | We believe that showing price, format, language and the nearest free slot on every card, for both personas, will increase card → booking-start rate, because uncertainty about cost and availability is a reason to postpone. | D3 | "Choose time" clicks per card view | A/B test (slot shown vs. hidden) once traffic allows | Variant with slot shows higher booking starts | Stale availability data erodes trust faster than showing nothing |
| H4 | We believe that a no-account, three-step checkout with only two required fields will increase checkout completion, because every extra field is a moment to reconsider. | D4 | Details-step → payment-widget opened rate; drop-off per step | Funnel analytics, session recordings | Drop-off concentrated in payment (outside our control) rather than in Details | Missing data (no phone) increases no-shows |
| H5 | We believe that verifiable trust signals (licence with registry link, founders, vetting, crisis line) will increase first-time visitors' confidence to book, because the category is full of unverified catalogues. | D5 | Booking-start rate of first-time visitors; post-booking micro-survey "I trusted this centre" | Interview, survey, analytics | Trust cited as a reason in interviews; no trust-related objections in tests | Trust content adds length and pushes CTAs below the fold |
| H6 | We believe that a guilt-free rematch path and session reminders will increase second-session bookings, because a poor first fit otherwise ends the relationship with the centre, not just the specialist. | D6 | % of clients booking a 2nd session within 30 days (Altegio data) | Altegio reports + interviews | Increase vs. the first-month baseline | Rematch requests overload the team's Telegram |
| H7 | We believe that "pay for one session, no packages", repeated at every step, will increase paid conversion from Instagram traffic, because commitment cost is the main barrier for first-timers. | D4 | Instagram-sourced sessions → paid booking (UTM + redirect page) | Analytics, copy A/B on hero sub-line | Higher conversion than other sources' baseline | Lower average revenue per client than package-based competitors |

---

## PART 4 — Portfolio page layout (Behance 1400 px wide modules; site uses the same order)

| # | Section | Visual | Notes |
|---|---|---|---|
| 1 | Hero | Full-bleed 1400×900: desktop hero in a browser frame plus a mobile phone overlapping bottom-right on brand green | Project name, one-line value proposition, role/timeline/stack row |
| 2 | Context & problem | Text module plus a 1400×700 crop of the "Who do I need?" section | One pull-quote: the hero line in Ukrainian with its English translation |
| 3 | Goals & constraints | 3-column card grid (Business / User / Constraints) built as an image | Show the Altegio and Elementor logos only as small text labels, not as a logo wall |
| 4 | Proto-personas | Two text cards labelled "assumption-based", no photos | |
| 5 | Process | Competitor positioning map (pay model × team composition) plus a hero-copy iteration strip (5 of the 30 versions, struck through, ending on the final one) | Best "senior" image on the page |
| 6 | User flows | Flow diagram 1400×800: two entry paths converging on the card → booking → confirmed | Built from frames in `03 Flows` |
| 7 | Decisions D1–D6 | One module per decision: 1400×900 UI close-up on the left, decision card on the right (Decision / Why / Alternatives / Trade-off / H-ID) | D3: annotated card with callouts. D4: three mobile checkout screens side by side |
| 8 | Hypotheses | The Part 3 table as an image, 1400 wide, plus a text version below for SEO | |
| 9 | Visual system | Token sheet (Primitives → Semantic), type ramp, key components, contrast pairs with ratios | Taken from `04 Guidelines` and `03 Components` |
| 10 | Mobile | 4 phone mockups in a row: Home, Search + filter sheet, Profile with sticky booking bar, Confirmed | |
| 11 | Validation plan | Timeline graphic: weeks 0–6 baseline → usability → A/B | |
| 12 | Reflection + credits | Text, then a CTA to contact | Client name visible only if the NDA allows |

---

## PART 5 — Social media content pack

All frames are on the Figma page **Case Study — Social**. They are built from live clones of the real UI frames, use auto-layout containers, take all colours from the file's Semantic variables, and set all copy in new `Social/*` text styles (Geologica; body ≥ 28 px on 1080-wide frames; Stories keep 250 px clear at top and bottom).

| Platform | Frames | Size |
|---|---|---|
| Behance | Social/Behance/Cover/01 | 808×632 |
| Dribbble | Social/Dribbble/Shot/01–03 (bento, home + cards, booking flow) | 1600×1200 |
| LinkedIn | Social/LinkedIn/Carousel/01–08, Social/LinkedIn/Post/01 | 1080×1350, 1200×627 |
| Instagram | Social/Instagram/Carousel/01–08, Social/Instagram/Story/01–03 | 1080×1350, 1080×1920 |
| X / Threads | Social/X/Post/01 | 1200×675 |

### Captions

**Behance (project description opener)**
A psychiatry centre older than most of its competitors had no website.
I designed and built New Psychiatry's booking-first site: structure, copy, UI and the Elementor build.
→ Situation-first navigation instead of diagnoses
→ A specialist card that answers price, language and availability up front
→ One-session checkout with no account
Each decision is linked to a testable hypothesis and a validation plan.
Tags: ux design, ui design, healthcare, mental health, booking, web design, wordpress, elementor, case study, product design

**Dribbble (one per shot)**
- 01: "How booking works, as one bento: choose a specialist, see free hours, pay for one session. New Psychiatry, a website for a Kyiv mental-health centre." #ui #webdesign #healthcare #bento #booking #mentalhealth
- 02: "Mobile hero and specialist cards. Price, format, languages and the nearest free slot sit on the card, so nobody has to call to ask." #mobile #cards #productdesign #ui #healthcare
- 03: "Three-step booking with no account: details, payment, confirmed. Only two required fields." #checkout #mobile #ux #booking #webdesign

**LinkedIn (carousel)**
A psychiatry centre older than most of its competitors had no website. Here's how I designed one for people who don't know whom they need.
New Psychiatry's audience lived on Instagram. The site had to turn that trust into booked sessions, without a manager doing the matching.
Three decisions shaped it:
1. Navigate by situation, not by diagnosis
2. Put everything you'd call to ask about on the card
3. Pay for one session, and say so at every step
Nothing is "proven" yet. Each decision is linked to a hypothesis and a metric we'll track after launch.
Full case in the comments. Which hypothesis would you test first?
#ProductDesign #UXDesign #HealthTech

**LinkedIn (single image post)**
"Psychologist, psychotherapist or psychiatrist?" Most people can't answer that, so the website shouldn't make them.
For New Psychiatry I grouped requests by lived experience ("inside me", "between people", "after what happened") instead of clinical terms.
The trade-off: it's less precise for clinicians. The bet: people recognise themselves faster than they diagnose themselves.
Case study in comments.
#UXDesign #ProductDesign #MentalHealth

**Instagram (carousel)**
Most people don't know whom to call. So we designed the website not to ask.
Swipe for the 6 decisions behind New Psychiatry's site: situation-first navigation, cards that answer before you ask, a 5-question match, per-session payment, and a crisis line on every page.
Full case: link in bio.
#uxdesign #uidesign #webdesign #productdesign #casestudy #mentalhealthdesign #healthcareux #figma #elementor #designprocess

**Instagram Stories**
- 01: "New case study is live" (add a poll sticker: "Ever not known whom to book?")
- 02: "3 decisions that shaped it" (add a quiz sticker: "Which would you test first?")
- 03: "Read the full case" + link sticker → case URL

**X / Threads**
Most booking sites make you choose before you understand.
For a mental-health centre, I put price, language and the next free slot on every card, so nobody has to call to ask.
Full case ↓
#UXDesign #ProductDesign

---

## Items requiring the author's confirmation

1. **Your role, timeline and team.** Currently written as end-to-end solo (UX, copy, UI, Altegio setup, Elementor build). Add dates and project length.
2. **Your name** for the `[Your Name]` placeholder on LinkedIn Carousel/01.
3. **NDA / client approval** to show the centre name, the founders' names and real specialist photos publicly.
4. **Founders' experience.** The brief says "45+ years combined practice"; the file says Yevhenii alone has "over 45 years of clinical experience". Which is correct?
5. **Founders' titles conflict.** Home shows Vasylysa as "Executive director"; About shows "Psychologist, psychotherapist".
6. **Specialist data in the mockups** (names, prices, "8 years of practice", "340+ clients") is placeholder. Confirm before publishing, or blur it.
7. **Counts** ("11/12 specialists", "22 more in catalogue") vs "~30 at launch".
8. **Review quotes** in the Reviews section are placeholders. Don't present them as real. Also confirm Altegio can enforce "reviews only after completed sessions".
9. **Licence number** "№ 1234 від 12.03.2021" looks like a placeholder.
10. **"We accept every eighth candidate"** is a factual claim that needs the client's confirmation.
11. **Payment provider.** The brief says WayForPay; the Altegio note on canvas says monobank / LiqPay.
12. **Copy risk.** The payment step says "Без передоплат" ("no prepayment"), but the session is paid upfront in Altegio. Consider "без пакетів і підписок" ("no packages or subscriptions") instead.
13. **Offices.** The site says "3 offices in central Kyiv", but the search filter includes "Офлайн, Дніпро" (offline, Dnipro).
14. **Session length.** The cards say 50 min; the checkout shows "Intro session · 75 min". Is the intro session a separate service?
15. **Manul mascot illustrations** (10 scenes) are in the brief but not in the file, so the social pack doesn't use them. Add them if they're ready.
16. **Any real post-launch data** (bookings, conversion). If you have it, Part 2 §9 can report results instead of a plan.
17. **Contrast ratios** should be checked with a tool before you quote them publicly.

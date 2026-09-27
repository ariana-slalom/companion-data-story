# BRIEF.md — The Support Side

## What This Is
An interactive data story about the companion experience in chronic illness.
Not the patient. The person beside them.

Healthcare systems treat the companion as secondary by design — they have to.
Clinical priority goes to the person who is unwell. But the person doing the
accompanying — reorganizing their schedule, absorbing the emotional weight,
learning a condition they didn't choose, monitoring symptoms without a map —
is doing a job with almost no tools built for them.

This project makes that experience visible. It validates what companions carry.
It closes with an interactive prototype of what a companion-focused tool
could look like: not a replacement for clinical support, but a resource for
the person in the room who isn't the patient.

## Disclaimer
This project is designed as an educational and support resource. It does not
replace clinical medical advice, professional diagnosis, or treatment direction.
If you or someone you support is experiencing a health concern, please consult
a qualified healthcare provider.

## Audience
**Primary:** Companions and caregivers — partners, parents, siblings, close friends
of people living with chronic, episodic, or invisible illness. People who are
actively supporting someone and looking for something that sees them.

**Secondary:** Healthcare designers, advocates, and researchers who build tools
in this space and need to understand the gap from the companion's perspective.

## Conditions Covered
The story applies across chronic illness broadly. Conditions used as examples:
- Lupus (SLE)
- Multiple Sclerosis (MS)
- Rheumatoid Arthritis (RA)
- Hashimoto's Thyroiditis
- Crohn's Disease
- Sjögren's Syndrome
- Ehlers-Danlos Syndrome / Hypermobility Spectrum Disorder (EDS/HSD)
- Type 1 Diabetes (T1D) — including the parent-of-child caregiver experience

These conditions represent a range of severity, visibility, and age of onset —
from the adult female demographic most commonly cited in autoimmune research,
to the parent managing a child's lifelong condition from diagnosis forward.

## The Story Arc

**1. Hook — The Numbers Don't Lie**
Nearly 80% of autoimmune disease patients are women. Average time to correct
diagnosis: 4.6 years, four or more doctors. Nearly half were told their symptoms
were psychosomatic before anyone ran the right test. For EDS, the wait stretches
to a decade or more — and 88% of patients were told they were "making it up."
Sharp, immediate, and enraging.

**2. The Diagnosis Journey**
A diagnosis often doesn't mean fixed. It means named. These are complex,
multi-system conditions that medicine is still learning. "Diagnosis" often
unlocks management, not cure. The companion waits through every appointment,
every wrong answer, every re-explanation. And then the real work begins.

**3. The Sliding Scale**
Chronic illness isn't a fixed state. Severity shifts — by day, by year,
by flare. What support looks like on a good day is completely different from
what it looks like during a flare. Companions have to recalibrate constantly,
often without warning, often without language for what they're doing.

**4. The Pivot — Who Else Is in the Room?**
The companion perspective emerges. What does a flare day look like from the
other side? The "day in the life" toggle shows the same day from two angles:
the patient's experience, and the companion's parallel reality.

**5. The Invisible Data**
1 in 4 American adults are caregivers. 70%+ of parents of children with T1D
report moderate-to-severe burden. The research on companion wellbeing —
caregiver fatigue, isolation, grief, relationship strain, career disruption —
exists. The tools built for companions are nearly nonexistent.
What people share about this experience is also shaped by stigma: invisible
illness is often disbelieved, and companions can internalize that disbelief too.

**6. Right-Sizing Support**
Companions oscillate: denial, over-support, not knowing enough, fear of
asking the wrong thing. Patients oscillate too: not wanting to burden,
not wanting to re-explain, needing different things at different moments.
The gap this project addresses is helping companions right-size how they
show up — informed, present, boundaried, and looking after themselves too.

**7. The Gap + Interactive Prototype**
Companion-focused tools barely exist. This section closes with an interactive
mockup of what one could look like: a simple, warm tool for tracking,
learning, and knowing when to hand off to professional support.
Not a clinical app. A lifeline for the person beside the person.

## Core Flows (Reviewer Checklist)
- Scroll-triggered narrative — sections reveal as the user scrolls
- Condition filter (Lupus, MS, RA, Hashimoto's, Crohn's, Sjögren's, EDS, T1D)
  — selected key stats update per condition
- "Day in the Life" toggle — patient view vs. companion view, same day
- Closing interactive prototype — tappable companion tool mockup

## Data Sources (cited by type, representative approximations)
- American Autoimmune Related Diseases Association (AARDA)
- Lupus Foundation of America
- Arthritis Foundation
- The Ehlers-Danlos Society
- JDRF / peer-reviewed T1D caregiver literature (Heliyon 2024, PMC 2024)
- AARP & National Alliance for Caregiving (Caregiving in the US, 2025)

All data is statistically plausible and inspired by published research.
Exact figures are representative approximations where noted.

## Design Direction
Not clinical. Warm, editorial, illustration-led. The visual language of
health advocacy publishing — art book meets wellbeing resource.
Soft neutrals. Intentional color moments marking emotional weight.
Typography-forward. No stock photography. Soft shapes and illustration only.
A first-time visitor should feel seen, not studied.

## Tech Stack
Vue 3 + Vite + TypeScript
Vuetify 3 + Material Design Icons (@mdi/font)
Google Fonts: Playfair Display (headings) + DM Sans (body/UI)
chart.js + vue-chartjs for data visualizations
Local Vue state only — no Pinia, no backend
Vercel deployment with SPA rewrite rules

## Deployment
URL: [to be added post-deploy]
Password: ariana-protogen302

## Repo
https://github.com/ariana-slalom/companion-data-story
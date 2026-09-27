# Data Model — The Support Side

## Approach
All data is statistically plausible and inspired by published research.
Exact figures are representative approximations. Source types are cited
inline in the UI even where specific numbers are illustrative.

No backend. No API. All data is local TypeScript constants.

## Source Types Referenced
- American Autoimmune Related Diseases Association (AARDA)
- Lupus Foundation of America
- Arthritis Foundation
- The Ehlers-Danlos Society
- JDRF / peer-reviewed T1D caregiver literature (Heliyon 2024, PMC 2024)
- AARP & National Alliance for Caregiving (Caregiving in the US, 2025)

## TypeScript Interfaces

```typescript
// src/types/index.ts

export interface Condition {
  id: string
  label: string
  diagnosisYears: number        // avg years to correct diagnosis
  prevalencePer100k: number     // estimated US prevalence per 100k
  commonMisdiagnoses: string[]  // top 2–3 misdiagnoses
  companionStat: string         // one companion-specific insight (string, cited)
  companionStatSource: string   // source type label
}

export interface DayEvent {
  time: string          // e.g. "7:00am"
  patientExperience: string
  companionExperience: string
  severity: 'low' | 'medium' | 'high'  // used for color coding
}

export interface StorySection {
  id: string
  headline: string
  body: string
  visualType: 'stat' | 'chart' | 'toggle' | 'prototype' | 'text'
}
```

## Condition Data (mock, src/data/conditions.ts)

```typescript
export const conditions: Condition[] = [
  {
    id: 'lupus',
    label: 'Lupus (SLE)',
    diagnosisYears: 6,
    prevalencePer100k: 72,
    commonMisdiagnoses: ['Fibromyalgia', 'Rheumatoid Arthritis', 'Anxiety'],
    companionStat: 'Partners of lupus patients report significantly higher rates of anxiety and disrupted sleep than age-matched controls.',
    companionStatSource: 'Lupus Foundation of America'
  },
  {
    id: 'ms',
    label: 'Multiple Sclerosis',
    diagnosisYears: 5,
    prevalencePer100k: 90,
    commonMisdiagnoses: ['Anxiety', 'Migraine', 'Fibromyalgia'],
    companionStat: 'Caregivers of MS patients average 35+ hours per week in direct support activities during relapse periods.',
    companionStatSource: 'National MS Society (representative)'
  },
  {
    id: 'ra',
    label: 'Rheumatoid Arthritis',
    diagnosisYears: 3,
    prevalencePer100k: 860,
    commonMisdiagnoses: ['Osteoarthritis', 'Fibromyalgia', 'General joint pain'],
    companionStat: 'Spouses of RA patients report reduced workforce participation and significant schedule reorganization around flare cycles.',
    companionStatSource: 'Arthritis Foundation (representative)'
  },
  {
    id: 'hashimotos',
    label: "Hashimoto's Thyroiditis",
    diagnosisYears: 5,
    prevalencePer100k: 1400,
    commonMisdiagnoses: ['Depression', 'Chronic fatigue', 'Anxiety'],
    companionStat: 'Companions frequently report confusion distinguishing illness symptoms from emotional states — a gap no current tool addresses.',
    companionStatSource: 'AARDA (representative)'
  },
  {
    id: 'crohns',
    label: "Crohn's Disease",
    diagnosisYears: 4,
    prevalencePer100k: 200,
    commonMisdiagnoses: ['IBS', 'Anxiety', 'Appendicitis'],
    companionStat: 'Caregivers of IBD patients report high rates of secondary traumatic stress tied to unpredictable flare events.',
    companionStatSource: 'Crohn\'s & Colitis Foundation (representative)'
  },
  {
    id: 'sjogrens',
    label: "Sjögren's Syndrome",
    diagnosisYears: 7,
    prevalencePer100k: 300,
    commonMisdiagnoses: ['Menopause', 'Anxiety', 'Fibromyalgia'],
    companionStat: 'The invisible nature of Sjögren\'s symptoms means companions are often the only witnesses to the real day-to-day burden.',
    companionStatSource: 'Sjögren\'s Foundation (representative)'
  },
  {
    id: 'eds',
    label: 'EDS / HSD',
    diagnosisYears: 10,
    prevalencePer100k: 200,
    commonMisdiagnoses: ['Anxiety', 'Depression', 'Fibromyalgia'],
    companionStat: '88% of EDS patients were told they were "making it up" — companions absorb the secondary trauma of years of medical disbelief.',
    companionStatSource: 'Brown University / Center for Complex Conditions, 2025'
  },
  {
    id: 't1d',
    label: 'Type 1 Diabetes',
    diagnosisYears: 0,
    prevalencePer100k: 600,
    commonMisdiagnoses: ['Type 2 Diabetes', 'Stress response', 'Viral illness'],
    companionStat: '70% of parent caregivers of children with T1D report moderate-to-severe burden, with nighttime monitoring as the most disruptive factor.',
    companionStatSource: 'Heliyon / PMC, 2024'
  }
]
```

## Day in the Life Data (mock, src/data/dayInLife.ts)
Representative flare day. Condition-agnostic.

```typescript
export const dayEvents: DayEvent[] = [
  {
    time: '6:30am',
    patientExperience: 'Wake up already exhausted. Pain level 7. Decide whether today is a stay-in-bed day.',
    companionExperience: 'Wake up and immediately assess — checking breathing, checking color, deciding whether to ask or wait.',
    severity: 'high'
  },
  {
    time: '8:00am',
    patientExperience: 'Medications. Try to eat something. Cancel morning plans.',
    companionExperience: 'Quietly rearrange your own day. Send the messages they asked you to send. Don\'t show the stress.',
    severity: 'medium'
  },
  {
    time: '11:00am',
    patientExperience: 'Slight improvement. Feel guilty for being unwell. Don\'t want to need help.',
    companionExperience: 'Check in without hovering. Offer without insisting. Navigate the line between helpful and smothering.',
    severity: 'medium'
  },
  {
    time: '2:00pm',
    patientExperience: 'Pain spike. Back to bed. Frustrated and exhausted.',
    companionExperience: 'Cancel your own plans. Feel the grief of another lost day — then feel guilty for feeling it.',
    severity: 'high'
  },
  {
    time: '6:00pm',
    patientExperience: 'A little better. Apologize for the day. Worry about tomorrow.',
    companionExperience: 'Say it\'s okay. Mean it. Also need someone to say it to you.',
    severity: 'low'
  }
]
```

## Global Stats (src/data/globalStats.ts)
Used in non-filtered narrative sections.

```typescript
export const globalStats = {
  autoimmuneFemalePercent: 80,         // AARDA
  avgDiagnosisYears: 4.6,              // AARDA
  avgDoctorsBeforeDiagnosis: 4,        // AARDA
  toldPsychosomaticPercent: 45,        // AARDA surveys
  usCaregiversMillions: 63,            // AARP & NAC, 2025
  caregiverIsOneInFour: true,          // AARP & NAC, 2025
  t1dParentModerateToSevereBurden: 70, // Heliyon / PMC, 2024
  edsPatientsToldMakingItUp: 88        // Brown University, 2025
}
```
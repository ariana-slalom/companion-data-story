export interface TrackEntry {
  label: string
  icon: string
}

export const trackOptions: TrackEntry[] = [
  { label: 'Flare day', icon: 'mdi-weather-lightning' },
  { label: 'Good day', icon: 'mdi-weather-sunny' },
  { label: 'Appointment', icon: 'mdi-stethoscope' },
  { label: 'New symptom', icon: 'mdi-alert-circle-outline' },
  { label: 'Med change', icon: 'mdi-pill' },
  { label: 'Just checking in', icon: 'mdi-hand-heart' },
]

export interface LearnCard {
  title: string
  body: string
}

export const learnCards: LearnCard[] = [
  {
    title: 'What "flare" actually means',
    body: 'A temporary worsening of symptoms — not a sign that something new is wrong, and not something they can will away.',
  },
  {
    title: 'Why rest isn\u2019t laziness',
    body: 'Chronic illness fatigue is physiological, not motivational. Pushing through often extends recovery time.',
  },
  {
    title: 'The language that helps',
    body: '"What do you need right now" tends to land better than "What can I do" — it hands over the decision, not the labor of deciding.',
  },
]

export interface HandoffPrompt {
  question: string
  guidance: string
}

export const handoffPrompts: HandoffPrompt[] = [
  {
    question: 'Is this a new or worsening symptom outside their known pattern?',
    guidance: 'Encourage contacting their care team rather than waiting it out.',
  },
  {
    question: 'Are you making a medical decision instead of a support decision?',
    guidance: 'That\u2019s a sign to loop in a clinician — not a failure on your part.',
  },
  {
    question: 'Are you both running on empty?',
    guidance: 'This is a sign to ask for outside help — from a therapist, support group, or care coordinator.',
  },
]

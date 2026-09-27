export interface OscillationPair {
  companionState: string
  companionDetail: string
  patientState: string
  patientDetail: string
}

export const oscillations: OscillationPair[] = [
  {
    companionState: 'Denial',
    companionDetail: '"It\u2019s probably nothing" — easier to believe than to recalibrate a whole future.',
    patientState: 'Minimizing',
    patientDetail: '"I don\u2019t want to make a big deal of it" — downplaying to protect everyone else.',
  },
  {
    companionState: 'Over-support',
    companionDetail: 'Taking over tasks the person could still do — well-meaning, but it can erode independence.',
    patientState: 'Not wanting to burden',
    patientDetail: 'Insisting they\u2019re fine, even mid-flare, to avoid becoming "too much."',
  },
  {
    companionState: 'Not knowing enough',
    companionDetail: 'Afraid of saying the wrong thing, so saying nothing — which can read as absence.',
    patientState: 'Not wanting to re-explain',
    patientDetail: 'Exhausted by educating every person in their life about the same condition, again.',
  },
  {
    companionState: 'Fear of asking wrong',
    companionDetail: '"Are you doing okay?" starts to feel like it might be the wrong question to ask, every time.',
    patientState: 'Needing different things',
    patientDetail: 'What helped last flare might not help this one — no fixed playbook exists.',
  },
]

export interface RightSizingTip {
  title: string
  detail: string
}

export const rightSizingTips: RightSizingTip[] = [
  { title: 'Ask, don\u2019t assume', detail: 'What helps today might not be what helped last week. Check in without a script.' },
  { title: 'Track your own load', detail: 'Notice your own fatigue and strain — it\u2019s data too, not a distraction from theirs.' },
  { title: 'Know your lane', detail: 'You are not their doctor. Knowing when to encourage professional support is part of the job.' },
  { title: 'Protect something for yourself', detail: 'Sustainable support requires a life that isn\u2019t only support.' },
]

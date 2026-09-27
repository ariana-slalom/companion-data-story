export interface JourneyStep {
  title: string
  description: string
  companionRole: string
}

export const journeySteps: JourneyStep[] = [
  {
    title: 'First symptoms',
    description: 'Something is wrong, but it doesn\u2019t look like anything on a chart yet. It gets a name like "stress" or "getting older."',
    companionRole: 'Notices the small changes first — the ones easy to explain away.',
  },
  {
    title: 'The first doctor',
    description: 'Tests come back "normal." Reassurance that isn\u2019t reassuring. The search for language begins.',
    companionRole: 'Sits in the waiting room rehearsing how to describe symptoms that are hard to describe.',
  },
  {
    title: 'The second opinion, the third, the fourth',
    description: 'Each appointment is a new intake form, a new retelling, a new chance to be believed — or not.',
    companionRole: 'Keeps the growing folder of records. Becomes the institutional memory of a case nobody else sees whole.',
  },
  {
    title: 'The diagnosis',
    description: 'A name, finally. Relief and grief arrive together — named doesn\u2019t mean fixed, it means the real work can start.',
    companionRole: 'Celebrates the answer, and quietly absorbs what "chronic" and "manage, not cure" actually mean long-term.',
  },
  {
    title: 'Learning to manage',
    description: 'Medications, specialists, triggers, flare patterns — an entirely new field of expertise, self-taught under pressure.',
    companionRole: 'Learns the condition alongside them — not as a hobby, but as a second, unpaid, unofficial job.',
  },
]

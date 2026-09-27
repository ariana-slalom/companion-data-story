// Representative approximations inspired by AARDA, Lupus Foundation of America,
// Arthritis Foundation, The Ehlers-Danlos Society, and peer-reviewed T1D caregiver literature.
// Exact figures are illustrative, not clinical citations.

export interface ConditionStat {
  id: string
  name: string
  shortName: string
  tagline: string
  avgDiagnosisYears: number
  avgDoctorsSeen: number
  percentToldPsychosomatic: number
  percentFemale: number
  caregiverBurdenPercent: number
  description: string
  companionNote: string
}

export const conditions: ConditionStat[] = [
  {
    id: 'lupus',
    name: 'Lupus (SLE)',
    shortName: 'Lupus',
    tagline: 'A disease of a thousand faces, medicine still learning its grammar.',
    avgDiagnosisYears: 6,
    avgDoctorsSeen: 4,
    percentToldPsychosomatic: 46,
    percentFemale: 90,
    caregiverBurdenPercent: 62,
    description:
      'An autoimmune disease where the immune system attacks healthy tissue, with symptoms that can affect joints, skin, kidneys, and more — often invisible from the outside.',
    companionNote:
      'Companions learn to read flares before they\u2019re named — a change in gait, a canceled plan, a quieter voice.',
  },
  {
    id: 'ms',
    name: 'Multiple Sclerosis (MS)',
    shortName: 'MS',
    tagline: 'Unpredictable by nature — no two days promised to look alike.',
    avgDiagnosisYears: 2,
    avgDoctorsSeen: 3,
    percentToldPsychosomatic: 33,
    percentFemale: 75,
    caregiverBurdenPercent: 65,
    description:
      'A chronic disease affecting the central nervous system, causing unpredictable symptoms from fatigue to mobility changes that can shift week to week.',
    companionNote:
      'Support often means holding two plans at once — the one you made, and the one you\u2019ll need if today is a bad day.',
  },
  {
    id: 'ra',
    name: 'Rheumatoid Arthritis (RA)',
    shortName: 'RA',
    tagline: 'Not just joint pain — a systemic condition with a public misconception.',
    avgDiagnosisYears: 3,
    avgDoctorsSeen: 4,
    percentToldPsychosomatic: 38,
    percentFemale: 75,
    caregiverBurdenPercent: 58,
    description:
      'An autoimmune condition causing joint inflammation and systemic fatigue, frequently mistaken for a normal part of aging.',
    companionNote:
      'Companions become translators — explaining to others why "it\u2019s just arthritis" doesn\u2019t capture what today costs.',
  },
  {
    id: 'hashimotos',
    name: "Hashimoto's Thyroiditis",
    shortName: "Hashimoto's",
    tagline: 'Dismissed as "just tired" more often than almost any other condition.',
    avgDiagnosisYears: 4,
    avgDoctorsSeen: 5,
    percentToldPsychosomatic: 51,
    percentFemale: 90,
    caregiverBurdenPercent: 49,
    description:
      'An autoimmune thyroid condition causing fatigue, weight changes, and cognitive fog, often minimized as ordinary tiredness.',
    companionNote:
      'The hardest part is often invisible: watching someone be told they\u2019re fine when every test says otherwise, until one doesn\u2019t.',
  },
  {
    id: 'crohns',
    name: "Crohn's Disease",
    shortName: "Crohn's",
    tagline: 'A condition that demands the household reorganize around a bathroom map.',
    avgDiagnosisYears: 3,
    avgDoctorsSeen: 4,
    percentToldPsychosomatic: 35,
    percentFemale: 50,
    caregiverBurdenPercent: 60,
    description:
      'A form of inflammatory bowel disease causing chronic digestive inflammation, unpredictable flares, and significant quality-of-life impact.',
    companionNote:
      'Companions plan routes, restaurants, and road trips around a body that doesn\u2019t give much notice.',
  },
  {
    id: 'sjogrens',
    name: "Sjögren's Syndrome",
    shortName: "Sjögren's",
    tagline: 'One of the most underdiagnosed autoimmune conditions in existence.',
    avgDiagnosisYears: 5,
    avgDoctorsSeen: 5,
    percentToldPsychosomatic: 48,
    percentFemale: 90,
    caregiverBurdenPercent: 54,
    description:
      'An autoimmune condition primarily affecting moisture-producing glands, with fatigue and pain that extend well beyond dry eyes and mouth.',
    companionNote:
      'Companions become the ones who remember which restaurant has water within reach and which doesn\u2019t.',
  },
  {
    id: 'eds',
    name: 'Ehlers-Danlos Syndrome / HSD',
    shortName: 'EDS/HSD',
    tagline: 'The longest average wait for diagnosis of any condition in this story.',
    avgDiagnosisYears: 10,
    avgDoctorsSeen: 7,
    percentToldPsychosomatic: 88,
    percentFemale: 80,
    caregiverBurdenPercent: 66,
    description:
      'A group of connective tissue disorders causing joint hypermobility, chronic pain, and system-wide instability, historically dismissed as anxiety.',
    companionNote:
      'Companions often become the record-keepers of a decade-long search for an answer nobody believed was real.',
  },
  {
    id: 't1d',
    name: 'Type 1 Diabetes (T1D)',
    shortName: 'T1D',
    tagline: 'A caregiving job that often starts before the patient can speak.',
    avgDiagnosisYears: 0.1,
    avgDoctorsSeen: 2,
    percentToldPsychosomatic: 12,
    percentFemale: 50,
    caregiverBurdenPercent: 71,
    description:
      'An autoimmune condition requiring lifelong insulin management, constant monitoring, and rapid decision-making — often first managed entirely by a parent.',
    companionNote:
      'For parents, the caregiving starts at diagnosis and doesn\u2019t pause for sleep, school, or a single unmonitored night.',
  },
]

export const defaultConditionId = 'lupus'

export function getCondition(id: string): ConditionStat {
  return conditions.find((c) => c.id === id) ?? conditions[0]
}

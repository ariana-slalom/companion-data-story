// Companion / caregiver wellbeing stats — representative approximations
// inspired by AARP & National Alliance for Caregiving (Caregiving in the US, 2025),
// JDRF / T1D caregiver literature (Heliyon 2024, PMC 2024).

export interface InvisibleStat {
  value: string
  label: string
  source: string
}

export const invisibleStats: InvisibleStat[] = [
  {
    value: '1 in 4',
    label: 'American adults provide unpaid care to a family member or friend.',
    source: 'AARP & National Alliance for Caregiving, Caregiving in the US (2025)',
  },
  {
    value: '70%+',
    label: 'of parents of children with Type 1 Diabetes report moderate-to-severe caregiver burden.',
    source: 'Peer-reviewed T1D caregiver literature (Heliyon 2024; PMC 2024)',
  },
  {
    value: '23%',
    label: 'of caregivers say caregiving has made their own health worse.',
    source: 'AARP & National Alliance for Caregiving, Caregiving in the US (2025)',
  },
  {
    value: '<5%',
    label: 'of digital health tools are designed primarily for the companion, not the patient.',
    source: 'Representative approximation, health tech landscape review',
  },
]

export const researchVolumeChart = {
  labels: ['Patient symptom research', 'Patient treatment research', 'Companion wellbeing research', 'Companion tools & products'],
  data: [100, 86, 22, 6],
}

export const strainTypesChart = {
  labels: ['Emotional fatigue', 'Isolation', 'Career disruption', 'Relationship strain', 'Financial strain'],
  data: [32, 21, 18, 17, 12],
}

import type { Condition } from '../types'

export const conditions: Condition[] = [
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
		id: 'lupus',
		label: 'Lupus (SLE)',
		diagnosisYears: 6,
		prevalencePer100k: 72,
		commonMisdiagnoses: ['Fibromyalgia', 'Rheumatoid Arthritis', 'Anxiety'],
		companionStat: 'Partners of lupus patients report significantly higher rates of anxiety and disrupted sleep than age-matched controls.',
		companionStatSource: 'Lupus Foundation of America'
	},
	{
		id: 'hashimotos',
		label: "Hashimoto's",
		diagnosisYears: 5,
		prevalencePer100k: 1400,
		commonMisdiagnoses: ['Depression', 'Chronic fatigue', 'Anxiety'],
		companionStat: 'Companions frequently report confusion distinguishing illness symptoms from emotional states — a gap no current tool addresses.',
		companionStatSource: 'AARDA (representative)'
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

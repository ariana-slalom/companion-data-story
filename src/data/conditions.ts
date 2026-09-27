import type { Condition } from '../types'

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
		companionStatSource: "Crohn's & Colitis Foundation (representative)"
	},
	{
		id: 'sjogrens',
		label: "Sjögren's Syndrome",
		diagnosisYears: 7,
		prevalencePer100k: 300,
		commonMisdiagnoses: ['Menopause', 'Anxiety', 'Fibromyalgia'],
		companionStat: "The invisible nature of Sjögren's symptoms means companions are often the only witnesses to the real day-to-day burden.",
		companionStatSource: "Sjögren's Foundation (representative)"
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

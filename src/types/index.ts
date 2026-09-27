export interface Condition {
	id: string
	label: string
	diagnosisYears: number
	prevalencePer100k: number
	commonMisdiagnoses: string[]
	companionStat: string
	companionStatSource: string
}

export interface DayEvent {
	time: string
	patientExperience: string
	companionExperience: string
	severity: 'low' | 'medium' | 'high'
}

export interface StorySection {
	id: string
	headline: string
	body: string
	visualType: 'stat' | 'chart' | 'toggle' | 'prototype' | 'text'
}

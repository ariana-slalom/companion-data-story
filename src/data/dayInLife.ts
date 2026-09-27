import type { DayEvent } from '../types'

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
		companionExperience: "Quietly rearrange your own day. Send the messages they asked you to send. Don't show the stress.",
		severity: 'medium'
	},
	{
		time: '11:00am',
		patientExperience: "Slight improvement. Feel guilty for being unwell. Don't want to need help.",
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
		companionExperience: "Say it's okay. Mean it. Also need someone to say it to you.",
		severity: 'low'
	}
]

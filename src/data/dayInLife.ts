// "Day in the Life" — same day, two vantage points.
// Representative, not tied to a single real person.

export interface DayMoment {
  time: string
  patient: string
  companion: string
  intensity: 1 | 2 | 3 | 4 | 5 // emotional/physical load, for visual weight
}

export const dayInLife: DayMoment[] = [
  {
    time: '6:40 AM',
    patient: 'Wakes up already tired. Body feels like it didn\u2019t rest at all. Decides not to mention it yet.',
    companion: 'Notices the extra-long pause before they get up. Already recalculating the morning.',
    intensity: 2,
  },
  {
    time: '7:15 AM',
    patient: 'Takes medication. Tries to gauge — good day or bad day — before committing to plans.',
    companion: 'Quietly checks the med organizer, then the calendar, cross-referencing what today can hold.',
    intensity: 2,
  },
  {
    time: '8:30 AM',
    patient: 'Pain climbs faster than expected. Debates whether to say something or push through.',
    companion: 'Catches the wince. Doesn\u2019t ask directly — asks something small instead, to leave room for either answer.',
    intensity: 3,
  },
  {
    time: '10:00 AM',
    patient: 'Cancels the plan they were looking forward to. Feels the familiar guilt before the relief.',
    companion: 'Rearranges their own schedule without announcing it. Sends the "no worries at all" text they don\u2019t always feel.',
    intensity: 4,
  },
  {
    time: '1:00 PM',
    patient: 'A wave of fatigue that doesn\u2019t match the time of day. Needs to lie down, again.',
    companion: 'Steps in on autopilot — dims the room, quiets the house, holds the rest of the day loosely.',
    intensity: 4,
  },
  {
    time: '4:00 PM',
    patient: 'Symptom flares in a new way. Wonders if this is worth calling the doctor about, or if it will pass.',
    companion: 'Runs the mental checklist built from months of this: is this the usual pattern, or something more.',
    intensity: 5,
  },
  {
    time: '7:00 PM',
    patient: 'Apologizes for the day. Feels like a burden, even though nothing was their fault.',
    companion: 'Reassures them, and means it — while privately logging their own exhaustion for later, or never.',
    intensity: 3,
  },
  {
    time: '9:30 PM',
    patient: 'Finally comfortable enough to talk about something unrelated to the illness. A small, good moment.',
    companion: 'Lets the day go. Doesn\u2019t mention how tired they are. Starts thinking about tomorrow\u2019s plan B.',
    intensity: 2,
  },
]

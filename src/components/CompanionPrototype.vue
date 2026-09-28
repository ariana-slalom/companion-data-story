<template>
  <div class="proto-section">
    <div class="proto-intro">
      <p class="proto-eyebrow">What it could look like</p>
      <h2 class="proto-headline">A tool built for the support side.</h2>
      <p class="proto-body">
        Not a clinical tool. Not another patient app with a caregiver tab
        buried in settings. Something that starts with your experience.
        Tap through the screens to see how it works.
      </p>
    </div>

    <div class="proto-split">
      <div class="proto-left">
        <div class="phone-frame">
          <div class="phone-notch"></div>
          <div class="phone-screen">
            <div v-if="activeScreen === 'today'" class="screen">
              <div class="screen-header">
                <span class="screen-title">Today</span>
                <span class="screen-date">{{ todayDate }}</span>
              </div>
              <div class="check-in-card">
                <p class="card-label">How are you doing?</p>
                <div class="mood-row">
                  <button
                    v-for="mood in moods"
                    :key="mood.emoji"
                    class="mood-btn"
                    :class="{ selected: selectedMood === mood.label }"
                    @click="selectMood(mood.label)"
                  >{{ mood.emoji }}</button>
                </div>
                <p v-if="selectedMood" class="mood-response">
                  {{ moodResponses[selectedMood] }}
                </p>
              </div>
              <div class="info-card" @click="setScreen('learn')">
                <p class="card-label">Today's condition note</p>
                <p class="card-body">{{ conditionNote }}</p>
                <span class="card-link">Learn more →</span>
              </div>
              <div class="nav-row">
                <button class="nav-btn active-nav">Today</button>
                <button class="nav-btn" @click="setScreen('flare')">Flare plan</button>
                <button class="nav-btn" @click="setScreen('learn')">Learn</button>
              </div>
            </div>

            <div v-if="activeScreen === 'flare'" class="screen">
              <div class="screen-header">
                <button class="back-btn" @click="setScreen('today')">
                  ← Back
                </button>
                <span class="screen-title">Flare plan</span>
              </div>
              <p class="screen-intro">
                When things get harder, here's what helps.
              </p>
              <div
                v-for="item in flarePlan"
                :key="item.action"
                class="flare-item"
                :class="{ checked: checkedItems.includes(item.action) }"
                @click="toggleCheck(item.action)"
              >
                <div class="flare-check">
                  {{ checkedItems.includes(item.action) ? '✓' : '○' }}
                </div>
                <div class="flare-content">
                  <p class="flare-action">{{ item.action }}</p>
                  <p class="flare-why">{{ item.why }}</p>
                </div>
              </div>
              <div class="nav-row">
                <button class="nav-btn" @click="setScreen('today')">Today</button>
                <button class="nav-btn active-nav">Flare plan</button>
                <button class="nav-btn" @click="setScreen('learn')">Learn</button>
              </div>
            </div>

            <div v-if="activeScreen === 'learn'" class="screen">
              <div class="screen-header">
                <button class="back-btn" @click="setScreen('today')">
                  ← Back
                </button>
                <span class="screen-title">Learn</span>
              </div>
              <p class="screen-intro">
                Understanding what they're living with.
              </p>
              <div
                v-for="card in learnCards"
                :key="card.title"
                class="learn-card"
              >
                <p class="learn-title">{{ card.title }}</p>
                <p class="learn-body">{{ card.body }}</p>
              </div>
              <div class="boundary-card">
                <p class="boundary-label">Your reminder</p>
                <p class="boundary-text">
                  You cannot pour from an empty vessel.
                  Protecting your own health is not selfish.
                  It is how you stay.
                </p>
              </div>
              <div class="nav-row">
                <button class="nav-btn" @click="setScreen('today')">Today</button>
                <button class="nav-btn" @click="setScreen('flare')">Flare plan</button>
                <button class="nav-btn active-nav">Learn</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="proto-right">
        <transition name="fade" mode="out-in">
          <div :key="activeScreen" class="narrative-panel">
            <p class="narrative-eyebrow">
              {{ narrativeContent[activeScreen].eyebrow }}
            </p>
            <h3 class="narrative-headline">
              {{ narrativeContent[activeScreen].headline }}
            </h3>
            <p class="narrative-body">
              {{ narrativeContent[activeScreen].body }}
            </p>
            <div class="narrative-stat">
              <span class="narrative-stat-number">
                {{ narrativeContent[activeScreen].stat }}
              </span>
              <span class="narrative-stat-label">
                {{ narrativeContent[activeScreen].statLabel }}
              </span>
            </div>
            <p class="narrative-insight">
              {{ narrativeContent[activeScreen].insight }}
            </p>
          </div>
        </transition>
      </div>
    </div>

    <p class="proto-disclaimer">
      This is an illustrative prototype only. Not a real application.
      Does not replace medical advice or professional support.
      <a href="#" class="proto-cta">See the full app concept →</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  conditionLabel: string
  conditionAccent: string
}>()

const activeScreen = ref<'today' | 'flare' | 'learn'>('today')
const selectedMood = ref<string>('')
const checkedItems = ref<string[]>([])

const todayDate = new Date().toLocaleDateString('en-US', {
  weekday: 'long', month: 'long', day: 'numeric'
})

const moods = [
  { emoji: '😮‍💨', label: 'depleted' },
  { emoji: '😐', label: 'managing' },
  { emoji: '🙂', label: 'okay' },
  { emoji: '💚', label: 'good' }
]

const moodResponses: Record<string, string> = {
  depleted: "That's valid. You're carrying a lot. Rest is not giving up.",
  managing: "Steady is enough. You don't have to be thriving to be doing well.",
  okay: 'Okay is underrated. Take the okay days.',
  good: 'Hold onto this one. Good days are data too.'
}

const narrativeContent = computed(() => ({
  today: {
    eyebrow: 'The daily check-in',
    headline: 'Start with yourself.',
    body: "Most caregiver tools ask about the patient first. This one asks about you. Because you cannot track someone else's wellbeing if you have no read on your own.",
    stat: '63M',
    statLabel: 'Americans provide unpaid care — most with no support tool of their own',
    insight: 'Inspired by the daily readiness check in Oura and the cycle-aware design of Natural Cycles — applied to the companion experience.'
  },
  flare: {
    eyebrow: 'The flare protocol',
    headline: 'Know what to do before you need to.',
    body: "Flares are unpredictable. The companion's response shouldn't be. This screen gives you a pre-built protocol — not a rigid checklist, but a gentle structure when everything feels urgent.",
    stat: props.conditionLabel === 'Type 1 Diabetes' ? '70%' : '64%',
    statLabel: props.conditionLabel === 'Type 1 Diabetes'
      ? 'of T1D parent caregivers report moderate-to-severe burden'
      : 'of companions report high burden during flare periods',
    insight: 'The design principle: reduce cognitive load at the exact moment when cognitive load is highest.'
  },
  learn: {
    eyebrow: 'The education layer',
    headline: 'Understanding is part of showing up.',
    body: 'Companions who understand the condition show up better — and feel less helpless. This section gives you the language, the context, and the reminder that protecting yourself is part of the job.',
    stat: props.conditionLabel === 'EDS / HSD' ? '88%'
      : props.conditionLabel === 'Lupus (SLE)' ? '45%'
      : props.conditionLabel === "Hashimoto's" ? '5 yrs'
      : '70%',
    statLabel: props.conditionLabel === 'EDS / HSD'
      ? 'of EDS patients were told they were making it up — companions absorb that disbelief too'
      : props.conditionLabel === 'Lupus (SLE)'
      ? 'of lupus patients were told symptoms were psychosomatic before correct diagnosis'
      : props.conditionLabel === "Hashimoto's"
      ? "average years before Hashimoto's is correctly identified — often misread as depression"
      : 'of T1D parent caregivers report moderate-to-severe burden',
    insight: 'The closing reminder — "you cannot pour from an empty vessel" — is the core philosophy of the entire app.'
  }
}))

const conditionNote = computed(() =>
  `Supporting someone with ${props.conditionLabel}? Today is a good day to check in — not about symptoms, but about them as a person.`
)

const flarePlan = [
  {
    action: 'Clear the day gently',
    why: "Flares are unpredictable. Build in flex before it's needed."
  },
  {
    action: 'Ask what they need — don\'t assume',
    why: 'Over-support can feel as isolating as no support.'
  },
  {
    action: 'Handle one background task for them',
    why: 'Small acts of logistics reduce cognitive load significantly.'
  },
  {
    action: 'Check in on yourself',
    why: 'Your nervous system is also activated during a flare.'
  },
  {
    action: 'Know when to refer out',
    why: "Some support needs a professional. That's not failure."
  }
]

const learnCards = computed(() => [
  {
    title: `What is ${props.conditionLabel}?`,
    body: "A chronic condition that affects the body's systems in ways that aren't always visible. Symptoms fluctuate. Bad days don't mean things are getting worse permanently."
  },
  {
    title: 'What a flare looks like',
    body: 'Increased pain, fatigue, cognitive difficulty, and emotional sensitivity. It is not a choice. It is not a mood. It is a physiological event.'
  },
  {
    title: 'What they might not say',
    body: "They may not tell you how bad it is because they don't want to burden you. Your presence matters even when you don't know what to do."
  }
])

const setScreen = (screen: 'today' | 'flare' | 'learn') => {
  activeScreen.value = screen
}

const selectMood = (mood: string) => {
  selectedMood.value = mood
}

const toggleCheck = (action: string) => {
  const index = checkedItems.value.indexOf(action)
  if (index === -1) checkedItems.value.push(action)
  else checkedItems.value.splice(index, 1)
}
</script>

<style scoped>
.proto-section {
  padding: 80px 48px;
  background: #F2EDE6;
}
.proto-intro {
  max-width: 640px;
  margin: 0 auto 64px;
  text-align: center;
}
.proto-eyebrow {
  margin-bottom: 12px;
  color: v-bind('props.conditionAccent');
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.proto-headline {
  margin-bottom: 12px;
  color: #2C2825;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
}
.proto-body {
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
}
.proto-split {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 64px;
  max-width: 960px;
  margin: 0 auto 48px;
  align-items: start;
}
.proto-left {
  display: flex;
  justify-content: center;
}
.phone-frame {
  position: relative;
  width: 300px;
  padding: 12px;
  border-radius: 40px;
  background: #1a1a1a;
  box-shadow: 0 32px 80px rgba(44,40,37,0.25);
}
.phone-notch {
  width: 80px;
  height: 6px;
  margin: 0 auto 8px;
  border-radius: 3px;
  background: #333;
}
.phone-screen {
  position: relative;
  min-height: 580px;
  overflow: hidden;
  border-radius: 30px;
  background: #FAF8F5;
}
.screen {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 580px;
  padding: 20px 16px 72px;
}
.screen-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.screen-title {
  color: #2C2825;
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
}
.screen-date {
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
}
.screen-intro {
  margin: 0;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  line-height: 1.5;
}
.back-btn {
  padding: 0;
  border: none;
  background: none;
  color: v-bind('props.conditionAccent');
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
}
.check-in-card, .info-card {
  padding: 14px;
  border-radius: 12px;
  background: white;
}
.card-label {
  margin-bottom: 10px;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.card-body {
  margin: 0 0 6px;
  color: #2C2825;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  line-height: 1.5;
}
.card-link {
  display: block;
  color: v-bind('props.conditionAccent');
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
}
.mood-row {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
}
.mood-btn {
  width: 42px;
  height: 42px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: #F2EDE6;
  cursor: pointer;
  font-size: 1.25rem;
  transition: all 0.2s ease;
}
.mood-btn.selected {
  border-color: v-bind('props.conditionAccent');
  background: white;
}
.mood-response {
  margin: 0;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-style: italic;
  line-height: 1.4;
  text-align: center;
}
.flare-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.flare-item.checked { opacity: 0.5; }
.flare-check {
  width: 16px;
  flex-shrink: 0;
  padding-top: 1px;
  color: v-bind('props.conditionAccent');
  font-size: 0.875rem;
}
.flare-action {
  margin: 0 0 2px;
  color: #2C2825;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
}
.flare-why {
  margin: 0;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  line-height: 1.4;
}
.learn-card {
  padding: 12px;
  border-radius: 10px;
  background: white;
}
.learn-title {
  margin-bottom: 4px;
  color: #2C2825;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
}
.learn-body {
  margin: 0;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  line-height: 1.5;
}
.boundary-card {
  padding: 14px;
  border-radius: 10px;
  background: v-bind('props.conditionAccent');
}
.boundary-label {
  margin-bottom: 4px;
  color: rgba(255,255,255,0.7);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.boundary-text {
  margin: 0;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-style: italic;
  line-height: 1.5;
}
.nav-row {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 4px;
  padding: 8px;
  border-top: 1px solid #E0D8CF;
  background: white;
}
.nav-btn {
  flex: 1;
  padding: 8px 4px;
  border: none;
  border-radius: 6px;
  background: none;
  color: #6B5F58;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  transition: all 0.2s ease;
}
.nav-btn.active-nav {
  background: #F2EDE6;
  color: v-bind('props.conditionAccent');
  font-weight: 600;
}
.proto-right {
  padding-top: 40px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.narrative-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.narrative-eyebrow {
  color: v-bind('props.conditionAccent');
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.narrative-headline {
  margin: 0;
  color: #2C2825;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  line-height: 1.25;
}
.narrative-body {
  margin: 0;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
}
.narrative-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;
  border-left: 3px solid v-bind('props.conditionAccent');
  border-radius: 12px;
  background: white;
}
.narrative-stat-number {
  color: #2C2825;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  line-height: 1;
}
.narrative-stat-label {
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  line-height: 1.5;
}
.narrative-insight {
  margin: 0;
  padding-top: 8px;
  border-top: 1px solid #E0D8CF;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.6;
}
.proto-disclaimer {
  max-width: 640px;
  margin: 0 auto;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  line-height: 1.6;
  text-align: center;
}
.proto-cta {
  display: inline-block;
  margin-left: 12px;
  color: v-bind('props.conditionAccent');
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 760px) {
  .proto-section { padding: 64px 24px; }
  .proto-split {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .proto-right {
    padding-top: 0;
  }
}
</style>

<template>
  <div class="proto-section">
    <div class="proto-inner">
      <div class="proto-intro">
        <p class="proto-eyebrow">What it could look like</p>
        <h2 class="proto-headline">A tool built for the support side.</h2>
        <p class="proto-body">
          This is not a real app. It's a provocation — a sketch of what
          a companion-first tool could feel like. Tap through the screens.
        </p>
      </div>

      <div class="phone-frame">
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
                  @click="selectedMood = mood.label"
                >
                  {{ mood.emoji }}
                </button>
              </div>
              <p v-if="selectedMood" class="mood-response">
                {{ moodResponses[selectedMood] }}
              </p>
            </div>
            <div class="info-card" @click="activeScreen = 'learn'">
              <p class="card-label">Today's condition note</p>
              <p class="card-body">{{ conditionNote }}</p>
              <span class="card-link">Learn more →</span>
            </div>
            <div class="nav-row">
              <button class="nav-btn active-nav">Today</button>
              <button class="nav-btn" @click="activeScreen = 'flare'">
                Flare plan
              </button>
              <button class="nav-btn" @click="activeScreen = 'learn'">
                Learn
              </button>
            </div>
          </div>

          <div v-if="activeScreen === 'flare'" class="screen">
            <div class="screen-header">
              <button class="back-btn" @click="activeScreen = 'today'">
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
              <button class="nav-btn" @click="activeScreen = 'today'">
                Today
              </button>
              <button class="nav-btn active-nav">Flare plan</button>
              <button class="nav-btn" @click="activeScreen = 'learn'">
                Learn
              </button>
            </div>
          </div>

          <div v-if="activeScreen === 'learn'" class="screen">
            <div class="screen-header">
              <button class="back-btn" @click="activeScreen = 'today'">
                ← Back
              </button>
              <span class="screen-title">Learn</span>
            </div>
            <p class="screen-intro">
              Understanding what they're living with — so you can
              show up better.
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
              <button class="nav-btn" @click="activeScreen = 'today'">
                Today
              </button>
              <button class="nav-btn" @click="activeScreen = 'flare'">
                Flare plan
              </button>
              <button class="nav-btn active-nav">Learn</button>
            </div>
          </div>
        </div>
      </div>

      <p class="proto-disclaimer">
        This is an illustrative prototype only. Not a real application.
        Does not replace medical advice or professional support.
      </p>
    </div>
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
  okay: "Okay is underrated. Take the okay days.",
  good: "Hold onto this one. Good days are data too."
}

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
    body: "They may not tell you how bad it is because they don't want to burden you. Your presence matters even when — especially when — you don't know what to do."
  }
])

const toggleCheck = (action: string) => {
  const index = checkedItems.value.indexOf(action)
  if (index === -1) checkedItems.value.push(action)
  else checkedItems.value.splice(index, 1)
}
</script>

<style scoped>
.proto-section {
  padding: 80px 24px;
  background: #F2EDE6;
}
.proto-inner {
  max-width: 760px;
  margin: 0 auto;
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
  margin-bottom: 48px;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
}
.phone-frame {
  width: 320px;
  margin: 0 auto 32px;
  padding: 16px;
  border-radius: 36px;
  background: #2C2825;
  box-shadow: 0 24px 64px rgba(44,40,37,0.2);
}
.phone-screen {
  position: relative;
  min-height: 560px;
  overflow: hidden;
  border-radius: 24px;
  background: #FAF8F5;
}
.screen {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 20px 80px;
}
.screen-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.screen-title {
  color: #2C2825;
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
}
.screen-date {
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
}
.screen-intro {
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  line-height: 1.6;
}
.back-btn {
  padding: 0;
  border: none;
  background: none;
  color: v-bind('props.conditionAccent');
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
}
.check-in-card, .info-card {
  padding: 16px;
  border-radius: 12px;
  background: white;
  text-align: left;
}
.card-label {
  margin-bottom: 12px;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.card-body {
  color: #2C2825;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
}
.card-link {
  display: block;
  margin-top: 8px;
  color: v-bind('props.conditionAccent');
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
}
.mood-row {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
}
.mood-btn {
  width: 48px;
  height: 48px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: #F2EDE6;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.2s ease;
}
.mood-btn.selected {
  border-color: v-bind('props.conditionAccent');
  background: white;
}
.mood-response {
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-style: italic;
  line-height: 1.5;
  text-align: center;
}
.flare-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
}
.flare-item.checked { opacity: 0.6; }
.flare-check {
  width: 20px;
  flex-shrink: 0;
  color: v-bind('props.conditionAccent');
  font-size: 1rem;
}
.flare-action {
  margin: 0 0 2px;
  color: #2C2825;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
}
.flare-why {
  margin: 0;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  line-height: 1.4;
}
.learn-card {
  padding: 16px;
  border-radius: 10px;
  background: white;
  text-align: left;
}
.learn-title {
  margin-bottom: 6px;
  color: #2C2825;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
}
.learn-body {
  margin: 0;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  line-height: 1.5;
}
.boundary-card {
  padding: 16px;
  border-radius: 10px;
  background: v-bind('props.conditionAccent');
  text-align: left;
}
.boundary-label {
  margin-bottom: 6px;
  color: rgba(255,255,255,0.7);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.boundary-text {
  margin: 0;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
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
  font-size: 0.7rem;
  font-weight: 500;
  transition: all 0.2s ease;
}
.nav-btn.active-nav {
  background: #F2EDE6;
  color: v-bind('props.conditionAccent');
  font-weight: 600;
}
.proto-disclaimer {
  margin-top: 24px;
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  line-height: 1.6;
}
</style>

<template>
  <div class="day-section">
    <div class="day-content">
      <h2>A day on the support side.</h2>
      <p class="day-subtext">The same day. Two perspectives. Toggle between them.</p>

      <div class="view-toggle" role="group" aria-label="Choose a perspective">
        <button
          type="button"
          class="toggle-button patient-toggle"
          :class="{ active: activeView === 'patient' }"
          @click="activeView = 'patient'"
        >
          Their experience
        </button>
        <button
          type="button"
          class="toggle-button companion-toggle"
          :class="{ active: activeView === 'companion' }"
          @click="activeView = 'companion'"
        >
          Your experience
        </button>
      </div>

      <div class="timeline">
        <div v-for="event in dayEvents" :key="event.time" class="timeline-event">
          <div class="time-label">{{ event.time }}</div>
          <div class="timeline-connector">
            <span class="timeline-dot" :class="`severity-${event.severity}`"></span>
          </div>
          <Transition name="experience-fade" mode="out-in">
            <p :key="`${event.time}-${activeView}`" class="experience-text">
              {{ activeView === 'patient' ? event.patientExperience : event.companionExperience }}
            </p>
          </Transition>
        </div>
      </div>

      <p class="closing-line">
        Both of these days are real. Only one of them has tools built for it.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { dayEvents } from '../data/dayInLife'
import type { DayEvent } from '../types'

const activeView = ref<'patient' | 'companion'>('companion')

void (dayEvents satisfies DayEvent[])
</script>

<style scoped>
.day-section {
  padding: 80px 24px;
  background: #f2ede6;
}

.day-content {
  max-width: 760px;
  margin: 0 auto;
}

h2 {
  margin: 0 0 8px;
  color: #2c2825;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.15;
}

.day-subtext {
  margin: 0 0 32px;
  color: #6b5f58;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
}

.view-toggle {
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
}

.toggle-button {
  padding: 10px 24px;
  border: 1px solid #e0d8cf;
  background: #faf8f5;
  color: #6b5f58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
}

.toggle-button.active {
  border-color: #2c2825;
  background: #2c2825;
  color: #faf8f5;
}

.patient-toggle {
  border-radius: 20px 0 0 20px;
}

.companion-toggle {
  border-radius: 0 20px 20px 0;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.timeline-event {
  display: flex;
  gap: 24px;
  min-height: 64px;
}

.time-label {
  flex: 0 0 72px;
  padding-top: 4px;
  color: #6b5f58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
}

.timeline-connector {
  position: relative;
  display: flex;
  flex: 0 0 2px;
  justify-content: center;
  align-items: flex-start;
  background: #e0d8cf;
}

.timeline-dot {
  position: absolute;
  top: 4px;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translateX(-50%);
}

.severity-low {
  background: #7a9e8e;
}

.severity-medium {
  background: #c9a96e;
}

.severity-high {
  background: #c97a7a;
}

.experience-text {
  flex: 1;
  margin: 0;
  color: #2c2825;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
}

.closing-line {
  max-width: 560px;
  margin: 48px auto 0;
  color: #6b5f58;
  font-family: 'Playfair Display', serif;
  font-size: 1.125rem;
  font-style: italic;
  text-align: center;
}

.experience-fade-enter-active,
.experience-fade-leave-active {
  transition: opacity 0.3s ease;
}

.experience-fade-enter-from,
.experience-fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .day-section {
    padding: 64px 24px;
  }

  .timeline-event {
    gap: 16px;
  }
}
</style>

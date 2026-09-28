<template>
  <div class="day-section">
    <div class="section-inner">
      <h2 class="day-headline">A day on the support side.</h2>
      <p class="day-subtext">
        The same day. Two people living it completely differently.
      </p>

      <div class="split-header">
        <div class="split-col-label patient-label">Their day</div>
        <div class="split-divider-label">time</div>
        <div class="split-col-label companion-label">Your day</div>
      </div>

      <div class="timeline">
        <div
          v-for="event in dayEvents"
          :key="event.time"
          class="timeline-row"
        >
          <div class="timeline-patient">
            <p class="event-text" :class="event.severity">
              {{ event.patientExperience }}
            </p>
          </div>
          <div class="timeline-center">
            <span class="time-label">{{ event.time }}</span>
            <div class="center-line"></div>
            <div class="severity-dot" :class="event.severity"></div>
          </div>
          <div class="timeline-companion">
            <p class="event-text companion" :class="event.severity">
              {{ event.companionExperience }}
            </p>
          </div>
        </div>
      </div>

      <p class="closing-line">
        Both of these days are real. Only one of them has tools built for it.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dayEvents } from '../data/dayInLife'
</script>

<style scoped>
.day-section { background: #F2EDE6; padding: 80px 24px; }
.section-inner { max-width: 960px; margin: 0 auto; }
.day-headline { font-family: 'Playfair Display', serif; font-size: 2rem;
  color: #2C2825; margin-bottom: 8px; }
.day-subtext { font-family: 'DM Sans', sans-serif; font-size: 1rem;
  color: #6B5F58; margin-bottom: 40px; }

.split-header { display: grid; grid-template-columns: 1fr 80px 1fr;
  gap: 16px; margin-bottom: 8px; }
.split-col-label { font-family: 'DM Sans', sans-serif; font-size: 0.75rem;
  font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
  color: #6B5F58; }
.patient-label { text-align: right; }
.companion-label { text-align: left; }
.split-divider-label { font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem; color: #E0D8CF; text-align: center;
  text-transform: uppercase; letter-spacing: 0.08em; }

.timeline { display: flex; flex-direction: column; gap: 0; }
.timeline-row { display: grid; grid-template-columns: 1fr 80px 1fr;
  gap: 16px; align-items: start; padding: 20px 0;
  border-bottom: 1px solid #E0D8CF; }
.timeline-row:last-child { border-bottom: none; }

.timeline-patient { text-align: right; }
.timeline-companion { text-align: left; }

.timeline-center { display: flex; flex-direction: column;
  align-items: center; gap: 6px; padding-top: 4px; }
.time-label { font-family: 'DM Sans', sans-serif; font-size: 0.75rem;
  color: #6B5F58; white-space: nowrap; }
.center-line { width: 1px; background: #E0D8CF; flex: 1; min-height: 8px; }
.severity-dot { width: 10px; height: 10px; border-radius: 50%; }

.severity-dot.low { background: #7A9E8E; }
.severity-dot.medium { background: #C9A96E; }
.severity-dot.high { background: #C97A7A; }

.event-text { font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
  line-height: 1.6; color: #2C2825; margin: 0; }
.event-text.high { color: #2C2825; font-weight: 500; }
.event-text.companion { color: #2C2825; }

.closing-line { font-family: 'Playfair Display', serif; font-style: italic;
  font-size: 1.125rem; color: #6B5F58; text-align: center;
  margin-top: 48px; max-width: 560px; margin-left: auto;
  margin-right: auto; }
</style>

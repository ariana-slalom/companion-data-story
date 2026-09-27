<template>
  <section class="section" id="day-in-the-life">
    <RevealSection>
      <p class="eyebrow mb-3">The Pivot — Who Else Is in the Room?</p>
      <h2 class="font-heading text-h3 mb-4">Same day. Two realities.</h2>
      <p class="text-body-1 dil-lede mb-8">
        Every symptom has a parallel experience happening a few feet away.
        Toggle between the patient’s day and the companion’s day, moment by moment.
      </p>
    </RevealSection>

    <RevealSection>
      <div class="toggle-wrap mb-8">
        <v-btn-toggle v-model="view" color="primary" mandatory density="comfortable" rounded="pill">
          <v-btn value="patient" class="px-6">
            <v-icon start icon="mdi-account-outline" />
            Patient view
          </v-btn>
          <v-btn value="companion" class="px-6">
            <v-icon start icon="mdi-account-heart-outline" />
            Companion view
          </v-btn>
        </v-btn-toggle>
      </div>
    </RevealSection>

    <div class="moments">
      <RevealSection v-for="moment in dayInLife" :key="moment.time" class="moment-row">
        <div class="moment-time">{{ moment.time }}</div>
        <v-card
          class="moment-card pa-5"
          :class="`load-${moment.intensity}`"
          elevation="1"
        >
          <transition name="fade" mode="out-in">
            <p :key="view" class="text-body-2 mb-0">
              {{ view === 'patient' ? moment.patient : moment.companion }}
            </p>
          </transition>
        </v-card>
      </RevealSection>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RevealSection from '../RevealSection.vue'
import { dayInLife } from '../../data/dayInLife'

const view = ref<'patient' | 'companion'>('patient')
</script>

<style scoped>
.dil-lede {
  max-width: 640px;
  opacity: 0.85;
}

.toggle-wrap {
  display: flex;
}

.moments {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.moment-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 1rem;
  align-items: start;
}

@media (max-width: 500px) {
  .moment-row {
    grid-template-columns: 1fr;
  }
}

.moment-time {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-clay);
  padding-top: 0.9rem;
}

.moment-card {
  border-left: 4px solid var(--color-sage);
  background: var(--color-cream);
}

.moment-card.load-4,
.moment-card.load-5 {
  border-left-color: var(--color-terracotta);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

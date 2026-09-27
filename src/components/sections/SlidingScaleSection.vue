<template>
  <section class="section" id="sliding-scale">
    <RevealSection>
      <p class="eyebrow mb-3">The Sliding Scale</p>
      <h2 class="font-heading text-h3 mb-4">It’s never just “sick” or “fine.”</h2>
      <p class="text-body-1 scale-lede mb-10">
        Severity shifts by day, by year, by flare. Support has to recalibrate constantly —
        drag the slider to feel the difference.
      </p>
    </RevealSection>

    <RevealSection>
      <v-card class="pa-6 pa-md-8 scale-card" elevation="2">
        <v-slider
          v-model="scale"
          :min="0"
          :max="4"
          :step="1"
          :ticks="tickLabels"
          show-ticks="always"
          tick-size="4"
          color="primary"
          track-color="secondary"
          class="mb-6"
        />
        <div class="scale-display" :style="{ '--load': scale }">
          <h3 class="font-heading text-h5 mb-2">{{ current.title }}</h3>
          <p class="text-body-1 mb-4">{{ current.patient }}</p>
          <div class="companion-callout">
            <v-icon icon="mdi-account-heart-outline" size="18" class="mr-1" />
            {{ current.companion }}
          </div>
        </div>
      </v-card>
    </RevealSection>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import RevealSection from '../RevealSection.vue'

const scale = ref(1)

const levels = [
  {
    title: 'A good day',
    patient: 'Symptoms are quiet enough to almost forget. Energy for real plans, real conversations.',
    companion: 'Gets to just be a partner, sibling, or friend today — not a caregiver on standby.',
  },
  {
    title: 'A manageable day',
    patient: 'Present, but low. Plans happen, with modifications nobody outside the house notices.',
    companion: 'Watches for signs the day could tip, while trying not to hover.',
  },
  {
    title: 'A cautious day',
    patient: 'Something feels off. Energy is being rationed hour by hour.',
    companion: 'Starts quietly clearing the calendar, just in case.',
  },
  {
    title: 'A flare day',
    patient: 'Pain or fatigue takes over. Basic tasks require negotiation with the body.',
    companion: 'Steps fully into support mode — errands, decisions, translating for others.',
  },
  {
    title: 'A crisis day',
    patient: 'Symptoms are severe enough to require urgent care or a hard stop on everything.',
    companion: 'Becomes the calm, coordinating presence — calls made, care sought, everything else paused.',
  },
]

const tickLabels = { 0: 'Good', 1: 'Manageable', 2: 'Cautious', 3: 'Flare', 4: 'Crisis' }

const current = computed(() => levels[scale.value])
</script>

<style scoped>
.scale-lede {
  max-width: 640px;
  opacity: 0.85;
}

.scale-card {
  background: var(--color-cream);
}

.scale-display {
  border-radius: 14px;
  padding: 1.5rem;
  background: color-mix(in srgb, var(--color-terracotta) calc(10% + var(--load) * 8%), var(--color-cream));
  transition: background 0.4s ease;
}

.companion-callout {
  display: flex;
  align-items: center;
  background: white;
  padding: 0.6rem 0.9rem;
  border-radius: 10px;
  font-size: 0.9rem;
  color: var(--color-clay);
  width: fit-content;
}
</style>

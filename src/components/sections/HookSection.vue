<template>
  <section class="section hook-section" id="hook">
    <RevealSection>
      <p class="eyebrow mb-3">The Support Side</p>
      <h1 class="font-heading text-h2 mb-6">The numbers don’t lie.</h1>
      <p class="text-body-1 hook-lede mb-10">
        Nearly every person living with a chronic illness has a companion beside them —
        absorbing what the diagnosis doesn’t say out loud.
      </p>
    </RevealSection>

    <RevealSection>
      <div class="stat-grid mb-12">
        <div v-for="stat in hookStats" :key="stat.label" class="stat-card">
          <p class="font-heading stat-value">{{ stat.value }}</p>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </RevealSection>

    <RevealSection>
      <v-card class="pa-6 pa-md-8 condition-card" elevation="2">
        <p class="eyebrow mb-2">Look closer</p>
        <h3 class="font-heading text-h5 mb-4">See how the wait changes by condition.</h3>
        <ConditionFilter v-model="selected" />
        <v-row class="mt-6" dense>
          <v-col cols="6" sm="3">
            <p class="mini-stat-value">{{ condition.avgDiagnosisYears }} yrs</p>
            <p class="mini-stat-label">avg. time to diagnosis</p>
          </v-col>
          <v-col cols="6" sm="3">
            <p class="mini-stat-value">{{ condition.avgDoctorsSeen }}+</p>
            <p class="mini-stat-label">doctors seen</p>
          </v-col>
          <v-col cols="6" sm="3">
            <p class="mini-stat-value">{{ condition.percentToldPsychosomatic }}%</p>
            <p class="mini-stat-label">told it was psychosomatic</p>
          </v-col>
          <v-col cols="6" sm="3">
            <p class="mini-stat-value">{{ condition.percentFemale }}%</p>
            <p class="mini-stat-label">of patients are women</p>
          </v-col>
        </v-row>
        <p class="text-body-2 mt-6 condition-tagline">{{ condition.tagline }}</p>
      </v-card>
    </RevealSection>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import RevealSection from '../RevealSection.vue'
import ConditionFilter from '../ConditionFilter.vue'
import { hookStats } from '../../data/hookStats'
import { getCondition, defaultConditionId } from '../../data/conditions'

const selected = defineModel<string>({ default: defaultConditionId })
const condition = computed(() => getCondition(selected.value))
</script>

<style scoped>
.hook-section {
  position: relative;
}

.hook-lede {
  max-width: 640px;
  opacity: 0.85;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: var(--color-blush);
  border-radius: 16px;
  padding: 1.5rem;
}

.stat-value {
  font-size: 2rem;
  color: var(--color-clay);
  margin-bottom: 0.4rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.85;
}

.condition-card {
  background: var(--color-cream);
}

.mini-stat-value {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--color-clay);
  margin-bottom: 0.2rem;
}

.mini-stat-label {
  font-size: 0.8rem;
  opacity: 0.75;
}

.condition-tagline {
  font-style: italic;
  opacity: 0.8;
}
</style>

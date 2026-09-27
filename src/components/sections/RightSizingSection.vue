<template>
  <section class="section" id="right-sizing">
    <RevealSection>
      <p class="eyebrow mb-3">Right-Sizing Support</p>
      <h2 class="font-heading text-h3 mb-4">Both people are guessing.</h2>
      <p class="text-body-1 lede mb-10">
        Companions oscillate between denial, over-support, and uncertainty. Patients
        oscillate too — between not wanting to burden and needing different things at
        different moments. Neither is doing it wrong.
      </p>
    </RevealSection>

    <div class="oscillation-list mb-12">
      <RevealSection v-for="pair in oscillations" :key="pair.companionState" class="oscillation-row">
        <v-card class="pa-5 side companion-side" elevation="1">
          <p class="eyebrow mb-1">Companion</p>
          <h4 class="font-heading text-h6 mb-1">{{ pair.companionState }}</h4>
          <p class="text-body-2">{{ pair.companionDetail }}</p>
        </v-card>
        <div class="connector">
          <v-icon icon="mdi-swap-horizontal" color="primary" />
        </div>
        <v-card class="pa-5 side patient-side" elevation="1">
          <p class="eyebrow mb-1">Patient</p>
          <h4 class="font-heading text-h6 mb-1">{{ pair.patientState }}</h4>
          <p class="text-body-2">{{ pair.patientDetail }}</p>
        </v-card>
      </RevealSection>
    </div>

    <RevealSection>
      <h3 class="font-heading text-h5 mb-4">Finding the right size</h3>
      <v-row>
        <v-col v-for="tip in rightSizingTips" :key="tip.title" cols="12" sm="6">
          <v-card class="pa-5 tip-card" elevation="1">
            <v-icon icon="mdi-compass-outline" color="secondary" class="mb-2" />
            <h4 class="font-heading text-subtitle-1 mb-1">{{ tip.title }}</h4>
            <p class="text-body-2">{{ tip.detail }}</p>
          </v-card>
        </v-col>
      </v-row>
    </RevealSection>
  </section>
</template>

<script setup lang="ts">
import RevealSection from '../RevealSection.vue'
import { oscillations, rightSizingTips } from '../../data/rightSizing'
</script>

<style scoped>
.lede {
  max-width: 640px;
  opacity: 0.85;
}

.oscillation-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.25rem;
}

@media (max-width: 600px) {
  .oscillation-row {
    grid-template-columns: 1fr;
  }
  .connector {
    justify-self: center;
    transform: rotate(90deg);
  }
}

.side {
  background: var(--color-cream);
}

.companion-side {
  border-left: 4px solid var(--color-clay);
}

.patient-side {
  border-left: 4px solid var(--color-sage);
}

.connector {
  display: flex;
  justify-content: center;
}

.tip-card {
  background: var(--color-blush);
  height: 100%;
}
</style>

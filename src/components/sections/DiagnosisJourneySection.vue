<template>
  <section class="section" id="diagnosis-journey">
    <RevealSection>
      <p class="eyebrow mb-3">The Diagnosis Journey</p>
      <h2 class="font-heading text-h3 mb-4">Named. Not fixed.</h2>
      <p class="text-body-1 journey-lede mb-10">
        A diagnosis often doesn’t mean the search is over — it means the real work of
        managing a lifelong condition can finally begin.
      </p>
    </RevealSection>

    <div class="timeline">
      <RevealSection v-for="(step, i) in journeySteps" :key="step.title" class="timeline-item">
        <div class="timeline-marker">
          <span>{{ i + 1 }}</span>
        </div>
        <div class="timeline-content">
          <h3 class="font-heading text-h6 mb-2">{{ step.title }}</h3>
          <p class="text-body-2 mb-3">{{ step.description }}</p>
          <div class="companion-note">
            <v-icon icon="mdi-account-heart-outline" size="18" class="mr-1" />
            {{ step.companionRole }}
          </div>
        </div>
      </RevealSection>
    </div>
  </section>
</template>

<script setup lang="ts">
import RevealSection from '../RevealSection.vue'
import { journeySteps } from '../../data/diagnosisJourney'
</script>

<style scoped>
.journey-lede {
  max-width: 640px;
  opacity: 0.85;
}

.timeline {
  position: relative;
  padding-left: 1rem;
  border-left: 2px solid var(--color-blush);
}

.timeline-item {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  position: relative;
}

.timeline-marker {
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: var(--color-clay);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  margin-left: -2.4rem;
  box-shadow: 0 0 0 6px var(--color-cream);
}

.companion-note {
  display: flex;
  align-items: center;
  background: var(--color-blush);
  padding: 0.6rem 0.9rem;
  border-radius: 10px;
  font-size: 0.85rem;
  color: var(--color-clay);
  width: fit-content;
}
</style>

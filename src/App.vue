<template>
  <PasswordGate>
    <v-app>
      <HookSection v-model="selectedCondition" />
      <DiagnosisJourneySection />
      <SlidingScaleSection />
      <DayInLifeSection />
      <InvisibleDataSection />
      <RightSizingSection />
      <PrototypeSection />
      <DisclaimerFooter />
    </v-app>
  </PasswordGate>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PasswordGate from './components/PasswordGate.vue'
import HookSection from './components/sections/HookSection.vue'
import DiagnosisJourneySection from './components/sections/DiagnosisJourneySection.vue'
import SlidingScaleSection from './components/sections/SlidingScaleSection.vue'
import DayInLifeSection from './components/sections/DayInLifeSection.vue'
import InvisibleDataSection from './components/sections/InvisibleDataSection.vue'
import RightSizingSection from './components/sections/RightSizingSection.vue'
import PrototypeSection from './components/sections/PrototypeSection.vue'
import DisclaimerFooter from './components/sections/DisclaimerFooter.vue'
import { defaultConditionId } from './data/conditions'

const selectedCondition = ref(defaultConditionId)
</script>

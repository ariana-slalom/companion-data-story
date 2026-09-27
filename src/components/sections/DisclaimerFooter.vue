<template>
  <footer class="footer-section">
    <RevealSection>
      <v-card class="pa-6 pa-md-8 disclaimer-card" elevation="0">
        <h3 class="font-heading text-h6 mb-2">A note before you go</h3>
        <p class="text-body-2 mb-4">
          This project is designed as an educational and support resource. It does not
          replace clinical medical advice, professional diagnosis, or treatment direction.
          If you or someone you support is experiencing a health concern, please consult a
          qualified healthcare provider.
        </p>
        <h4 class="font-heading text-subtitle-1 mb-2">Data sources</h4>
        <ul class="source-list">
          <li>American Autoimmune Related Diseases Association (AARDA)</li>
          <li>Lupus Foundation of America</li>
          <li>Arthritis Foundation</li>
          <li>The Ehlers-Danlos Society</li>
          <li>JDRF / peer-reviewed T1D caregiver literature (Heliyon 2024, PMC 2024)</li>
          <li>AARP & National Alliance for Caregiving, Caregiving in the US (2025)</li>
        </ul>
        <p class="text-caption source-note">
          All data is statistically plausible and inspired by published research. Exact
          figures are representative approximations where noted.
        </p>
      </v-card>
    </RevealSection>
  </footer>
</template>

<script setup lang="ts">
import RevealSection from '../RevealSection.vue'
</script>

<style scoped>
.footer-section {
  padding: 2rem 1.5rem 5rem;
  max-width: 1080px;
  margin: 0 auto;
}

.disclaimer-card {
  background: var(--color-blush);
}

.source-list {
  margin: 0 0 1rem;
  padding-left: 1.2rem;
  font-size: 0.85rem;
  opacity: 0.85;
}

.source-list li {
  margin-bottom: 0.3rem;
}

.source-note {
  opacity: 0.6;
}
</style>

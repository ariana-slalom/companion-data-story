<template>
  <section class="section" id="invisible-data">
    <RevealSection>
      <p class="eyebrow mb-3">The Invisible Data</p>
      <h2 class="font-heading text-h3 mb-4">The research exists. The tools don’t.</h2>
      <p class="text-body-1 lede mb-10">
        Caregiver fatigue, isolation, grief, relationship strain, career disruption — it’s
        documented. What’s missing is anything built to help carry it.
      </p>
    </RevealSection>

    <RevealSection>
      <div class="stat-grid mb-12">
        <v-card v-for="stat in invisibleStats" :key="stat.label" class="pa-5 stat-card" elevation="1">
          <p class="font-heading stat-value">{{ stat.value }}</p>
          <p class="text-body-2 mb-2">{{ stat.label }}</p>
          <p class="stat-source">{{ stat.source }}</p>
        </v-card>
      </div>
    </RevealSection>

    <RevealSection>
      <v-row>
        <v-col cols="12" md="7">
          <v-card class="pa-5 chart-card" elevation="1">
            <h3 class="font-heading text-h6 mb-3">Where the research goes</h3>
            <Bar :data="researchData" :options="barOptions" />
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <v-card class="pa-5 chart-card" elevation="1">
            <h3 class="font-heading text-h6 mb-3">What companions carry</h3>
            <Doughnut :data="strainData" :options="doughnutOptions" />
          </v-card>
        </v-col>
      </v-row>
      <p class="text-caption disbelief-note mt-4">
        What people share about this experience is also shaped by stigma — invisible illness
        is often disbelieved, and companions can internalize that disbelief too.
      </p>
    </RevealSection>
  </section>
</template>

<script setup lang="ts">
import { Bar, Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'
import RevealSection from '../RevealSection.vue'
import { invisibleStats, researchVolumeChart, strainTypesChart } from '../../data/invisibleData'

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const clay = '#8C5B4A'
const terracotta = '#C97C6D'
const sage = '#7C8B6F'
const blush = '#F3E3DC'

const researchData = {
  labels: researchVolumeChart.labels,
  datasets: [
    {
      label: 'Relative research volume',
      data: researchVolumeChart.data,
      backgroundColor: [clay, clay, terracotta, terracotta],
      borderRadius: 8,
    },
  ],
}

const barOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    y: { beginAtZero: true, grid: { color: '#f0e6de' } },
    x: { grid: { display: false } },
  },
}

const strainData = {
  labels: strainTypesChart.labels,
  datasets: [
    {
      data: strainTypesChart.data,
      backgroundColor: [clay, terracotta, sage, '#D3A24C', blush],
    },
  ],
}

const doughnutOptions = {
  responsive: true,
  plugins: { legend: { position: 'bottom' as const, labels: { boxWidth: 12, font: { size: 11 } } } },
}
</script>

<style scoped>
.lede {
  max-width: 640px;
  opacity: 0.85;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.stat-card {
  background: var(--color-blush);
}

.stat-value {
  font-size: 1.9rem;
  color: var(--color-clay);
  margin-bottom: 0.3rem;
}

.stat-source {
  font-size: 0.7rem;
  opacity: 0.6;
}

.chart-card {
  background: var(--color-cream);
  height: 100%;
}

.disbelief-note {
  opacity: 0.7;
  max-width: 720px;
}
</style>

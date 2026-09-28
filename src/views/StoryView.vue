<template>
  <div class="story-root">

    <!-- ACT 1: HOOK -->
    <section class="act act-hook">
      <div class="act-inner">
        <p class="eyebrow">The Support Side</p>
        <h1 class="hook-headline">
          Nearly 80% of autoimmune disease<br>patients are women.
        </h1>
        <p class="hook-sub">
          The average time to a correct diagnosis is 4.6 years.
          Four or more doctors. Nearly half were told their symptoms
          were psychosomatic before anyone ran the right test.
          <br><br>
          This is not just their story.
          <br>
          It's the story of everyone beside them.
        </p>
        <p class="source-line">
          Source: American Autoimmune Related Diseases Association (AARDA)
        </p>
      </div>
    </section>

    <!-- CONDITION FILTER — sticky -->
    <div class="condition-bar">
      <button
        v-for="condition in conditions"
        :key="condition.id"
        class="condition-pill"
        :class="{ active: selectedCondition.id === condition.id }"
        :style="selectedCondition.id === condition.id ? {
          background: activeTheme.accent,
          borderColor: activeTheme.accent,
          color: '#FAF8F5'
        } : {}"
        @click="selectedCondition = condition"
      >
        {{ condition.label }}
      </button>
    </div>

    <!-- ACT 2: THE JOURNEY — split screen placeholder -->
    <section class="act act-journey">
      <div class="journey-placeholder">
        <p style="font-family:'DM Sans',sans-serif; color:#6B5F58;
          text-align:center; padding:80px 24px;">
          Journey section coming in next prompt.
        </p>
      </div>
    </section>

    <!-- ACT 3: THE GAP — placeholder -->
    <section class="act act-gap">
      <div class="gap-placeholder">
        <p style="font-family:'DM Sans',sans-serif; color:#6B5F58;
          text-align:center; padding:80px 24px;">
          Gap + prototype coming in next prompt.
        </p>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="story-footer">
      <p>Copyright 2026 Ariana de Ryss · Protogen 302 ·
        Made with Copilots, a Garden Seed Stash, and far too much tea ☕</p>
      <p class="footer-disclaimer">
        This project is an educational resource. It does not replace clinical
        medical advice, professional diagnosis, or treatment direction.
      </p>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js'
import { conditions } from '../data/conditions'
import { globalStats } from '../data/globalStats'
import type { Condition } from '../types'
import DayInLife from '../components/DayInLife.vue'

ChartJS.register(ArcElement, Tooltip)

const conditionThemes: Record<string, {
  accent: string
  deep: string
  surface: string
  label: string
}> = {
  eds: {
    accent: '#C97A7A',
    deep: '#A67C6B',
    surface: '#F5EDE8',
    label: 'EDS / HSD'
  },
  lupus: {
    accent: '#A85C6E',
    deep: '#8C5A52',
    surface: '#F2E8E6',
    label: 'Lupus (SLE)'
  },
  hashimotos: {
    accent: '#C9A96E',
    deep: '#A68B52',
    surface: '#F5F0E8',
    label: "Hashimoto's"
  },
  t1d: {
    accent: '#7A9E8E',
    deep: '#5C8278',
    surface: '#EAF0EE',
    label: 'Type 1 Diabetes'
  }
}

const selectedCondition = ref<Condition>(conditions[0])
const activeTheme = computed(() => conditionThemes[selectedCondition.value.id])

watch(activeTheme, (theme) => {
  document.documentElement.style.setProperty('--condition-accent', theme.accent)
  document.documentElement.style.setProperty('--condition-deep', theme.deep)
  document.documentElement.style.setProperty('--condition-surface', theme.surface)
}, { immediate: true })

const visibleSections = ref<Set<string>>(new Set())
const displayPercent = ref(0)

const genderChartData = computed(() => ({
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ['#C97A7A', '#E0D8CF'],
      borderWidth: 0,
      borderRadius: 4,
    },
  ],
}))

const genderChartOptions = {
  cutout: '72%',
  plugins: { tooltip: { enabled: false } },
  animation: { animateRotate: true, duration: 1200 },
}

function animatePercent() {
  const startTime = performance.now()

  function frame(currentTime: number) {
    const progress = Math.min((currentTime - startTime) / 1200, 1)
    const easedProgress = 1 - Math.pow(1 - progress, 4)
    displayPercent.value = Math.round(easedProgress * 80)

    if (progress < 1) requestAnimationFrame(frame)
  }

  requestAnimationFrame(frame)
}

watch(visibleSections, (sections) => {
  if (sections.has('hook') && displayPercent.value === 0) animatePercent()
}, { deep: true })

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const sectionId = entry.target.getAttribute('data-section-id')
        if (!sectionId) return

        visibleSections.value = new Set(visibleSections.value).add(sectionId)
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.15 },
  )

  document.querySelectorAll('.reveal-section').forEach((section) => observer.observe(section))
})

void Doughnut
void globalStats
void DayInLife
void genderChartData
void genderChartOptions
</script>

<style>
:root {
  --condition-accent: #C97A7A;
  --condition-deep: #A67C6B;
  --condition-surface: #F5EDE8;
}
</style>

<style scoped>
.story-root {
  min-height: 100vh;
  background: #FAF8F5;
  overflow-x: clip;
}

/* HOOK */
.act-hook {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 48px;
  background: #FAF8F5;
  transition: background 0.6s ease;
}
.act-inner { max-width: 760px; margin: 0 auto; text-align: center; }
.eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--condition-accent);
  margin-bottom: 24px;
}
.hook-headline {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #2C2825;
  line-height: 1.2;
  margin-bottom: 24px;
}
.hook-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.125rem;
  color: #6B5F58;
  line-height: 1.8;
  margin-bottom: 16px;
}
.source-line {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: #6B5F58;
}

/* CONDITION FILTER */
.condition-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #FAF8F5;
  border-bottom: 1px solid #E0D8CF;
  padding: 12px 24px;
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 2px 12px rgba(44, 40, 37, 0.06);
  transition: background 0.6s ease;
}
.condition-pill {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid #E0D8CF;
  background: #F2EDE6;
  color: #2C2825;
  cursor: pointer;
  transition: all 0.3s ease;
}
.condition-pill:hover {
  border-color: var(--condition-accent);
  color: var(--condition-accent);
}

.act-journey,
.act-gap {
  min-height: 100vh;
}

/* FOOTER */
.story-footer {
  background: #2C2825;
  color: #FAF8F5;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  text-align: center;
  padding: 40px 24px;
}
.footer-disclaimer {
  color: #E0D8CF;
  font-size: 0.8rem;
  margin-top: 8px;
}
</style>

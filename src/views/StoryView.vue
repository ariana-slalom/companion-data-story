<template>
  <div class="story-root">

    <!-- ACT 1: HOOK -->
    <section class="act act-hook">
      <div class="act-inner">
        <p class="eyebrow">The Support Side</p>
        <h1 class="hook-headline">
          Chronic illness is not a solo sport.
        </h1>
        <p class="hook-sub">
          One person lives with the diagnosis. Another person helps hold them up —
          reorganizing their life, absorbing the uncertainty, showing up again and
          again without a map or a manual.
          <br><br>
          That second person is who this is for.
        </p>
        <div class="hook-divider"></div>
        <p class="hook-data-intro">The reality they're both navigating:</p>
        <div class="hook-stats-row">
          <div class="stat-block">
            <span class="stat-number">~80%</span>
            <span class="stat-label">of autoimmune patients are women</span>
          </div>
          <div class="stat-block">
            <span class="stat-number">4.6</span>
            <span class="stat-label">average years to correct diagnosis</span>
          </div>
          <div class="stat-block">
            <span class="stat-number">45%</span>
            <span class="stat-label">told symptoms were psychosomatic</span>
          </div>
          <div class="stat-block">
            <span class="stat-number">63M</span>
            <span class="stat-label">Americans are unpaid caregivers</span>
          </div>
        </div>
        <p class="source-line">
          Sources: AARDA · AARP & National Alliance for Caregiving, 2025
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

    <!-- ACT 2: THE JOURNEY -->
    <section
      class="act act-journey"
      @mousemove="handleMouseMove"
    >
      <div class="journey-intro">
        <p class="journey-label">The journey</p>
        <h2 class="journey-headline">
          {{ selectedCondition.label }} — seen from both sides.
        </h2>
        <p class="journey-sub">
          Move your cursor left to follow their experience.
          Move right to see yours.
        </p>
      </div>

      <div class="split-container">
        <!-- LEFT — PATIENT -->
        <div
          class="split-panel split-left"
          :style="{
            width: leftWidth,
            opacity: leftOpacity,
            borderRight: '1px solid #E0D8CF'
          }"
        >
          <div class="panel-header">
            <span class="panel-label">Their experience</span>
          </div>
          <div class="journey-steps">
            <div
              v-for="(step, index) in activeJourney"
              :key="'patient-' + index"
              class="journey-step"
            >
              <div class="step-phase">{{ step.phase }}</div>
              <p class="step-text">{{ step.patientMoment }}</p>
              <div class="step-stat">
                <span class="stat-number-sm">{{ step.stat }}</span>
                <span class="stat-source">{{ step.statSource }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CENTER LINE -->
        <div class="split-center-line">
          <div
            v-for="n in activeJourney.length"
            :key="n"
            class="center-dot"
            :style="{ background: activeTheme.accent }"
          ></div>
        </div>

        <!-- RIGHT — COMPANION -->
        <div
          class="split-panel split-right"
          :style="{
            width: rightWidth,
            opacity: rightOpacity
          }"
        >
          <div class="panel-header companion-header">
            <span class="panel-label">Your experience</span>
          </div>
          <div class="journey-steps">
            <div
              v-for="(step, index) in activeJourney"
              :key="'companion-' + index"
              class="journey-step"
            >
              <div
                class="step-phase companion-phase"
                :style="{ color: activeTheme.accent }"
              >
                {{ step.phase }}
              </div>
              <p class="step-text">{{ step.companionReality }}</p>
              <div
                class="companion-action"
                :style="{ borderLeftColor: activeTheme.accent }"
              >
                <span class="action-label">What you can do</span>
                <p class="action-text">{{ step.companionAction }}</p>
              </div>
            </div>
          </div>
        </div>
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

const journeySteps: Record<string, Array<{
  phase: string
  patientMoment: string
  companionReality: string
  companionAction: string
  stat: string
  statSource: string
}>> = {
  eds: [
    {
      phase: 'The first symptoms',
      patientMoment: 'Joint pain, fatigue, brain fog. Googling symptoms at 2am. Something is wrong but nothing shows on tests.',
      companionReality: 'Watching someone you love deteriorate with no explanation. Carrying the fear they might be dismissed — again.',
      companionAction: 'Document everything. Keep a shared symptom log. Be the second memory when brain fog steals theirs.',
      stat: 'EDS patients average 10+ years from first symptoms to correct diagnosis.',
      statSource: 'Ehlers-Danlos Society'
    },
    {
      phase: 'The diagnostic odyssey',
      patientMoment: "Doctor after doctor. Wrong diagnoses. Being told it's anxiety, it's in your head, you're seeking attention.",
      companionReality: 'Attending appointments and watching someone you love be disbelieved. Absorbing secondhand medical gaslighting.',
      companionAction: "Come to appointments. Ask questions they're too exhausted to ask. Validate what you both know is real.",
      stat: '88% of EDS patients were told they were "making it up" before diagnosis.',
      statSource: 'Brown University / Center for Complex Conditions, 2025'
    },
    {
      phase: 'The diagnosis',
      patientMoment: "Finally named. Relief, grief, and the slow realization that named doesn't mean fixed.",
      companionReality: 'Relief mixed with a new weight: this is lifelong. The role of companion just became permanent.',
      companionAction: 'Learn the condition alongside them. Find the EDS Society resources. Know what a flare looks like before it happens.',
      stat: 'EDS has no cure. Management is the goal — and companions are a critical part of that system.',
      statSource: 'Ehlers-Danlos Society'
    },
    {
      phase: 'Living with it',
      patientMoment: "Good days and flare days with no warning between them. Planning around a body that doesn't keep plans.",
      companionReality: 'Constant recalibration. Grieving the plans. Feeling guilty for needing your own life too.',
      companionAction: 'Build flex into shared plans by default. Have a flare protocol ready. Protect your own time without guilt.',
      stat: 'Partners of EDS patients report significantly higher rates of anxiety and sleep disruption than age-matched controls.',
      statSource: 'Representative, Ehlers-Danlos Society community research'
    }
  ],
  lupus: [
    {
      phase: 'The first symptoms',
      patientMoment: 'Fatigue, joint pain, a rash that comes and goes. Labs come back normal. The search begins.',
      companionReality: 'Watching the person you love lose energy, miss things, and be told nothing is wrong.',
      companionAction: 'Track patterns together. Photograph the rash when it appears. Be the continuity between appointments.',
      stat: 'Average lupus diagnosis takes 6 years and 4+ physicians.',
      statSource: 'Lupus Foundation of America'
    },
    {
      phase: 'The diagnostic odyssey',
      patientMoment: "Misdiagnosed with fibromyalgia, anxiety, rheumatoid arthritis. The correct test isn't ordered for years.",
      companionReality: 'Learning a medical system that keeps moving the goalposts. Managing hope through repeated disappointment.',
      companionAction: "Research ANA testing. Ask rheumatology referral questions directly. Advocate loudly when they're too tired to.",
      stat: 'Nearly half of lupus patients were told symptoms were psychosomatic before correct diagnosis.',
      statSource: 'AARDA'
    },
    {
      phase: 'The diagnosis',
      patientMoment: 'Lupus is named. It affects kidneys, skin, joints, brain. The scope is enormous.',
      companionReality: 'Learning that this is systemic and unpredictable. The flare could be anything, anytime.',
      companionAction: 'Learn the SLEDAI scale. Understand what a lupus flare looks like physically and emotionally.',
      stat: 'Lupus affects nearly every organ system. No two patients present identically.',
      statSource: 'Lupus Foundation of America'
    },
    {
      phase: 'Living with it',
      patientMoment: 'Sun sensitivity, fatigue, joint flares. Planning life around what the body will allow that day.',
      companionReality: 'Partners of lupus patients report significantly higher anxiety and disrupted sleep than controls.',
      companionAction: "Plan indoor alternatives. Keep a flare kit ready. Know their rheumatologist's after-hours line.",
      stat: 'Partners of lupus patients show measurably higher anxiety than age-matched non-caregiver controls.',
      statSource: 'Lupus Foundation of America'
    }
  ],
  hashimotos: [
    {
      phase: 'The first symptoms',
      patientMoment: "Exhaustion that sleep doesn't fix. Weight changes, brain fog, mood swings. Dismissed as stress or depression.",
      companionReality: "Watching personality shifts and not knowing if it's the illness or something else entirely.",
      companionAction: "Don't interpret mood symptoms personally. Ask about thyroid levels before assuming emotional cause.",
      stat: "Hashimoto's is the most common autoimmune disease in the US — and among the most frequently misdiagnosed.",
      statSource: 'AARDA'
    },
    {
      phase: 'The diagnostic odyssey',
      patientMoment: "Treated for depression, anxiety, chronic fatigue. The thyroid antibody test isn't ordered for years.",
      companionReality: 'Watching treatment that doesn\'t work. Feeling helpless as the person you love gets worse, not better.',
      companionAction: 'Ask specifically about TPO antibody testing. Document mood and energy patterns by cycle and season.',
      stat: "Average Hashimoto's diagnosis takes 5 years. Most patients are first treated for psychiatric conditions.",
      statSource: 'AARDA (representative)'
    },
    {
      phase: 'The diagnosis',
      patientMoment: "Finally: Hashimoto's thyroiditis. Autoimmune. The thyroid is under attack from within.",
      companionReality: "Relief that there's a name — and confusion because it still looks invisible from the outside.",
      companionAction: 'Learn the difference between hypothyroid and Hashimoto\'s flare symptoms. They feel different. Track both.',
      stat: "Hashimoto's symptoms fluctuate — companions frequently mistake flare symptoms for emotional states.",
      statSource: 'AARDA (representative)'
    },
    {
      phase: 'Living with it',
      patientMoment: "Medication helps but doesn't eliminate symptoms. Good weeks and bad weeks with no clear pattern.",
      companionReality: 'The invisible nature of the condition means support needs are invisible too. Hard to explain to others.',
      companionAction: "Be the person who believes them when others don't. The invisibility is part of the condition.",
      stat: 'Companions of invisible illness patients report isolation — others don\'t understand why support is still needed.',
      statSource: 'AARDA (representative)'
    }
  ],
  t1d: [
    {
      phase: 'The diagnosis',
      patientMoment: 'Often diagnosed in acute crisis — DKA, hospitalization. The diagnosis arrives as an emergency.',
      companionReality: "For parents: your child's life changes in a single conversation. You leave the hospital a different person.",
      companionAction: "Accept that you will grieve this. That grief is appropriate. It doesn't mean you won't also rise to it.",
      stat: 'T1D is often diagnosed in diabetic ketoacidosis — an acute crisis requiring immediate hospitalization.',
      statSource: 'JDRF'
    },
    {
      phase: 'Learning the system',
      patientMoment: 'Carb counting, insulin ratios, CGM alarms. A new language and a new full-time job.',
      companionReality: 'Parents of T1D children report nighttime monitoring as the single most disruptive factor to their wellbeing.',
      companionAction: 'Share the night shifts. Build a rotation. Sleep deprivation is a health crisis for the companion too.',
      stat: '70% of parent caregivers of T1D children report moderate-to-severe burden.',
      statSource: 'Heliyon / PMC, 2024'
    },
    {
      phase: 'The daily reality',
      patientMoment: 'Every meal, every activity, every emotion affects blood glucose. Nothing is simple anymore.',
      companionReality: 'Hypervigilance becomes a baseline. You never fully switch off. That vigilance has a cost.',
      companionAction: 'Build glucose-aware routines without making every moment about diabetes. Normalcy is also medicine.',
      stat: 'Parents of T1D children show significantly higher rates of anxiety and hypervigilance than control parents.',
      statSource: 'Heliyon 2024 (representative)'
    },
    {
      phase: 'The long game',
      patientMoment: 'Technology improves. CGMs, closed-loop systems. But the mental load never fully lifts.',
      companionReality: 'Chronic sorrow is real — not depression, but a recurring grief that resurfaces at milestones.',
      companionAction: 'Name the chronic sorrow. Find T1D parent communities. You cannot pour from an empty vessel.',
      stat: 'Chronic sorrow — a recurring grief at developmental milestones — is documented in T1D parents.',
      statSource: 'Heliyon 2024'
    }
  ]
}

const activeJourney = computed(() =>
  journeySteps[selectedCondition.value.id] || journeySteps.eds
)

const mousePosition = ref<'left' | 'center' | 'right'>('center')

const handleMouseMove = (e: MouseEvent) => {
  const width = window.innerWidth
  const x = e.clientX
  if (x < width * 0.35) mousePosition.value = 'left'
  else if (x > width * 0.65) mousePosition.value = 'right'
  else mousePosition.value = 'center'
}

const leftWidth = computed(() => {
  if (mousePosition.value === 'left') return '65%'
  if (mousePosition.value === 'right') return '35%'
  return '50%'
})

const rightWidth = computed(() => {
  if (mousePosition.value === 'right') return '65%'
  if (mousePosition.value === 'left') return '35%'
  return '50%'
})

const leftOpacity = computed(() =>
  mousePosition.value === 'right' ? '0.4' : '1'
)

const rightOpacity = computed(() =>
  mousePosition.value === 'left' ? '0.4' : '1'
)

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
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 48px;
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

.hook-divider {
  width: 48px;
  height: 2px;
  background: var(--condition-accent);
  margin: 32px auto;
  transition: background 0.6s ease;
}
.hook-data-intro {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6B5F58;
  margin-bottom: 24px;
}
.hook-stats-row {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.stat-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  color: #2C2825;
  line-height: 1;
}
.stat-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: #6B5F58;
  text-align: center;
  max-width: 120px;
  line-height: 1.4;
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

.act-journey {
  min-height: 100vh;
  background: var(--condition-surface);
  transition: background 0.6s ease;
}

.journey-intro {
  max-width: 760px;
  margin: 0 auto;
  padding: 80px 48px 40px;
  text-align: center;
}

.journey-label {
  margin-bottom: 12px;
  color: var(--condition-accent);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.journey-headline {
  margin-bottom: 12px;
  color: #2C2825;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
}

.journey-sub {
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
}

.split-container {
  display: flex;
  align-items: stretch;
  min-height: 80vh;
  padding: 0 0 80px;
}

.split-panel {
  overflow: hidden;
  padding: 0 40px;
  transition: width 0.4s ease, opacity 0.4s ease;
}

.panel-header {
  padding: 24px 0 16px;
  border-bottom: 1px solid #E0D8CF;
  margin-bottom: 32px;
}

.panel-label {
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.journey-steps {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.journey-step {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.step-phase {
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.companion-phase {
  color: var(--condition-accent);
}

.step-text {
  margin: 0;
  color: #2C2825;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
}

.step-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 8px;
  padding: 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.5);
}

.stat-number-sm {
  color: #2C2825;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
}

.stat-source {
  color: #6B5F58;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
}

.companion-action {
  margin-top: 8px;
  padding: 12px 16px;
  border-left: 3px solid var(--condition-accent);
  border-radius: 0 6px 6px 0;
  background: rgba(255, 255, 255, 0.6);
  transition: border-color 0.6s ease;
}

.action-label {
  display: block;
  margin-bottom: 4px;
  color: var(--condition-accent);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.action-text {
  margin: 0;
  color: #2C2825;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  line-height: 1.6;
}

.split-center-line {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 2px;
  padding: 80px 0;
  background: #E0D8CF;
}

.center-dot {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 50%;
  transition: background 0.6s ease;
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

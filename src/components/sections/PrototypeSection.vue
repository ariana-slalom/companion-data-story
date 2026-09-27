<template>
  <section class="section" id="prototype">
    <RevealSection>
      <p class="eyebrow mb-3">The Gap + Interactive Prototype</p>
      <h2 class="font-heading text-h3 mb-4">A lifeline for the person beside the person.</h2>
      <p class="text-body-1 lede mb-10">
        Not a clinical app. A simple, warm tool for tracking, learning, and knowing when to
        hand off to professional support. Tap around — this is a mockup, not a live product.
      </p>
    </RevealSection>

    <RevealSection>
      <div class="phone-wrap">
        <div class="phone-frame">
          <div class="phone-notch" />
          <div class="phone-screen">
            <div class="phone-header">
              <v-icon icon="mdi-hand-heart" color="primary" size="20" class="mr-2" />
              <span class="font-heading">Beside</span>
            </div>

            <div class="phone-body">
              <transition name="fade" mode="out-in">
                <div v-if="tab === 'track'" key="track" class="tab-panel">
                  <p class="panel-title">How was today?</p>
                  <div class="track-grid">
                    <button
                      v-for="opt in trackOptions"
                      :key="opt.label"
                      class="track-chip"
                      :class="{ active: selectedTrack === opt.label }"
                      type="button"
                      @click="selectTrack(opt.label)"
                    >
                      <v-icon :icon="opt.icon" size="18" class="mb-1" />
                      <span>{{ opt.label }}</span>
                    </button>
                  </div>
                  <p v-if="selectedTrack" class="confirm-note">
                    Logged “{{ selectedTrack }}.” Your own notes are private to you.
                  </p>
                </div>

                <div v-else-if="tab === 'learn'" key="learn" class="tab-panel">
                  <p class="panel-title">Quick things to know</p>
                  <v-expansion-panels variant="accordion">
                    <v-expansion-panel v-for="card in learnCards" :key="card.title" :title="card.title" :text="card.body" />
                  </v-expansion-panels>
                </div>

                <div v-else key="handoff" class="tab-panel">
                  <p class="panel-title">Should you loop in a professional?</p>
                  <div v-for="(prompt, i) in handoffPrompts" :key="prompt.question" class="handoff-item">
                    <p class="handoff-q">{{ i + 1 }}. {{ prompt.question }}</p>
                    <p class="handoff-a">{{ prompt.guidance }}</p>
                  </div>
                </div>
              </transition>
            </div>

            <div class="phone-tabbar">
              <button
                v-for="t in tabs"
                :key="t.value"
                class="tab-btn"
                :class="{ active: tab === t.value }"
                type="button"
                @click="tab = t.value"
              >
                <v-icon :icon="t.icon" size="20" />
                <span>{{ t.label }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>

    <RevealSection>
      <p class="text-body-2 gap-note mt-10">
        Companion-focused tools barely exist today. This mockup imagines what a start could
        look like — nothing here replaces clinical care, and it never should.
      </p>
    </RevealSection>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RevealSection from '../RevealSection.vue'
import { trackOptions, learnCards, handoffPrompts } from '../../data/prototype'

type Tab = 'track' | 'learn' | 'handoff'

const tab = ref<Tab>('track')
const selectedTrack = ref<string | null>(null)

const tabs: { value: Tab; label: string; icon: string }[] = [
  { value: 'track', label: 'Track', icon: 'mdi-calendar-heart' },
  { value: 'learn', label: 'Learn', icon: 'mdi-book-open-variant' },
  { value: 'handoff', label: 'Hand off', icon: 'mdi-stethoscope' },
]

function selectTrack(label: string) {
  selectedTrack.value = selectedTrack.value === label ? null : label
}
</script>

<style scoped>
.lede {
  max-width: 640px;
  opacity: 0.85;
}

.phone-wrap {
  display: flex;
  justify-content: center;
}

.phone-frame {
  width: 320px;
  border-radius: 40px;
  background: var(--color-ink);
  padding: 14px;
  box-shadow: 0 30px 60px rgba(58, 46, 40, 0.25);
  position: relative;
}

.phone-notch {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 18px;
  background: var(--color-ink);
  border-radius: 0 0 14px 14px;
  z-index: 2;
}

.phone-screen {
  background: var(--color-cream);
  border-radius: 28px;
  overflow: hidden;
  min-height: 480px;
  display: flex;
  flex-direction: column;
}

.phone-header {
  display: flex;
  align-items: center;
  padding: 1.5rem 1.25rem 0.75rem;
  font-size: 1.1rem;
}

.phone-body {
  flex: 1;
  padding: 0.5rem 1.25rem 1rem;
  overflow-y: auto;
}

.panel-title {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  margin-bottom: 0.9rem;
}

.track-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
}

.track-chip {
  border: 1px solid var(--color-blush);
  background: white;
  border-radius: 12px;
  padding: 0.7rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  color: var(--color-ink);
  cursor: pointer;
  transition: all 0.2s ease;
}

.track-chip.active {
  background: var(--color-clay);
  border-color: var(--color-clay);
  color: white;
}

.confirm-note {
  margin-top: 0.9rem;
  font-size: 0.8rem;
  color: var(--color-clay);
  background: var(--color-blush);
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
}

.handoff-item {
  margin-bottom: 1rem;
  background: white;
  border-radius: 12px;
  padding: 0.75rem 0.9rem;
}

.handoff-q {
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.handoff-a {
  font-size: 0.8rem;
  opacity: 0.8;
}

.phone-tabbar {
  display: flex;
  border-top: 1px solid var(--color-blush);
  background: white;
}

.tab-btn {
  flex: 1;
  border: none;
  background: none;
  padding: 0.7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  font-size: 0.65rem;
  color: #9a8a80;
  cursor: pointer;
}

.tab-btn.active {
  color: var(--color-clay);
}

.gap-note {
  max-width: 640px;
  opacity: 0.75;
  margin: 0 auto;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

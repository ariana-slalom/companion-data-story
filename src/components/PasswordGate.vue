<template>
  <div v-if="!unlocked" class="gate d-flex align-center justify-center">
    <v-card max-width="420" class="pa-8 text-center" elevation="4">
      <p class="eyebrow mb-2">The Support Side</p>
      <h1 class="font-heading text-h5 mb-4">This story is currently private</h1>
      <p class="text-body-2 mb-6" style="opacity: 0.8">
        Enter the access password shared with you to continue.
      </p>
      <v-form @submit.prevent="tryUnlock">
        <v-text-field
          v-model="input"
          type="password"
          label="Password"
          variant="outlined"
          density="comfortable"
          :error-messages="error ? ['That password didn\u2019t work — try again.'] : []"
          autofocus
        />
        <v-btn type="submit" color="primary" block size="large" class="mt-2">Enter</v-btn>
      </v-form>
    </v-card>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const STORAGE_KEY = 'support-side-unlocked'
const ACCESS_PASSWORD = 'ariana-protogen302'

const input = ref('')
const error = ref(false)
const unlocked = ref(sessionStorage.getItem(STORAGE_KEY) === 'true')

function tryUnlock() {
  if (input.value === ACCESS_PASSWORD) {
    unlocked.value = true
    error.value = false
    sessionStorage.setItem(STORAGE_KEY, 'true')
  } else {
    error.value = true
  }
}
</script>

<style scoped>
.gate {
  min-height: 100vh;
  background: var(--color-cream);
  padding: 1.5rem;
}
</style>

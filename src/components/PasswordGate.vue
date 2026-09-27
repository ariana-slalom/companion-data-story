<template>
  <main class="password-gate">
    <form class="gate-content" @submit.prevent="handleSubmit">
      <h1>The Support Side</h1>
      <p class="subheading">This is a private preview.</p>
      <input
        v-model="password"
        type="password"
        placeholder="Enter password"
        autocomplete="current-password"
        aria-label="Password"
        :aria-invalid="hasError"
      />
      <button type="submit">Enter</button>
      <p v-if="hasError" class="error-message" role="alert">
        Incorrect password. Please try again.
      </p>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  authenticated: []
}>()

const password = ref('')
const hasError = ref(false)

function handleSubmit() {
  if (password.value === 'ariana-protogen302') {
    hasError.value = false
    emit('authenticated')
    return
  }

  hasError.value = true
}
</script>

<style scoped>
.password-gate {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  background: #faf8f5;
  color: #2c2825;
}

.gate-content {
  width: min(100%, 360px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
}

h1 {
  margin: 0;
  color: #2c2825;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.15;
}

.subheading {
  margin: 0.75rem 0 2rem;
  color: #6b5f58;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
}

input,
button {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
}

input {
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #e0d8cf;
  border-radius: 4px;
  background: transparent;
  color: #2c2825;
  outline: none;
}

input::placeholder {
  color: #6b5f58;
  opacity: 0.8;
}

input:focus {
  border-color: #2c2825;
}

button {
  margin-top: 0.75rem;
  padding: 0.9rem 1rem;
  border: 1px solid #2c2825;
  border-radius: 4px;
  background: #2c2825;
  color: #faf8f5;
  cursor: pointer;
}

button:hover {
  background: #6b5f58;
}

.error-message {
  margin: 0.75rem 0 0;
  color: #c97a7a;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
}
</style>

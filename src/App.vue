<template>
  <v-app>
    <PasswordGate
      v-if="!isAuthenticated"
      @authenticated="isAuthenticated = true"
    />
    <router-view v-else />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PasswordGate from './components/PasswordGate.vue'

const isAuthenticated = ref(false)
</script>

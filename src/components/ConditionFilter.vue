<template>
  <div class="condition-filter">
    <p class="eyebrow mb-3">Viewing data for</p>
    <v-chip-group
      :model-value="modelValue"
      selected-class="chip-selected"
      column
      @update:model-value="onSelect"
    >
      <v-chip
        v-for="condition in conditions"
        :key="condition.id"
        :value="condition.id"
        variant="elevated"
        class="condition-chip"
        filter
      >
        {{ condition.shortName }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script setup lang="ts">
import { conditions } from '../data/conditions'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

function onSelect(value: unknown) {
  // v-chip-group can briefly emit undefined mid-transition; keep the current selection.
  if (typeof value === 'string') emit('update:modelValue', value)
  else emit('update:modelValue', props.modelValue)
}
</script>

<style scoped>
.condition-chip {
  font-weight: 500;
}

:deep(.chip-selected) {
  background: var(--color-clay) !important;
  color: white !important;
}
</style>

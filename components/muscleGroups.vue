<script lang="ts" setup>
import { useStore } from '~/store/store';

const store = useStore()
const muscleGroups = store.getMuscleGroups
</script>

<template>
  <div class="w-full flex flex-wrap gap-2 justify-around">
    <SubMuscleGroupBox v-if="muscleGroups.length" v-for="mg in muscleGroups" :key="mg" :name="mg" />
    <h2 v-else>No se encontraron grupos musculares</h2>
  </div>
</template>
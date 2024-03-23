<script lang="ts" setup>
import { useStore } from '~/store/store';

const store = useStore()

defineProps<{
  muscle: string
}>()
</script>

<template>
  <div class="w-full">
    <CommonList :array="store.getExercisesOfMuscle(muscle).map((el) => el.name)"
      empty="No se encontraron ejercicios para este musculo" to="/exercise/" />
  </div>
</template>
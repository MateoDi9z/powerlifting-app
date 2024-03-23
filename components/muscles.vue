<script lang="ts" setup>
import { useStore } from '~/store/store';

const store = useStore()

const { muscleGroup } = defineProps<{
  muscleGroup: string
}>()

const muscles = store.getMusclesOfGroup(muscleGroup).map((el) => el.muscle)
</script>

<template>
  <div class="w-full">
    <CommonList :array="muscles" to="/exercises/" empty="No se encontraron músculos en este grupo muscular" />
  </div>
</template>
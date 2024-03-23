<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <h1 class="pb-4 border-b border-secondary mb-5">Seleccione el musculo</h1>

  <Muscles :muscle-group="route.params.muscleGroup as string" />
</template>

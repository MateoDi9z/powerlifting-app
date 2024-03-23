<script lang="ts" setup>
const route = useRoute()
const muscle = route.params.muscle
</script>

<template>
  <h1 class="pb-4 mb-4 border-b border-secondary">Ejercicios para {{ muscle }}</h1>

  <Exercises :muscle="muscle as string" />
</template>

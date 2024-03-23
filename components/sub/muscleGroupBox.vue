<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>

<template>
  <NuxtLink :to="'/muscles/' + name"
    class="bg-neutral rounded-xl w-[48%] aspect-square flex justify-center align-baseline place-items-center">
    {{ name }}
  </NuxtLink>
</template>
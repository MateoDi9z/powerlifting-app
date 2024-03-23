<script lang="ts" setup>
defineProps<{
  name: string,
  to: string
}>()
</script>

<template>
  <NuxtLink class="bg-neutral p-4 rounded-md w-full" :to="to">
    {{ name }}
  </NuxtLink>
</template>
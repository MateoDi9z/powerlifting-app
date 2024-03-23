<script lang="ts" setup>
defineProps<{
  array: string[],
  to?: string,
  empty?: string
}>()
</script>

<template>
  <div class="flex flex-col w-full gap-2">
    <CommonListRow v-if="array.length" v-for="row in array" :name="row" :to="to + row" />

    <div v-else class="w-full flex flex-col place-content-center">
      <h2>{{ empty }}</h2>

      <NuxtLink class="d-btn d-btn-primary w-fit md:mx-0 mx-auto mt-4" to="/muscle-group">Volver</NuxtLink>
    </div>
  </div>
</template>
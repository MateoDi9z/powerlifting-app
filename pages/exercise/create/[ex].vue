<script lang="ts" setup>
import { useStore } from '~/store/store';

const route = useRoute()
const store = useStore()

definePageMeta({
  layout: false
})

const exercise = store.getExercise(route.params.ex as string)
</script>

<template>
  <NuxtLayout name="exercise">
    <template #image>
      <img src="/public/assets/img/gym.jpg" class="object-cover w-full h-full" />
    </template>

    <template #content>
      <h1 class="text-xl font-semibold pb-4 border-b border-mute">
        Crear registro
      </h1>

    </template>
  </NuxtLayout>
</template>

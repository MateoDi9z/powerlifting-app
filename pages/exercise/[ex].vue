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
        {{ exercise?.name }}
      </h1>

      <!-- Details -->
      <div class="mt-4">
        <div class="flex w-full justify-between">
          <p>Grupo muscular:</p>
          <p>{{ exercise?.muscleGroup }}</p>
        </div>

        <div class="flex mt-2 w-full justify-between">
          <p>Músculo:</p>
          <p>{{ exercise?.muscle }}</p>
        </div>
      </div>

      <h2 class="mt-5 mb-2 text-xl pb-2 border-b">Historial</h2>

      <div v-for="serie in exercise?.series" class="flex w-full justify-between mb-1 pb-2 border-b border-mute px-1">
        {{ serie.datetime.toDateString() }}

        <span class="flex">
          <p class="text-primary">{{ serie.weight }} {{ serie.units }}</p>
          <p class="mx-2">-</p>
          <p class="text-secondary">x{{ serie.reps }}
          </p>
        </span>
      </div>
    </template>
  </NuxtLayout>
</template>

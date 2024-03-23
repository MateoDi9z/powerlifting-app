<script lang="ts" setup>
import { ChartBarSquareIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen h-fit flex flex-col justify-between" data-theme="forest">
    <!-- <AppHeader /> -->
    <div>
      <div class="md:h-[35vh] h-[30vh] overflow-hidden bg-gray-600 opacity-60">
        <slot name="image" />
      </div>

      <div class="rounded-[50px] mb-16 -translate-y-10 w-full overflow-hidden bg-base-100 pt-8 px-8">
        <slot name="content" />

      </div>
    </div>

    <NuxtLink :to="'graph/' + route.params.ex as string"
      class="shadow-xl fixed right-5 bottom-40 d-btn d-btn-circle d-btn-primary font-bold text-2xl pb-0">
      <ChartBarSquareIcon class="h-6 w-6" />
    </NuxtLink>

    <NuxtLink :to="'create/' + route.params.ex as string"
      class="shadow-xl fixed right-5 bottom-24 d-btn d-btn-circle d-btn-primary font-bold text-2xl pb-1">
      +
    </NuxtLink>

    <div class="fixed bottom-0 w-full">
      <AppFooter />
    </div>
  </div>
</template>
<template>
  <div
    class="h-20 bg-secondary-content rounded-b rounded-3xl py-4 px-2 font-semibold flex flex-row justify-evenly  border border-secondary">
    <NuxtLink to="/"
      class="text-white flex-1 flex justify-center hover:bg-[#ffffff30] transition-all py-0 px-4 rounded-full place-items-center place-content-center">
      Home
    </NuxtLink>

    <div class="h-full w-[1px] bg-white place-self-center mx-2">

    </div>

    <NuxtLink to="/muscle-group"
      class="text-white flex-1 flex justify-center hover:bg-[#ffffff30] transition-all py-0 px-4 rounded-full place-items-center place-content-center">
      Grupos Musculares
    </NuxtLink>

    <!-- <NuxtLink to="/exercises"
      class="text-white hover:bg-[#ffffff30] transition-all py-0 px-4 rounded-full place-items-center place-content-center">
      Ejercicios
    </NuxtLink> -->
  </div>
</template>
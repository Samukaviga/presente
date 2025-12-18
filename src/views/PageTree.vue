<template>
  <div class="flex flex-col items-center justify-center">

    
    <font-awesome-icon class="text-9xl mt-10 animate-pulse  text-red-500" icon="fa-solid fa-heart" />



    <div class="mt-10">
      <p class="text-gray-200 text-2xl px-2 text-center ">Algo que pensei com muito carinho.</p>
      <p class="text-gray-200 text-2xl px-2 mt-10 text-center ">Para que voce pudesse desfrutar dele todos os dias.</p>
      <p class="text-gray-200 text-2xl px-2 mt-10 text-center ">E que eu pudesse ter uma parte no seu dia, mesmo quando estivesse longe de ti.</p>




      <div class="mt-15 flex flex-wrap gap-10 justify-center">


        <router-link :to="{ name: 'PageFor' }" class="bg-button font-bold text-gray-300 text-3xl py-6 px-9
         border border-violet-100 rounded-2xl
         flex items-center justify-center gap-3 animate-pulse
         rounded-2xl">
          AGORA SIM
          <font-awesome-icon class="text-3xl animate-pulse  text-white" icon="fa-solid fa-face-grin-hearts" />
        </router-link>


      </div>
    </div>

    <div class="border-t-1 border-white w-[70%] mt-10"></div>

    <div class="container px-2 flex flex-wrap justify-center mt-5 mb-10 gap-5">

    </div>
  </div>
</template>

<script setup lang="ts">



</script>

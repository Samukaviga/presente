<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class=" px-5 text-gray-200 mt-25 text-6xl text-center">Revelação</h1>

    <font-awesome-icon class="text-7xl text-white mt-6 flex-shrink-1" icon="fa-solid fa-gift" />

    <div class="mt-20">
      <p class="text-gray-200 text-2xl px-2 text-center ">Eu preparei algo especial para você...</p>




      <div class="mt-15 flex flex-wrap gap-10 justify-center">


        <router-link :to="{ name: 'PageTwo' }" class="bg-button font-bold text-gray-300 text-3xl py-6 px-9
         border border-violet-100 rounded-2xl
         flex items-center justify-center gap-3
         rounded-2xl">
          Quero ver
          <font-awesome-icon class="text-3xl text-gray-300" icon="fa-solid fa-eye" />
        </router-link>


      </div>
    </div>

    <div class="border-t-1 border-white w-[70%] mt-10"></div>

    <div class="container px-2 flex flex-wrap justify-center mt-5 mb-10 gap-5">

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";



onMounted(() => {
  initFlowbite();
});



</script>

<style>
.bg-button {
  background-color: #1a1880;
  transition: 0.2s;
}

.bg-button:hover {
  background-color: #0e0d69;
  color: #d6c9c9;
  font-weight: bold;
}

.bg-card {
  background-color: #2a0d46;
}
</style>

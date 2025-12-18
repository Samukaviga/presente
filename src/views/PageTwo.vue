<template>
  <div class="flex flex-col items-center justify-center">

    <img class="max-w-full  rounded-md mt-15 w-80 " src="../assets/images/foto-1.jpg" alt="eu e ela">

    <div class="mt-10">
      <p class="text-gray-200 animate-bounce text-2xl px-2 text-center font-bold ">Você Mudou os meus dias.</p>
      <p class="text-gray-200 text-2xl px-2 mt-5 text-center ">Me fez sorrir quando eu nem percebia.</p>
      <p class="text-gray-200 text-2xl px-2 mt-5 text-center ">Esse presente é só uma pequena forma de dizer o quanto você é importante pra mim...</p>




      <div class="mt-15 flex flex-wrap gap-10 justify-center">


        <router-link :to="{ name: 'PageTree' }" class="bg-button font-bold text-gray-300 text-3xl py-6 px-9
         border border-violet-100 rounded-2xl
         flex items-center justify-center gap-3
         rounded-2xl">
          Continuar
          <font-awesome-icon class="text-3xl animate-pulse  text-red-500" icon="fa-solid fa-heart" />
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

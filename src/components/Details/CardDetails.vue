<template>
  <div class="items-center w-sm bg-gray-200 rounded-lg shadow sm:flex">
    <div class="p-5">
      <h3 class="text-xl font-bold tracking-tight text-gray-900 mb-2">
        <a href="#">{{ title }}</a>
      </h3>

      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardDetails",

  props: ["title"],

  data() {
    return {};
  },
});
</script>

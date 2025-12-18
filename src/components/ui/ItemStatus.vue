<template>
  <a
    href="#"
    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button border rounded-lg"
  >
    {{ name }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "itemStatus",

  props: ["name"],

  data() {
    return {};
  },
});
</script>

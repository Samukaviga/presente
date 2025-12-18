<template>
  <li>
    <span class="font-semibold text-gray-900">{{ name }}:</span>
    {{ value }}
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemList",

  props: ["name", "value"],

  data() {
    return {};
  },
});
</script>

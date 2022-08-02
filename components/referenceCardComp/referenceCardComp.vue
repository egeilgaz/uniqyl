<template>
  <a href="#" class="reference-card">
    <img :src="getImgUrl(card.img)" alt="" />
  </a>
</template>

<script>
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  props: {
    card: {
      type: Object,
      default: "",
    },
  },
};
</script>

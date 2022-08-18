<template>
  <a href="#" class="reference-card">
    <nuxt-img :src="card.img" alt="referenceCard" :placeholder="[70]" />
  </a>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: "",
    },
  },
};
</script>

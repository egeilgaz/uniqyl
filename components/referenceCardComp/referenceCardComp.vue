<template>
  <NuxtLink class="reference-card" to="#">
    <nuxt-img :src="card.img" alt="referenceCard" :placeholder="[70]" />
  </NuxtLink>
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

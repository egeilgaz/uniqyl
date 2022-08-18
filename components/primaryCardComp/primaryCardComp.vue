<template>
  <div>
    <div class="primary-card">
      <nuxt-img :src="primaryCard.img" alt="primaryCard" />
      <h4>{{ primaryCard.title }}</h4>
      <p>
        {{ primaryCard.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    primaryCard: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

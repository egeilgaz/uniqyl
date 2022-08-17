<template>
  <div
    class="features-row"
    :class="feature.direction == 'reverse' ? 'features-row-reverse' : ''"
  >
    <div class="features-img">
      <nuxt-img :src="feature.img" alt="features" :placeholder="[70]" provider="static" />
    </div>

    <div class="features-text">
      <h3>{{ feature.title }}</h3>
      <p>
        {{ feature.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
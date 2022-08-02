<template>
  <div
    class="features-row"
    :class="feature.direction == 'reverse' ? 'features-row-reverse' : ''"
  >
    <div class="features-img">
      <img :src="getImgUrl(feature.img)" alt="" />
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
import global from '@/mixins/global.js'
export default {
  mixins: [global],
  props: {
    feature: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
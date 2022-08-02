<template>
  <div>
    <div class="primary-card">
      <img :src="getImgUrl(primaryCard.img)" alt="" />
      <h4>{{ primaryCard.title }}</h4>
      <p>
        {{ primaryCard.content }}
      </p>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  props: {
    primaryCard: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

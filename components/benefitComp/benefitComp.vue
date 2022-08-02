<template>
  <div>
    <div class="benefit">
      <img :src="getImgUrl(benefit.img)" alt="benefitIcon" />

      <div class="benefit-text">
        <h4>{{ benefit.title }}</h4>
        <p>
          {{ benefit.content }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  props: {
    benefit: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

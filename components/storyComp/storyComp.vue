<template>
  <div>
    <div
      class="story"
      :class="data.direction == 'reverse' ? 'story-reverse ' : ''"
      :style="data.isLast ? 'margin-bottom:0px;' : ''"
    >
      <div class="story-img">
        <img :src="getImgUrl(data.img)" alt="" />
      </div>

      <div class="story-content">
        <h1>{{ data.title }}</h1>

        <p>
          {{ data.content }}
        </p>

        <div v-if="data.isStory">
          <h4>{{ data.userName }}</h4>
          <h5>{{ data.company }}</h5>

          <img :src="getImgUrl(data.companyImage)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.story-reverse {
  flex-direction: row-reverse;
}
</style>

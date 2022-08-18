<template>
  <div>
    <div
      class="story"
      :class="data.direction == 'reverse' ? 'story-reverse ' : ''"
      :style="data.isLast ? 'margin-bottom:0px;' : ''"
    >
      <div class="story-img">
        <nuxt-img :src="data.img" alt="story" :placeholder="[70]" />
      </div>

      <div class="story-content">
        <h1>{{ data.title }}</h1>

        <p>
          {{ data.content }}
        </p>

        <div v-if="data.isStory">
          <h4>{{ data.userName }}</h4>
          <h5>{{ data.company }}</h5>

          <nuxt-img :src="data.companyImage" alt="company" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
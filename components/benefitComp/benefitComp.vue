<template>
  <div class="benefit">
    <nuxt-img :src="benefit.img" alt="benefitIcon" :placeholder="[70]" />
    <div class="benefit-text">
      <h4>{{ benefit.title }}</h4>
      <p>
        {{ benefit.content }}
      </p>
    </div>
    <div class="btn-secondary" @click="$nuxt.$emit('openModal')">
      {{ $t("createMyStore") }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    benefit: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

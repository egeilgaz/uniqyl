<template>
  <div class="benefit">
    <img :src="getImgUrl(data.img)" alt="" />

    <div class="benefit-text">
      <h4>{{ data.title }}</h4>
      <p>
        {{ data.content }}
      </p>
    </div>

    <a href="#" class="btn-secondary">{{$t('createMyStore')}}</a>
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

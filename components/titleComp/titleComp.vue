<template>
  <div class="hero bg-color">
    <h1>
      {{ title.title }}
    </h1>
    <p>
      {{ title.content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

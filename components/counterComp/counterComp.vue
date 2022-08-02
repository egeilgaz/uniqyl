<template>
  <div class="counter">
    <h1>{{ data.count }}</h1>
    <p>{{ data.content }}</p>
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

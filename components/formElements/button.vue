<template>
  <a href="to" class="btn btn-primary">{{ buttonName }}</a>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "",
    },
  },
};
</script>

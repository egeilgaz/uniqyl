<template>
  <NuxtLink class="btn btn-primary" :to="to"> {{ buttonName }} </NuxtLink>
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

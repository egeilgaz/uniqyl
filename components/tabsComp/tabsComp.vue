<template>
  <div class="tabs">
    <!-- tab-active -->
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="btn btn-primary tab-link"
      :class="tab.active ? 'tab-active' : null"
      @click="$emit('changeTab', tab.id)"
    >
      {{ tab.title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

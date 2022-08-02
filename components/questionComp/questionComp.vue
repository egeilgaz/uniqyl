<template>
  <div class="faq"  @click="$emit('showAnswer')">
    <!-- faq question -->
    <h1 class="faq-page">
      <span> {{ question.title }} </span>
    </h1>
    <!-- faq answer -->
    <div v-if="showAnswer" class="faq-body">
      <p>
        {{ question.answer }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      default: () => {},
    },
    showAnswer: false
  },
};
</script>

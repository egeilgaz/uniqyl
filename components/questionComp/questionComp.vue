<template>
  <div class="faq">
    <!-- faq question -->
    <h1 class="faq-page" @click="$emit('showAnswer')">
      <span> {{ question.title }} </span>
    </h1>
    <!-- faq answer -->
    <div class="faq-body" :style="showAnswer ? 'height:100px;' : null">
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
    showAnswer: false,
  },
};
</script>

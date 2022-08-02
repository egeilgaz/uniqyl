<template>
  <div class="input-box">
    <label for="name">{{ label }}</label>
    <input v-if="!isTextArea" :type="inputType" />
    <textarea v-else name="textarea" id="textarea" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    isTextArea: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

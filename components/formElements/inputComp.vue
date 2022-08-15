<template>
  <div class="input-box">
    <label for="name" :class="inputSize == 'sm' ? 'sm-label' : ''">{{
      label
    }}</label>
    <input
      v-if="!isTextArea"
      :type="inputType"
      :class="inputSize == 'sm' ? 'sm-input' : ''"
    />
    <textarea
      v-else
      name="textarea"
      class="text-area"
      id="textarea"
      cols="30"
      rows="10"
    ></textarea>
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
    inputSize: {
      type: String,
      default: "md",
    },
  },
};
</script>

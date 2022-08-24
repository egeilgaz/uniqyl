<template>
  <transition name="fade">
    <div class="modal-mask" ref="modalMask" tabindex="0">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="close-btn" @click="$emit('closeModal')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: #1a1a1a"
            >
              <path
                d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
              ></path>
            </svg>
          </div>
          <div class="modal-header" v-if="title">
            <h2>{{ title }}</h2>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
            <div class="btn-section">
              <div class="btn btn-primary btn-nav" @click="$emit('nextPage',testStatus+1)">
               {{ testStatus == 4 ? $t('okay') : $t('next') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "mainModal",
  props: {
    title: {
      default: "",
    },
    testStatus: {
      type: Number,
    },
  },
};
</script>
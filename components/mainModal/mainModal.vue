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
                İleri
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

<style lang="scss">
.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.modal-mask {
  position: fixed;
  z-index: 1060;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  .btn {
    text-align: center;
    min-width: 200px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    &-section {
      position: relative;
    }
  }
}

.modal {
  &-wrapper {
    position: relative;
    margin-left: 30%;
    margin-right: 30%;
    margin-top: 40px;
    max-height: calc(100% - 80px);
  }
  &-container {
    width: 100%;
    margin: 0px auto;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-items: center;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: relative;
    height: 100%;
  }

  &-header {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  &-body {
    padding: 1rem 3rem 2rem 3rem;
    .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.logo {
  margin-left: 5px;
  &-list {
    display: flex;
    margin-top: 15px;
  }
  svg {
    border: 1px solid var(--color-purple);
    border-radius: 100%;
    background-color: white;
    padding: 5px;
    width: 35px;
    height: 35px;
  }
}

.logo-section {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.form {
  padding: 10px 35px;
  .btn {
    margin-top: 10px;
  }
  &-2 {
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px;
  }
}
@media (max-width: 1250px) {
  .form {
    padding: 10px 0px;
  }
}

@media (max-width: 1080px) {
  .modal-wrapper {
    margin-left: 5%;
    margin-right: 5%;
  }
}

@media (max-width: 600px) {
  .modal-header h2 {
    font-size: 1.3rem !important;
  }
}

@media (max-width: 1080px) {
  .modal-body {
    padding: 2rem 3rem;
  }
  .modal-container {
    padding: 2rem 4rem;
  }
}

@media (max-width: 768px) {
  .modal-container {
    padding: 2rem 1rem;
  }
  .modal-body {
    padding: 2rem;
  }
}

@media (max-width: 550px) {
  .modal-body {
    padding: 2rem;
  }
}
</style>

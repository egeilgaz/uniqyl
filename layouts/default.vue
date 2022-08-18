<template>
  <div>
    <HeaderComp @openModal="openModal" />
    <Nuxt />
    <FooterComp />
    <MainModal
      v-if="createModalStatus"
      :testStatus="testStatus"
      @closeModal="closeModal"
      @nextPage="nextPage"
      title="Ücretsiz Deneme Sürümünü Başlat"
    >
      <div slot="body">
        <div v-if="testStatus == 1">
          <div class="register-form">
            <formElementsInputComp label="Ad" inputType="text" inputSize="sm" />
            <formElementsInputComp
              label="Soyad"
              inputType="text"
              inputSize="sm"
            />
            <formElementsInputComp
              label="E-Posta"
              inputType="email"
              inputSize="sm"
            />
            <formElementsInputComp
              label="Telefon"
              inputType="phone"
              inputSize="sm"
            />
            <formElementsInputComp
              label="Şifre"
              inputType="password"
              inputSize="sm"
            />
            <formElementsInputComp
              label="Şifre Tekrarı"
              inputType="password"
              inputSize="sm"
            />
          </div>
          <!-- <div class="logo-section">
            <h4 class="second-title">VEYA</h4>
            <div class="logo-list">
              <div class="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 172 172"
                  style="fill: #000000"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#6a5fde">
                      <path
                        d="M86.02239,17.2c-38.00627,0 -68.82239,30.8052 -68.82239,68.8c0,37.9948 30.81613,68.8 68.82239,68.8c57.39067,0 70.32032,-53.27987 64.93672,-80.26667h-7.62578h-13.00078h-44.33255v22.93333h44.36614c-5.10025,19.76997 -23.004,34.4 -44.36614,34.4c-25.32987,0 -45.86667,-20.5368 -45.86667,-45.86667c0,-25.32987 20.5368,-45.86667 45.86667,-45.86667c11.51827,0 22.01108,4.27563 30.06641,11.2875l16.29297,-16.28177c-12.23494,-11.1456 -28.48912,-17.93906 -46.33698,-17.93906z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 172 172"
                  style="fill: #000000"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#6a5fde">
                      <path
                        d="M146.57267,56.10067c-0.7052,0.44147 -17.4924,9.75813 -17.4924,30.41533c0.7912,23.55827 21.18467,31.82 21.5344,31.82c-0.34973,0.44147 -3.0788,11.25453 -11.1628,22.58933c-6.4156,9.76387 -13.5364,19.608 -24.34947,19.608c-10.2856,0 -13.97787,-6.50733 -25.84587,-6.50733c-12.7452,0 -16.35147,6.50733 -26.1096,6.50733c-10.81307,0 -18.46133,-10.3716 -25.22667,-20.04373c-8.7892,-12.6592 -16.25973,-32.5252 -16.52347,-51.6c-0.17773,-10.10787 1.76013,-20.04373 6.67933,-28.4832c6.94307,-11.782 19.33853,-19.78 32.87493,-20.04373c10.3716,-0.34973 19.60227,7.1208 25.93187,7.1208c6.06587,0 17.4064,-7.1208 30.2376,-7.1208c5.5384,0.00573 20.30747,1.67413 29.45213,15.738zM86.00573,38.34453c-1.84613,-9.23067 3.2508,-18.46133 7.998,-24.34947c6.06587,-7.1208 15.64627,-11.954 23.908,-11.954c0.52747,9.23067 -2.81507,18.2836 -8.7892,24.87693c-5.36067,7.1208 -14.59133,12.48147 -23.1168,11.42653z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 172 172"
                  style="fill: #000000"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#6a5fde">
                      <path
                        d="M68.8,154.8v-68.8h-22.93333v-22.93333h22.93333v-12.3152c0,-23.31747 11.35773,-33.55147 30.7364,-33.55147c9.28227,0 14.19,0.688 16.512,1.00333v21.93h-13.21533c-8.22733,0 -11.09973,4.34013 -11.09973,13.13507v9.79827h24.10867l-3.27373,22.93333h-20.83493v68.8z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 172 172"
                  style="fill: #000000"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#6a5fde">
                      <path
                        d="M51.6,143.33333h-28.66667v-86h28.66667zM37.2724,45.86667c-7.9292,0 -14.33907,-6.42707 -14.33907,-14.33907c0,-7.912 6.42133,-14.3276 14.33907,-14.3276c7.90053,0 14.3276,6.42707 14.3276,14.3276c0,7.912 -6.42707,14.33907 -14.3276,14.33907zM154.8,143.33333h-27.56013v-41.85333c0,-9.98173 -0.1892,-22.81867 -14.3276,-22.81867c-14.35053,0 -16.55787,10.8704 -16.55787,22.09627v42.57573h-27.5544v-86.06307h26.4536v11.75907h0.37267c3.6808,-6.76533 12.6764,-13.8976 26.0924,-13.8976c27.92133,0 33.08133,17.82493 33.08133,40.99907z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div> -->
        </div>
        <div v-else-if="testStatus == 2">
          <div class="register-form-2">
            <p>telefonunuza gelen 6 haneli şifreyi giriniz.</p>
            <CodeInput
              class="verification"
              :loading="false"
              v-on:change="onChange"
              v-on:complete="onComplete"
            />
          </div>
        </div>
        <div v-else-if="testStatus == 3">
          <div class="register-form-3">
            <formElementsInputComp
              label="Mağaza Adı"
              inputType="text"
              inputSize="sm"
            />
          </div>
        </div>
        <div v-else-if="testStatus == 4">
          <div class="register-form-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 172 172"
              style="fill: #000000"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#3498db">
                  <path
                    d="M86,6.88c-43.62952,0 -79.12,35.49048 -79.12,79.12c0,43.62952 35.49048,79.12 79.12,79.12c43.62952,0 79.12,-35.49048 79.12,-79.12c0,-15.6864 -4.60863,-30.30871 -12.51031,-42.61703l-4.70984,5.56313c6.5188,10.84976 10.34015,23.5003 10.34015,37.0539c0,39.83176 -32.40824,72.24 -72.24,72.24c-39.83176,0 -72.24,-32.40824 -72.24,-72.24c0,-39.83176 32.40824,-72.24 72.24,-72.24c18.72392,0 35.75504,7.22319 48.60344,18.95359l4.50156,-5.31453c-14.0524,-12.7452 -32.6886,-20.51906 -53.105,-20.51906zM148.73297,26.67344l-66.4686,78.43469l-27.97687,-26.09563l-4.68969,5.03235l33.25109,31.01375l71.13813,-83.93735z"
                  ></path>
                </g>
              </g>
            </svg>
            <p>buraya bilgilendirme yazısı gelecek</p>
          </div>
        </div>
      </div>
    </MainModal>
  </div>
</template>

<script>
export default {
  components: {
    [process.client && "CodeInput"]: () =>
      import("vue-verification-code-input"),
  },
  data() {
    return {
      createModalStatus: false,
      testStatus: 1,
    };
  },
  created() {
    this.$nuxt.$on("openModal", () => {
      this.createModalStatus = true;
    });
  },
  methods: {
    openModal() {
      this.createModalStatus = true;
    },
    closeModal() {
      this.createModalStatus = false;
    },
    nextPage(page) {
      this.testStatus = page;
    },
    onChange(v) {
      console.log("onChange ", v);
    },
    onComplete(v) {
      console.log("onComplete ", v);
    },
  },
};
</script>
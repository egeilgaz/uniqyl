<template>
  <div
    :class="[
      routeName == 'features' ? 'features-page' : null,
      routeName == 'price' ? 'features-page price-page' : null,
    ]"
  >
    <div style="background-color: var(--color-white-5)">
      <header>
        <nav class="nav">
          <a href="#">
            <img src="../../assets/img/logo.png" alt="" />
          </a>

          <div class="nav-list" :class="menuStatus ? 'active' : ''">
            <a href="" class="nav-link">Özellikler</a>
            <a href="" class="nav-link">Fiyatlar</a>
            <a href="" class="nav-link">Referanslar</a>
            <a href="" class="btn btn-primary btn-nav">Mağazamı Oluştur</a>
          </div>

          <div class="nav-btn" id="navbtn" @click="openMenu">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </nav>

        <div
          v-if="routeName == 'features'"
          class="features-row features-row-10"
        >
          <div class="features-text">
            <h1>
              Mağazanızın yönetiminde <br />
              güçlü özelliklere sahip olun
            </h1>
            <h3>Tüm Pazaryeri Entegrasyonları</h3>
            <p>
              Ürünlerinizi tek bir ekrandan tüm pazaryerlerine ortak şekilde
              yayınlayın ve kolayca düzenleyin.
            </p>

            <a href="#" class="btn btn-secondary">Hemen Başla</a>
          </div>

          <div class="features-img">
            <img src="../../assets/img/features-img-1.png" alt="" />
          </div>
        </div>

        <div v-if="routeName == 'price'" class="features-row">
          <div class="features-text">
            <titleComp :title="title" />
            <a href="#" class="btn btn-secondary">Hemen Başla</a>
          </div>

          <div class="features-img">
            <img src="../../assets/img/price-img.png" alt="" />
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuStatus: false,
      title: {
        title: "Ücretsiz deneme sürümlü esnek paketlerimiz",
        content:
          "Uniqyl 14 gün ücretsiz deneme sürmü ile E-ticaret sitenizi oluşturmaya hemen başlayın.",
      },
    };
  },
  computed: {
    routeName() {
      let routeName = this.$route.name;
      return routeName;
    },
  },
  methods: {
    openMenu() {
      this.menuStatus = !this.menuStatus;
    },
  },
};
</script>

<template>
  <div
    :class="[
      routeName == 'features' ? 'features-page' : null,
      routeName == 'price' ? 'features-page price-page' : null,
    ]"
  >
    <div class="header-bg-color">
      <header>
        <nav class="nav">
          <NuxtLink class="nav-link" :to="localePath('/')">
            <nuxt-img src="logo.png" alt="logo" />
          </NuxtLink>
          <div class="nav-list" :class="menuStatus ? 'active' : ''">
            <NuxtLink class="nav-link" :to="localePath('features')">
              {{ $t("features") }}
            </NuxtLink>
            <NuxtLink class="nav-link" :to="localePath('price')">
              {{ $t("prices") }}
            </NuxtLink>
            <NuxtLink class="nav-link" :to="localePath('references')">
              {{ $t("references") }}
            </NuxtLink>
            <div class="nav-link">
              <div class="btn btn-primary btn-nav" @click="$emit('openModal')">
                {{ $t("createMyStore") }}
              </div>
            </div>
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
        <div v-if="routeName == 'features'" class="features-row features-row-1">
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
            <div class="btn btn-secondary" @click="$emit('openModal')">
              {{ $t("startNow") }}
            </div>
          </div>
          <div class="features-img">
            <nuxt-img
              src="features-img-1.png"
              :placeholder="[95]"
              alt="feature"
            />
          </div>
        </div>
        <div v-if="routeName == 'price'" class="features-row">
          <div class="features-text">
            <titleComp :title="title" />
            <div class="btn btn-secondary" @click="$emit('openModal')">
              {{ $t("startNow") }}
            </div>
          </div>
          <div class="features-img">
            <nuxt-img src="price-img.png" alt="price" />
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
      let routeName = this.$route.meta.name;
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

<template>
  <footer>
    <div class="footer">
      <div class="footer-rows">
        <div class="footer-row footer-row-1">
          <nuxt-img src="logo-white.png" alt="logo" provider="static" />

          <div class="footer-social-links">
            <NuxtLink class="nav-link" to="/">
              <img src="../../static/images/facebook.png" alt="facebook" />
            </NuxtLink>
            <NuxtLink class="nav-link" to="/">
              <img src="../../static/images/twitter.png" alt="twitter" />
            </NuxtLink>
            <NuxtLink class="nav-link" to="/">
              <img src="../../static/images/instagram.png" alt="instagram" />
            </NuxtLink>
            <NuxtLink class="nav-link" to="/">
              <img src="../../static/images/youtube.png" alt="youtube" />
            </NuxtLink>
          </div>
        </div>

        <div class="footer-row footer-row-2">
          <div class="footer-links">
            <h4>Ürün</h4>
            <NuxtLink to="features"> Özellikler </NuxtLink>
            <NuxtLink to="price"> Fiyatlar </NuxtLink>
            <NuxtLink to="references"> Referanslar </NuxtLink>
            <NuxtLink to="/"> Başarı Hikayeleri </NuxtLink>
          </div>

          <div class="footer-links">
            <h4>Şirket</h4>
            <a href="">Hakkımızda</a>
            <a href="">Kariyer</a>
            <a href="">Blog</a>
          </div>

          <div class="footer-links">
            <h4>Müşteri Hizmetleri</h4>
            <NuxtLink to="/"> Destek Merkezi </NuxtLink>
            <NuxtLink to="/"> İletişim </NuxtLink>
            <NuxtLink to="/"> Kullanım Politikası </NuxtLink>
            <NuxtLink to="/"> Gizlilik Sözleşmesi </NuxtLink>
            <NuxtLink to="questions"> Sık Sorulan Sorular </NuxtLink>

          </div>
        </div>

        <div class="footer-row footer-row-3">
          <div class="footer-contact">
            <a>
              <img src="../../static/images/headphones.png" alt="contact" />
              444 44 444
            </a>
            <p>Pazartesi 08.30 - 18.00</p>
            <p>Cumartesi 08.30 - 13.00</p>
          </div>

          <div class="dropdown">
            <div class="dropdown-box" @click="openDropdown()">
              <button>Türkçe</button>
              <img
                class="dropbtn"
                src="../../static/images/dropdown-arrow.png"
                alt="dropdown"
              />
            </div>
            <div
              id="myDropdown"
              class="dropdown-content"
              :class="dropdownStatus ? 'show' : ''"
            >
              <a href="#">Türkçe</a>
              <a href="#">English</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      © 2022 Mapa | Tüm Hakları Saklıdır.

      <img src="../../static/images/star.png" alt="star" />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      dropdownStatus: false,
    };
  },
  methods: {
    openDropdown() {
      this.dropdownStatus = !this.dropdownStatus;
    },
  },
};
</script>

<style scoped>
.footer-bottom {
  margin-top: 0px;
}
</style>

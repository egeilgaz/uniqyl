<template>
  <footer>
    <div class="footer">
      <div class="footer-rows">
        <div class="footer-row footer-row-1">
          <img src="../../assets/img/logo-white.png" alt="" />

          <div class="footer-social-links">
            <a href="#"><img src="../../assets/img/facebook.png" alt="" /></a>
            <a href="#"><img src="../../assets/img/twitter.png" alt="" /></a>
            <a href="#"><img src="../../assets/img/instagram.png" alt="" /></a>
            <a href="#"><img src="../../assets/img/youtube.png" alt="" /></a>
          </div>
        </div>

        <div class="footer-row footer-row-2">
          <div class="footer-links">
            <h4>Ürün</h4>
            <a href="">Özellikler</a>
            <a href="">Fiyatlar</a>
            <a href="">Referanslar</a>
            <a href="">Başarı Hikayeleri</a>
          </div>

          <div class="footer-links">
            <h4>Şirket</h4>
            <a href="">Hakkımızda</a>
            <a href="">Kariyer</a>
            <a href="">Blog</a>
          </div>

          <div class="footer-links">
            <h4>Müşteri Hizmetleri</h4>
            <a href="">Destek Merkezi</a>
            <a href="">İletişim</a>
            <a href="">Kullanım Politikası</a>
            <a href="">Gizlilik Sözleşmesi</a>
            <a href="">Sık Sorulan Sorular</a>
          </div>
        </div>

        <div class="footer-row footer-row-3">
          <div class="footer-contact">
            <a>
              <img src="../../assets/img/headphones.png" alt="" />
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
                src="../../assets/img/dropdown-arrow.png"
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
              <!-- <a href="#">English</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      © 2022 Mapa | Tüm Hakları Saklıdır.

      <img src="../../assets/img/star.png" alt="" />
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

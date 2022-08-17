<template>
  <div v-cloak>
    <div class="home-hero">
      <h1>
        Bugün hayalinizdeki <br />
        e-ticaret mağazasını oluşturun.
      </h1>
      <div class="home-hero-img">
        <nuxt-img src="home-hero-img.png" :placeholder="[100, 50, 70]" provider="static" />
      </div>
      <p>
        E-ticaret operasyonlarınızı kolayca yönetin, her şeyi otomatikleştirin
        ve tüm pazaryerlerinde ürünlerinizi sergileyin.
      </p>

      <formElementsButton buttonName="Mağazamı Oluştur" to="/" />
    </div>

    <!-- partner section start here -->
    <section class="partners">
      <div class="partners-imgs">
        <nuxt-img
          src="yayla-logo.png"
          alt="yayla"
          :placeholder="[100, 50, 70]"
          provider="static"
        />
        <nuxt-img
          src="unal-logo.png"
          alt="unal"
          :placeholder="[100, 50, 70]"
          provider="static"
        />
        <nuxt-img
          src="matex-logo.png"
          alt="matex"
          :placeholder="[100, 50, 70]"
          provider="static"
        />
        <nuxt-img
          src="oskar-logo.png"
          alt="oskar"
          :placeholder="[100, 50, 70]"
          provider="static"
        />
      </div>
      <NuxtLink class="partners-link" to="/"> ve çok daha fazlası + </NuxtLink>
    </section>

    <!-- features section start here -->
    <section class="features">
      <div class="container">
        <h1 class="heading-primary">
          Mağazanızın yönetiminde <br />güçlü özelliklere sahip olun
        </h1>

        <featuresComp
          v-for="feature in features"
          :key="feature.id"
          :feature="feature"
        />
      </div>
    </section>

    <!-- services section start here -->
    <section class="services">
      <div class="services-img">
        <nuxt-img src="e-commerce-img.png" alt="e-commerce" provider="static" />
      </div>

      <div class="services-text">
        <h1>
          Tasarımıyla göz kamaştıran <br />
          bir e-ticaret sitesine sahip olun.
        </h1>

        <p>
          Özenle hazırlanan e-ticaret tema şablonlarından birisini seçin veya
          özel olarak hazırlanmasını istediğiniz temanızla tüm platformlarda
          ziyaretçilerinizi karşılayın.
        </p>

        <div class="services-benefits">
          <benefitComp
            v-for="benefit in benefits"
            :key="benefit.id"
            :benefit="benefit"
          />
        </div>
      </div>
    </section>

    <!-- benefits section start here -->
    <section class="benefits">
      <div class="benefits-top">
        <div class="benefits-img">
          <nuxt-img src="benefits-section-img.png" alt="benefit" provider="static" />
        </div>

        <div class="benefits-text">
          <h1>
            Tek bir tuşla <br />
            tüm işlerinizi hızlıca çözün.
          </h1>
          <p>
            Toplu ürün yükleyin, siparişlerinizi takip edin, muhasebe
            programlarına verilerinizi gönderin ve tüm operasyonlarınızın
            kullanım kolaylığını keşfedin.
          </p>
        </div>
      </div>

      <div class="primary-cards">
        <primaryCardComp
          v-for="primaryCard in primaryCards"
          :key="primaryCard.id"
          :primaryCard="primaryCard"
        />
      </div>

      <formElementsButton buttonName="Mağazamı Oluştur" to="/" />
    </section>

    <!-- testimonail section start here -->

    <section class="testimonial">
      <slider :autoplay="false" animation="fade" height="775px">
        <slider-item v-for="(i, index) in list" :key="index" :style="i">
          <div class="testimonial-slide">
            <div class="testimonial-img">
              <img :src="getImgUrl(i.img)" alt="slideImg" />
            </div>

            <div class="testimonial-text">
              <h1>{{ i.title }}</h1>

              <p>
                {{ i.content }}
              </p>

              <div class="testimonial-person">
                <h3>{{ i.userName }}</h3>
                <p>{{ i.companyName }}</p>
                <img  :src="getImgUrl(i.companyImg)" alt="companyImg" />
              </div>

              <div class="count">
                <span>0{{ index + 1 }}/</span>0{{ list.length }}
              </div>
            </div>
          </div>
        </slider-item>
      </slider>
    </section>
  </div>
</template>

<script>
import global from "@/mixins/global.js";

export default {
  mixins: [global],
  data() {
    return {
      isLoaded: false,
      height: 550,
      features: [
        {
          id: 1,
          img: "features-img-1.png",
          title: "Tüm Pazaryeri Entegrasyonları",
          content:
            "Ürünlerinizi tek bir ekrandan tüm pazaryerlerine ortak şekilde  yayınlayın ve kolayca düzenleyin.",
          direction: "",
        },
        {
          id: 2,
          img: "features-img-2.png",
          title: "Gelişmiş Kargo Yönetimi",
          content:
            "Siz sadece mağazanızı büyütmeye odaklanın diye tüm kargo süreçlerinizi biz otomatikleştiriyoruz.",
          direction: "reverse",
        },
        {
          id: 3,
          img: "features-img-3.png",
          title: "Rakip Rekabet Analizi Sistemi",
          content:
            "Piyasada bulunan tüm ürünleri takibe alarak fiyat ve stok değişimlerinden anında haberdar olun.",
          direction: "",
        },
        {
          id: 4,
          img: "features-img-4.png",
          title: "Ziyaretçi Segmentasyonu ve Dönüşüm Artırım Araçları",
          content:
            "E-ticaret sitenizi ziyaret eden kullanıcıları KVKK kapsamında sınıflandırarak, önceki ziyaretinde gezip satın alma yapmadığı kategorileri sayfa sıralamasında üstlere taşıyoruz.",
          direction: "reverse",
        },
        {
          id: 5,
          img: "features-img-5.png",
          title: "Gelişmiş Tahsilat Çözümleri",
          content:
            "Birden fazla banka ile Sanal POS anlaşması yaparak, müşterinizin kartının ait olduğu banka POS’u üzerinden nakit akışı veya kredi kartı puanı ile tahsilat yapabilirsiniz.",
          direction: "",
        },
        {
          id: 6,
          img: "features-img-6.png",
          title: "Gelişmiş Tahsilat Çözümleri",
          content:
            "SAP, LOGO, LIKOM, MİKRO, NEBİM gibi ilişkisel veri tabanı kullanan ve/veya web servisi olan tüm ERP yazılımları ile entegre olarak çalışın.",
          direction: "reverse",
        },
      ],
      benefits: [
        {
          id: 1,
          img: "responsive.png",
          title: "Tüm platformlarla duyarlı tasarım",
          content:
            "Mağazanızın çeşitli cihazlarda ve tüm ekran boyutlarında iyi görüntülenmesini sağlanır.",
        },
        {
          id: 1,
          img: "searching.png",
          title: "Arama motorlarında üst sıralarda olun",
          content:
            "Rakiplerinizden önde olmanızı ve daha fazla ziyaretçiye ulaşabilmenizi sağlayan SEO araçlarına sahip olun.",
        },
        {
          id: 1,
          img: "admin.png",
          title: "Vitrin düzeninizde özgür olun",
          content:
            "İstediğiniz zaman vitrinlerinizi ve banner'larınızı düzenleyin, öne çıkarın ve kampanya uygulayın.",
        },
      ],
      primaryCards: [
        {
          id: 1,
          img: "product.png",
          title: "Toplu Ürün Yükleme ve Güncelleme",
          content:
            "Install bulk products, track your orders, submit your data to accounting programs, and discover the ease of use of all your operations.",
          componentType: "primary",
        },
        {
          id: 2,
          img: "negotiation.png",
          title: "Paket ve Ekipman Yönetimi",
          content:
            "Install bulk products, track your orders, submit your data to accounting programs, and discover the ease of use of all your operations.",
          componentType: "primary",
        },
        {
          id: 3,
          img: "review.png",
          title: "Müşteri ve Üye Yönetimi",
          content:
            "Install bulk products, track your orders, submit your data to accounting programs, and discover the ease of use of all your operations.",
          componentType: "primary",
        },
        {
          id: 4,
          img: "bullhorn.png",
          title: "Kampanya ve Etkileşimler",
          content:
            "Install bulk products, track your orders, submit your data to accounting programs, and discover the ease of use of all your operations.",
          componentType: "primary",
        },
        {
          id: 5,
          img: "dashboard.png",
          title: "Ayrıntılı Raporlandırmalar",
          content:
            "Install bulk products, track your orders, submit your data to accounting programs, and discover the ease of use of all your operations.",
          componentType: "primary",
        },
      ],
      list: [
        {
          id: 1,
          img: "testimonial-img-1.png",
          title: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu mollis nulla ipsum, dui. Aenean ornare turpis nam nibh luctus adipiscing tempus, elit est.",
          userName: "Ömer Faruk Erbil",
          companyName: "CEO, Ünal Kuruyemiş",
          companyImg: "unal-logo-white.png",
        },
        {
          id: 2,
          img: "testimonial-img-1.png",
          title: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu mollis nulla ipsum, dui. Aenean ornare turpis nam nibh luctus adipiscing tempus, elit est.",
          userName: "Ömer Faruk Erbil",
          companyName: "CEO, Ünal Kuruyemiş",
          companyImg: "unal-logo-white.png",
        },
        {
          id: 3,
          img: "testimonial-img-1.png",
          title: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu mollis nulla ipsum, dui. Aenean ornare turpis nam nibh luctus adipiscing tempus, elit est.",
          userName: "Ömer Faruk Erbil",
          companyName: "CEO, Ünal Kuruyemiş",
          companyImg: "unal-logo-white.png",
        },
      ],
    };
  },
  methods: {
    onImgLoad() {
      this.isLoaded = true;
    },
  },
};
</script>

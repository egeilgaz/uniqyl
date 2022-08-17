<template>
  <div class="features-page">
    <!-- features section start here -->
    <section class="features">
      <div class="container">
        <featuresComp
          v-for="feature in features1"
          :key="feature.id"
          :feature="feature"
        />
      </div>
    </section>

    <!-- Visitor Section -->
    <section class="visitors">
      <div class="container">
        <img src="../static/images/visitors.png" alt="visitor" />

        <div class="visitors-text">
          <h2>Ziyaretçi Segmentasyonu ve Dönüşüm Artırım Araçları</h2>

          <div class="visitors-text-right">
            <p>
              E-ticaret sitenizi ziyaret eden kullanıcıları KVKK kapsamında
              sınıflandırarak, önceki ziyaretinde gezip satın alma yapmadığı
              kategorileri sayfa sıralamasında üstlere taşıyoruz.
            </p>

            <a href="#!" class="btn btn-secondary">Hemen Başla</a>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <featuresComp
          v-for="feature in features2"
          :key="feature.id"
          :feature="feature"
        />
      </div>
    </section>

    <!-- services section start here -->
    <section class="services">
      <div class="services-img">
        <img src="../static/images/e-commerce-img.png" alt="services" />
      </div>

      <div class="services-text">
        <titleComp :title="title" />

        <div class="services-benefits">
          <benefitComp
            v-for="benefitCard in benefitCards"
            :key="benefitCard.id"
            :benefit="benefitCard"
          />
        </div>
      </div>
    </section>

    <!-- benefits section start here -->
    <section class="benefits">
      <div class="benefits-top">
        <div class="benefits-img">
          <img src="../static/images/benefits-section-img-2.png" alt="benefits" />
        </div>

        <div class="benefits-text">
          
          <titleComp :title="title2" />

          <a href="#" class="btn-secondary">Mağazamı Oluştur</a>
        </div>
      </div>

      <div class="primary-cards">
        <primaryCardComp
          v-for="primaryCard in primaryCards"
          :key="primaryCard.id"
          :primaryCard="primaryCard"
        />
      </div>

      <a href="#" class="btn btn-primary">Mağazamı Oluştur</a>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      features1: [
        {
          id: 1,
          img: "features-img-2.png",
          title: "Gelişmiş Kargo Yönetimi",
          content:
            "Siz sadece mağazanızı büyütmeye odaklanın diye tüm kargo süreçlerinizi biz otomatikleştiriyoruz.",
          direction: "reverse",
        },
        {
          id: 2,
          img: "features-img-3.png",
          title: "Rakip Rekabet Analizi Sistemi",
          content:
            "Piyasada bulunan tüm ürünleri takibe alarak fiyat ve stok değişimlerinden anında haberdar olun.",
          direction: "",
        },
      ],
      features2: [
        {
          id: 1,
          img: "features-img-5.png",
          title: "Gelişmiş Tahsilat Çözümleri",
          content:
            "Birden fazla banka ile Sanal POS anlaşması yaparak, müşterinizin kartının ait olduğu banka POS’u üzerinden nakit akışı veya kredi kartı puanı ile tahsilat yapabilirsiniz.",
          direction: "",
        },
        {
          id: 2,
          img: "features-img-6.png",
          title: "Gelişmiş Tahsilat Çözümleri",
          content:
            "SAP, LOGO, LIKOM, MİKRO, NEBİM gibi ilişkisel veri tabanı kullanan ve/veya web servisi olan tüm ERP yazılımları ile entegre olarak çalışın.",
          direction: "reverse",
        },
      ],
      benefitCards: [
        {
          id: 1,
          img: "responsive.png",
          title: "Tüm platformlarla duyarlı tasarım",
          content:
            "Mağazanızın çeşitli cihazlarda ve tüm ekran boyutlarında iyi görüntülenmesini sağlanır.",
        },
        {
          id: 2,
          img: "searching.png",
          title: "Arama motorlarında üst sıralarda olun",
          content:
            "Rakiplerinizden önde olmanızı ve daha fazla ziyaretçiye ulaşabilmenizi sağlayan SEO araçlarına sahip olun.",
        },
        {
          id: 3,
          img: "admin.png",
          title: "Vitrin düzeninizde özgür olun",
          content:
            "İstediğiniz zaman vitrinlerinizi ve banner'larınızı düzenleyin, öne çıkarın ve kampanya uygulayın.",
        },
      ],
      title: {
        title: "Tasarımıyla Göz Kamaştıran Bir E-Ticaret Sitesine Sahip Olun",
        content:
          "Özenle hazırlanan e-ticaret tema şablonlarından birisini seçin veya özel olarak hazırlanmasını istediğiniz temanızla tüm platformlarda ziyaretçilerinizi karşılayın.",
      },
      title2: {
        title: "Tek bir tuşla tüm işlerinizi hızlıca çözün.",
        content:
          "Toplu ürün yükleyin, siparişlerinizi takip edin, muhasebe programlarına verilerinizi gönderin ve tüm operasyonlarınızın kullanım kolaylığını keşfedin.",
      },
    };
  },
};
</script>

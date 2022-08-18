<template>
  <div class="wrapper features-page price-page">
    <div class="price-section">
      <div class="price-section-top">
        <titleComp :title="title2" />
        <tabsComp :tabs="tabs" @changeTab="changeTab" />
        <div class="tab-cont">
          <div class="tab-content tab-content-1">
            <priceCardComp
              v-for="price in prices"
              :key="price.id"
              :price="price"
            />
          </div>
        </div>
      </div>
      <div class="price-table">
        <div class="container">
          <div class="header">
            <div class="header-left">
              <titleComp :title="title3" />
            </div>
            <div class="header-right">
              <tabsComp :tabs="tabs" @changeTab="changeTab" />
            </div>
          </div>
          <div class="tab-content-list" id="montly-list" style="display: block">
            <div class="columns">
              <priceListComp
                v-for="list in lists"
                :key="list.id"
                :list="list"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  meta: {
    name:"price"
  },
  data() {
    return {
      title2: {
        title: "Basit, Şeffaf Fiyatlandırma",
        content: "Sözleşme yok. Sürpriz ücret yok.",
      },
      title3: {
        title: "Paket Özelliklerini Karşılaştırın",
        content: "Size uygun paketi seçin, denemeye hemen başlayın.",
      },
      tabs: [
        {
          id: 1,
          tabData: "montly",
        },
        {
          id: 2,
          tabData: "yearly",
        },
      ],
      prices: [
        {
          id: 1,
          isFeatured: false,
          price: "100₺",
          time: "Aylık",
          package: "Standart",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          features: [
            { id: 1, content: "Sınırsız Bant Genişliği" },
            { id: 2, content: "Sınırsız Bant Genişliği" },
            { id: 3, content: "Sınırsız Bant Genişliği" },
            { id: 4, content: "Sınırsız Bant Genişliği" },
            { id: 5, content: "Sınırsız Bant Genişliği" },
          ],
        },
        {
          id: 2,
          isFeatured: true,
          price: "100₺",
          time: "Aylık",
          package: "Standart",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          features: [
            { id: 1, content: "Sınırsız Bant Genişliği" },
            { id: 2, content: "Sınırsız Bant Genişliği" },
            { id: 3, content: "Sınırsız Bant Genişliği" },
            { id: 4, content: "Sınırsız Bant Genişliği" },
            { id: 5, content: "Sınırsız Bant Genişliği" },
          ],
        },
        {
          id: 3,
          isFeatured: false,
          price: "100₺",
          time: "Aylık",
          package: "Standart",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          features: [
            { id: 1, content: "Sınırsız Bant Genişliği" },
            { id: 2, content: "Sınırsız Bant Genişliği" },
            { id: 3, content: "Sınırsız Bant Genişliği" },
            { id: 4, content: "Sınırsız Bant Genişliği" },
            { id: 5, content: "Sınırsız Bant Genişliği" },
          ],
        },
      ],
      lists: [
        {
          id: 1,
          isFeatureList: true,
          packageName: `${"&nbsp;"}`,
          price: `${"&nbsp;"}`,
          time: "",
          features: [
            {
              id: 1,
              name: "Sınırsız Bant Genişliği",
            },
            {
              id: 2,
              name: "Sınırsız Trafik",
            },
            {
              id: 3,
              name: "Kullanıcı Sayısı",
            },
            {
              id: 4,
              name: "Gelişmiş Tahsilat Çözümleri",
            },
            {
              id: 5,
              name: "Kampanya Yönetimi",
            },
            {
              id: 6,
              name: "7/24 Telefon Desteği",
            },
            {
              id: 7,
              name: "Sınırsız Bant Genişliği",
            },
            {
              id: 8,
              name: "Gelişmiş Kargo Yönetimi",
            },
          ],
        },
        {
          id: 2,
          isActiveList: false,
          packageName: "Standart",
          price: "50₺",
          time: "/Aylık",
          features: [
            {
              id: 1,
              isTrue: true,
            },
            {
              id: 2,
              isTrue: true,
            },
            {
              id: 3,
              isTrue: true,
            },
            {
              id: 4,
              name: "3 kullanıcı",
            },
            {
              id: 5,
              isTrue: true,
            },
            {
              id: 6,
              isTrue: false,
            },
            {
              id: 7,
              isTrue: false,
            },
            {
              id: 8,
              isTrue: true,
            },
          ],
        },
        {
          id: 3,
          isActiveList: true,
          packageName: "Orta",
          price: "100₺",
          time: "/Aylık",
          features: [
            {
              id: 1,
              isTrue: true,
            },
            {
              id: 2,
              isTrue: true,
            },
            {
              id: 3,
              isTrue: true,
            },
            {
              id: 4,
              name: "3 kullanıcı",
            },
            {
              id: 5,
              isTrue: true,
            },
            {
              id: 6,
              isTrue: true,
            },
            {
              id: 7,
              isTrue: true,
            },
            {
              id: 8,
              isTrue: true,
            },
          ],
        },
        {
          id: 4,
          isActiveList: false,
          packageName: "Pro",
          price: "200₺",
          time: "/Aylık",
          features: [
            {
              id: 1,
              isTrue: true,
            },
            {
              id: 2,
              isTrue: true,
            },
            {
              id: 3,
              isTrue: true,
            },
            {
              id: 4,
              name: "3 kullanıcı",
            },
            {
              id: 5,
              isTrue: true,
            },
            {
              id: 6,
              isTrue: true,
            },
            {
              id: 7,
              isTrue: true,
            },
            {
              id: 8,
              isTrue: true,
            },
          ],
        },
      ],
      tabs: [
        {
          id: 1,
          title: "Aylık",
          active: true,
        },
        {
          id: 2,
          title: "Yıllık",
          active: false,
        },
      ],
    };
  },
  methods: {
    changeTab(id) {
      this.tabs.forEach((t) => {
        id == t.id ? (t.active = true) : (t.active = false);
      });
    },
  },
};
</script>

<template>
  <div>
    <titleComp :title="title" />

    <section class="faq-container">
      <questionComp
        v-for="question in questions"
        :key="question.id"
        :question="question"
        :showAnswer="question.showAnswer"
        @showAnswer="showAnswer(question.id)"
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        title: "Sık sorulan sorular",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      questions: [
        {
          id: 1,
          title: "Uniqyl Nedir?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer: false  
        },
        {
          id: 2,
          title: "Uniqyl Ne İşe Yarar?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
        {
          id: 3,
          title: "Uniqyl Güvenilir Mi?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
        {
          id: 4,
          title: "Uniqyl E-ticaret Nedir?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
        {
          id: 5,
          title: "Uniqyl E-ticaret Sitesine Ne Kadar Ücret Öderim?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
        {
          id: 6,
          title: "Uniqyl E-ticaret Sitesi Nasıl Kurulur?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
        {
          id: 7,
          title: "Neden Uniqyl E-ticaret Altyapısı Kullanmalıyım?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
        {
          id: 8,
          title:
            "Uniqyl E-ticaret Altyapısına Geçmek İçin Ne Yapmamız Gerekir?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
        {
          id: 9,
          title: "Uniqyl ile Nasıl İletişime Geçebilirim?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
        {
          id: 10,
          title: "Uniqyl SEO Uyumlu Mu?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
        {
          id: 11,
          title: "Neden Uniqly Kullanmalıyım?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
        {
          id: 12,
          title: "Uniqyl’nin Diğer Platformlardan Farkı Nedir?",
          answer:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate        amet ut sit ipsum aperiam. Perspiciatis, porro!",
          showAnswer:false  
        },
      ],
    };
  },
  methods: {
    showAnswer(id) {
      let objIndex = this.questions.findIndex((q) => q.id == id);
      this.questions[objIndex].showAnswer = !this.questions[objIndex].showAnswer;
    },
  },
};
</script>
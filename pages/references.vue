<template>
  <div class="reference-page">
    <titleComp :title="title" />
    <div class="reference-section">
      <div class="container-2">
        <div class="reference-cards">
          <referenceCardComp
            v-for="reference in references"
            :key="reference.id"
            :card="reference"
          />
        </div>
        <formElementsButton buttonName="Mağazamı Oluştur" to="/" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        title: "Lorem ipsum dolor sit amet, consectetur.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta sed arcu nec ultricies volutpat in.",
      },
      references: [
        {
          id: 1,
          img: "browser-1.png",
        },
        {
          id: 2,
          img: "browser-2.png",
        },
        {
          id: 3,
          img: "browser-3.png",
        },
        {
          id: 4,
          img: "browser-4.png",
        },
        {
          id: 5,
          img: "browser-5.png",
        },
      ],
    };
  },
};
</script>

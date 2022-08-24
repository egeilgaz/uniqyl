<template>
  <div> 
    <titleComp :title="title" />
    <section class="about-us-section">
      <storyComp :data="story" />
      <div class="container-2">
        <div class="about-us-text">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus ipsum
            nec malesuada odio at tincidunt ullamcorper. Viverra nec, pulvinar
            urna blandit magna odio orci. Nunc semper hendrerit semper nisl
            magnis felis consectetur. In fusce feugiat dignissim leo cursus
            viverra mi, sem. Morbi nisl phasellus amet, sed. Ut ut euismod enim
            habitant nibh ut faucibus.
            <br /><br />
            Curabitur in sapien amet odio volutpat eget faucibus. In sapien
            pellentesque tellus dolor tellus volutpat malesuada porta. Vitae
            scelerisque scelerisque donec sed. Elit amet duis sit suscipit nulla
            et, congue sit.
          </p>
        </div>
      </div>

      <div class="about-us-banner">
        <nuxt-img src="about-us-banner-img.png" alt="aboutus" />
      </div>

      <div class="about-us-counter">
        <counterComp
          v-for="counter in counters"
          :key="counter.id"
          :data="counter"
        />
      </div>
    </section>
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
      story: {
        id: 1,
        img: "story-img.png",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius adipiscing elit volutpat eget integer purus aliquet varius. Dui ipsum eu, massa placerat amet, sed praesent scelerisque natoque. Sed tempus augue aliquet tortor, aliquet mi massa tortor. Tellus pharetra quis scelerisque in ultrices habitant id erat.",
        isStory: false,
      },
      counters: [
        {
          id: 1,
          count: "10",
          content: "Yıllı Deneyim",
        },
        {
          id: 2,
          count: "75",
          content: "Yayınlanan Site",
        },
        {
          id: 3,
          count: "100+",
          content: "Mutlu Müşteri",
        },
      ],
    };
  },
};
</script>

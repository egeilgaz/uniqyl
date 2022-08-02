<template>
  <div>
    <titleComp :title="title" />

    <div class="stories-section">
      <storyComp v-for="story in stories" :key="story.id" :data="story" />
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
      stories: [
        {
          id: 1,
          img: "story-img.png",
          title: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu mollis nulla ipsum, dui. Aenean ornare turpis nam nibh luctus adipiscing tempus, elit est.",
          userName: "Ömer Faruk Erbil",
          company: "CEO, Ünal Kuruyemiş",
          companyImage: "unal-logo.png",
          direction: "",
          isStory: true,
        },
        {
          id: 2,
          img: "story-img-2.png",
          title: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu mollis nulla ipsum, dui. Aenean ornare turpis nam nibh luctus adipiscing tempus, elit est.",
          userName: "Ömer Faruk Erbil",
          company: "CEO, Ünal Kuruyemiş",
          companyImage: "yayla-logo.png",
          direction: "reverse",
          isStory: true,
        },
        {
          id: 3,
          img: "story-img-3.png",
          title: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu mollis nulla ipsum, dui. Aenean ornare turpis nam nibh luctus adipiscing tempus, elit est.",
          userName: "Ömer Faruk Erbil",
          company: "CEO, Ünal Kuruyemiş",
          companyImage: "matex-logo.png",
          direction: "",
          isStory: true,
          isLast:true
        },
      ],
    };
  },
};
</script>

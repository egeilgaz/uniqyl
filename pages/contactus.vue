<template>
  <div>
    <titleComp :title="title" />
    <div class="contact-us">
      <div class="story">
        <div class="story-img">
          <nuxt-img
            src="contact-us-img.png"
            alt="contactus"
            :placeholder="[70]"
          />
        </div>

        <div class="story-content">
          <h1>
            {{ $t("supportAndSalesLine") }}
          </h1>

          <h3>444 44 44</h3>

          <h4>{{ $t("monday") }} 08.30 - 18.00</h4>
          <h4>{{ $t("saturday") }} 08.30 - 13.00</h4>
        </div>
      </div>

      <h3 class="heading-tertiary">{{ $t("contactForm") }}</h3>

      <form action="post">
        <div class="form-class">
          <div class="form-fields">
            <formElementsInputComp :label="$t('name')" type="text" />
            <formElementsInputComp :label="$t('surname')" type="text" />
          </div>
          <div class="form-fields">
            <formElementsInputComp :label="$t('phone')" type="tel" />
            <formElementsInputComp :label="$t('email')" type="email" />
          </div>
          <formElementsInputComp
            class="form-text-area"
            :label="$t('thePositionAppliedFor')"
            :isTextArea="true"
          />
        </div>

        <button class="btn btn-primary">{{ $t("send") }}</button>
      </form>
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
    };
  },
};
</script>

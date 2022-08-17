<template>
  <div>
    <titleComp :title="title" />

    <div class="contact-us">
      <div class="story">
        <div class="story-img">
          <nuxt-img src="contact-us-img.png" alt="contactus" :placeholder="[70]" provider="static" />
        </div>

        <div class="story-content">
          <h1>
            Destek ve <br />
            Satış Hattımız
          </h1>

          <h3>444 44 44</h3>

          <h4>Pazartesi 08.30 - 18.00</h4>
          <h4>Cumartesi 08.30 - 13.00</h4>
        </div>
      </div>

      <h3 class="heading-tertiary">İletişim Formu</h3>

      <form action="post">
        <div class="form-fields">
          <formElementsInputComp label="Ad" type="text" />

          <formElementsInputComp label="Soyad" type="text" />

          <formElementsInputComp label="Telefon" type="tel" />

          <formElementsInputComp label="E-Posta" type="email" />

          <formElementsInputComp label="Başvurulan Pozisyon" :isTextArea='true' />
        </div>

        <button class="btn btn-primary">Gönder</button>
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

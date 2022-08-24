<template>
  <footer>
    <div class="footer">
      <div class="footer-rows">
        <div class="footer-row footer-row-1">
          <NuxtLink :to="localePath('/')">
            <nuxt-img src="logo-white.png" alt="logo" />
          </NuxtLink>

          <div class="footer-social-links">
            <NuxtLink class="nav-link" to="/">
              <img src="../../static/facebook.png" alt="facebook" />
            </NuxtLink>
            <NuxtLink class="nav-link" to="/">
              <img src="../../static/twitter.png" alt="twitter" />
            </NuxtLink>
            <NuxtLink class="nav-link" to="/">
              <img src="../../static/instagram.png" alt="instagram" />
            </NuxtLink>
            <NuxtLink class="nav-link" to="/">
              <img src="../../static/youtube.png" alt="youtube" />
            </NuxtLink>
          </div>
        </div>

        <div class="footer-row footer-row-2">
          <div class="footer-links">
            <h4>{{ $t("product") }}</h4>
            <NuxtLink :to="localePath('features')">
              {{ $t("features") }}
            </NuxtLink>
            <NuxtLink :to="localePath('price')"> {{ $t("prices") }} </NuxtLink>
            <NuxtLink :to="localePath('references')">
              {{ $t("references") }}
            </NuxtLink>
            <NuxtLink :to="localePath('stories')">
              {{ $t("stories") }}
            </NuxtLink>
          </div>

          <div class="footer-links">
            <h4>{{ $t("company") }}</h4>
            <NuxtLink :to="localePath('aboutus')">
              {{ $t("aboutus") }}
            </NuxtLink>
            <a href="">{{ $t("career") }}</a>
            <a href="">{{ $t("blog") }}</a>
          </div>

          <div class="footer-links">
            <h4>{{ $t("customerService") }}</h4>
            <NuxtLink to="/"> {{ $t("supportCenter") }} </NuxtLink>
            <NuxtLink :to="localePath('contactus')">
              {{ $t("contactus") }}
            </NuxtLink>
            <NuxtLink to="/"> {{ $t("usagePolicy") }} </NuxtLink>
            <NuxtLink to="/"> {{ $t("confidentialityAgreement") }} </NuxtLink>
            <NuxtLink :to="localePath('questions')">
              {{ $t("questions") }}
            </NuxtLink>
          </div>
        </div>

        <div class="footer-row footer-row-3">
          <div class="footer-contact">
            <a>
              <img src="../../static/headphones.png" alt="contact" />
              444 44 444
            </a>
            <p>{{ $t("monday") }} 08.30 - 18.00</p>
            <p>{{ $t("saturday") }} 08.30 - 13.00</p>
          </div>

          <div class="dropdown">
            <div class="dropdown-box" @click="openDropdown()">
              <button>{{ $t(this.$i18n.locale) }}</button>
              <img
                class="dropbtn"
                src="../../static/dropdown-arrow.png"
                alt="dropdown"
              />
            </div>
            <div
              id="myDropdown"
              class="dropdown-content"
              :class="dropdownStatus ? 'show' : ''"
            >
              <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
              >
                <div @click="dropdownStatus = false">
                  {{ $t(locale.code) }}
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">© 2022 | {{ $t("allRightsReserved") }}</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      dropdownStatus: false,
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
  methods: {
    openDropdown() {
      this.dropdownStatus = !this.dropdownStatus;
    },
    switchLang(code) {
      console.log(code);
    },
  },
};
</script>

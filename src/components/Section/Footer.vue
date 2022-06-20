<template>
  <footer class="footer">


    <!-- Sidemap -->
    <div class="footerSpalte">

      <router-link to="/proberaeume" class="sidemap">
        <img src="@/assets/Icons/Menu/proberaum_dark.svg" alt="">
        <div>Proberäume</div>
      </router-link>

      <router-link to="/events" class="sidemap">
        <img src="@/assets/Icons/Menu/events_dark.svg" alt="">
        <div>Events</div>
      </router-link>

      <router-link to="/community" class="sidemap">
        <img src="@/assets/Icons/Menu/community_dark.svg" alt="">
        <div>Community</div>
      </router-link>

      <router-link to="/preis" class="sidemap">
        <img src="@/assets/Icons/Menu/preise_dark.svg" alt="">
        <div>Preise</div>
      </router-link>

    </div>

    <!-- Datenschutz & Impressum -->
    <div class="footerSpalte align_center">
      <router-link to="/" class="sidemap middleFooterPunkt">
        <div>Impressum</div>
      </router-link>
      <router-link to="/" class="sidemap middleFooterPunkt">
        <div>Datenschutz</div>
      </router-link>
      <router-link to="/" class="sidemap middleFooterPunkt">
        <div>Nutzungsbedingungen</div>
      </router-link>
    </div>

    <!-- Social Media -->
    <div class="footerSpalte align_left">
      <div class="SocialMedia">
        <img src="@/assets/Icons/Footer/mail_dark.svg" alt="">contact@giggate.de
      </div>
      <div class="SocialMedia">
        <img src="@/assets/Icons/Footer/instagram_dark.svg" alt="">instagram.com/giggate
      </div>

      <div class="SocialMedia">
        <img src="@/assets/Icons/Footer/tiktok_dark.svg" alt="">tiktok.com/@giggate
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/sass/footer.sass";
</style>

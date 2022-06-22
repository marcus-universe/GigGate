<template>
  <DesktopMenu v-if="mobile === false && currentRouteName !== 'Settings'" :mobile="mobile" />
  <MobileMenu v-if="mobile === true && currentRouteName !== 'Settings'" :mobile="mobile" />



  <router-view v-slot="{Component}">
    <transition name="PageFade">
      <Component :is="Component" />
    </transition>
  </router-view>


<Footer v-if="currentRouteName !== 'Settings'"/>
</template>


<script>
import DesktopMenu from './components/Menus/DesktopMenu.vue'
import MobileMenu from './components/Menus/MobileMenu.vue'
import Footer from './components/Section/Footer.vue'

export default {
  name: 'App',
  components: {
    DesktopMenu,
    MobileMenu,
    Footer,
  },
  data() {
    return {
      mobile: false,
    }
  },

  computed: {
    currentRouteName() {
        return this.$route.name
    }
  }
}
</script>

<style lang="scss">
  @import "@/sass/style.sass";
</style>
<template>
  <DesktopMenu v-if="mobile === false" :mobile="mobile" />
  <MobileMenu v-if="mobile === true" :mobile="mobile" />



  <router-view v-slot="{Component}">
    <transition name="PageFade">
      <Component :is="Component" />
    </transition>
  </router-view>


<Footer/>
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
  }
}
</script>

<style lang="scss">
  @import "@/sass/style.sass";
</style>
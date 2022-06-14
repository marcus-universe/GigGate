<template>
<DesktopMenu/>
<MobileMenu/>


  <nav v-if="mobile == false & desktopMenu == true" class="dektopNav">
    <router-link to="/">Home</router-link>
    <router-link to="/proberaeume">Proberäume</router-link>
  </nav>
  <router-view />
</template>


<script>
import DesktopMenu from './components/Menus/DesktopMenu.vue'
import MobileMenu from './components/Menus/MobileMenu.vue'

export default {
  name: 'App',
  components: {
    DesktopMenu,
    MobileMenu
  },
  data() {
    return {
      mobile: false,
      desktopMenu: false
    }
  }
}
</script>

<style lang="scss">
  @import "./sass/style.sass";
</style>
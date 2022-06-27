<template>
<DesktopMenu
    v-if="!settings.mobile && currentRouteName !== 'Settings'"
    :mobile="settings.mobile" />
<MobileMenu
    v-if="settings.mobile && currentRouteName !== 'Settings'"
    :mobile="settings.mobile" />

<router-view v-slot="{Component}">
    <transition name="PageFade">
        <Component :is="Component" />
    </transition>
</router-view>

<Footer v-if="currentRouteName !== 'Settings'" />
</template>

<script>
// import {computed} from 'vue'
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
    computed: {
        currentRouteName() {
            return this.$route.name
        },
        settings() {
            return this.$store.state.settings
        },
        elements() {
            return this.$store.state.elements
        },
    },
    mounted() {
        // Toogle Fullscreen Mode
        function getFullscreenElement() {
            return document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
        }
        function toggleFullscreen() {
            if (getFullscreenElement()) {
                document.exitFullscreen()
            } else {
                document.documentElement.requestFullscreen().catch(console.log)
            }
        }
        document.addEventListener('dblclick', () => {
            toggleFullscreen()
        })



           if (window.innerWidth < 1200) {
                this.settings.mobile = false
                this.settings.tablet = true
                this.elements.ButtonCenter = false
            } if (window.innerWidth < 768) {
                this.settings.mobile = true
                this.settings.tablet = false
                this.elements.ButtonCenter = true
            } else {
                this.settings.mobile = false
                this.settings.tablet = false
                this.elements.ButtonCenter = false
            }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 1200) {
                this.settings.mobile = false
                this.settings.tablet = true
                this.elements.ButtonCenter = false
            } if (window.innerWidth < 768) {
                this.settings.mobile = true
                this.settings.tablet = false
                this.elements.ButtonCenter = true
            } else {
                this.settings.mobile = false
                this.settings.tablet = false
                this.elements.ButtonCenter = false
            }
        })
    },
    data() {
        return {
           
        }
    },
    
}
</script>

<style lang="scss">
@import "@/sass/style.sass";
</style>

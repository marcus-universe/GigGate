<template>
    <div class="desktopNavBar">
        <router-link to="/" class="LogoLink"><img src="../../assets/giggate_logo_round.svg" alt="Logo GigGate"
                class="logo">
        </router-link>

        <Vue3Lottie ref="menuControl" :animationData="MenuJSON" class="MenuBurger" :autoPlay="false"
            :pauseAnimation="false" direction="forward" :loop="false" @click="playmenu()" />
    </div>


    <DMenu :mobile="mobile" :menuOpen="menuOpen" @playmenu="playmenu">
    </DMenu>


</template>




<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import MenuJSON from '@/assets/Icons/menu.json'
import DMenu from './SubOpen/DMenu.vue'

export default {
    data() {
        return {
            MenuJSON,
            direction: 'reverse',
            menuOpen: false,
        }
    },
    props: {
        mobile: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        playmenu() {
            if (this.direction === "forward") {
                this.$refs['menuControl'].setDirection("reverse")
                this.$refs['menuControl'].play()
                this.direction = "reverse"
                this.menuOpen = false
                console.log(this.menuOpen)
            } else {
                this.$refs['menuControl'].setDirection("forward")
                this.$refs['menuControl'].play()
                this.direction = "forward"
                this.menuOpen = true
                console.log(this.menuOpen)
            }
        },
    },
    components: {
        Vue3Lottie,
        DMenu,
    },
}
</script>

<style>

</style>
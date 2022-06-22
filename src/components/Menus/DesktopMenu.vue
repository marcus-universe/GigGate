<template>
<div class="desktopNavBar">
    <router-link
        to="/"
        class="LogoLink"><img src="../../assets/giggate_logo_round.svg" alt="Logo GigGate" class="logo">
    </router-link>

    <div class="rightNav">

        <Button1 v-if="!loggedIn">Anmelden</Button1>

        <Button1 CustomStyle="ButtonStyle3" v-if="!loggedIn">Registrieren</Button1>

        <Bell @click="bellToggle" />

        <Vue3Lottie
            ref="menuControl"
            :animationData="MenuJSON"
            class="MenuBurger"
            :autoPlay="false"
            :pauseAnimation="false"
            direction="forward"
            :loop="false"
            @click="playmenu()" />
    </div>
</div>

<DMenu
    :mobile="mobile"
    :menuOpen="menuOpen"
    @playmenu="playmenu">
</DMenu>

<Notification :bellOpen="bellOpen" />

<Anmelden />

</template>

<script>
import {
    Vue3Lottie
} from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import MenuJSON from '@/assets/Icons/menu.json'
import DMenu from './SubOpen/DMenu.vue'
import Bell from './Bell.vue'
import Notification from './SubOpen/Notification.vue'
import Anmelden from './SubOpen/Anmelden.vue'
import {
    Button1
} from '@/components/Elements/'

export default {
     components: {
        Vue3Lottie,
        DMenu,
        Bell,
        Notification,
        Button1,
        Anmelden
    },
    data() {
        return {
            MenuJSON,
            direction: 'reverse',
            menuOpen: false,
            bellOpen: false,
            anmelden: false
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
                this.bellOpen = false
            } else {
                this.$refs['menuControl'].setDirection("forward")
                this.$refs['menuControl'].play()
                this.direction = "forward"
                this.menuOpen = true
                this.bellOpen = false
            }
        },
        bellToggle() {
            this.bellOpen = !this.bellOpen
            if (this.menuOpen === true && this.direction === "forward") {
                this.$refs['menuControl'].setDirection("reverse")
                this.$refs['menuControl'].play()
                this.direction = "reverse"
                this.menuOpen = false
            }
        },
    },
}
   
</script>

<style>

</style>

<template>
    <div class="desktopNavBar" :class="{noShadow: bellOpen}">
        <div class="navContent">
            <router-link to="/" class="LogoLink"><img src="../../assets/giggate_logo_round.svg" alt="Logo GigGate"
                    class="logo">
            </router-link>

            <div class="rightNav">

                <Button1 v-if="!settings.loggedIn" @buttonClicked="anmelden = true" :action="true">Anmelden</Button1>

                <Button1 CustomStyle="ButtonStyle3" v-if="!settings.loggedIn">Registrieren</Button1>
                <UploadButton v-if="settings.loggedIn" customClass="" />


                <Bell @click="bellToggle" :bellOpen="settings.bellOpen" />
                <div class="profile" v-if="settings.loggedIn">
                    <img src="@/assets/img/profile/profile.jpg" alt="Profile Image" class="icon" @click="profileToggle">
                </div>
                <Vue3Lottie ref="menuControl" :animationData="MenuJSON" class="MenuBurger" :autoPlay="false"
                    :pauseAnimation="false" direction="forward" :loop="false" @click="playmenu()" />
            </div>
        </div>

    </div>

    <DMenu :mobile="mobile" :menuOpen="menuOpen" @playmenu="playmenu">
    </DMenu>

    <Profile :profileOpen="settings.profileOpen" />
    <UploadArea />
    <Notification :bellOpen="settings.bellOpen" />

    <Anmelden @exit="anmelden = false, this.settings.bellNumber = 2" :anmelden="anmelden" />
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
import Profile from './SubOpen/Profile.vue'
import UploadArea from './SubOpen/UploadArea.vue'
import {
    Button1, UploadButton
} from '@/components/Elements/'

export default {
    components: {
        Vue3Lottie,
        DMenu,
        Bell,
        Notification,
        Button1,
        Anmelden,
        Profile,
        UploadButton,
        UploadArea,
    },
    data() {
        return {
            MenuJSON,
            direction: 'reverse',
            menuOpen: false,
            bellOpen: false,
            anmelden: false,
            profileOpen: false,
        }
    },
    computed: {
        settings() {
            return this.$store.state.settings
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
            this.settings.bellOpen = !this.settings.bellOpen
            this.settings.profileOpen = false
            if (this.menuOpen === true && this.direction === "forward") {
                this.$refs['menuControl'].setDirection("reverse")
                this.$refs['menuControl'].play()
                this.direction = "reverse"
                this.menuOpen = false
            }
        },
        profileToggle() {
            this.settings.profileOpen = !this.settings.profileOpen
            this.settings.bellOpen = false
        }
    },
}
</script>

<style>

</style>

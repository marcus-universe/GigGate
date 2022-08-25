<template>

<div
    class="desktopNavBar"
    :class="{noShadow: bellOpen}">
    <div class="navContent">
        <router-link
            to="/"
            class="LogoLink"><img src="../../assets/logo_icon_navbar.svg" alt="Logo GigGate" class="logo">
        </router-link>

        <div class="rightNav">

            <Button1
                v-if="!settings.loggedIn"
                @buttonClicked="anmelden = true"
                :action="true">Anmelden</Button1>
            <Button1
                CustomStyle="ButtonStyle3"
                v-if="!settings.loggedIn">Registrieren</Button1>
            <UploadButton
                v-if="settings.loggedIn"
                customClass=""
                @click="closeMenu" />
            <Bell
                @click="bellToggle"
                :bellOpen="settings.bellOpen" />

            <ChatIcon
                @chatToggle="chatToggle"
                v-if="settings.loggedIn" />

            <div
                class="profile"
                v-if="settings.loggedIn">
                <img src="@/assets/img/profile/profile.jpg" alt="Profile Image" class="icon" @click="profileToggle">

            </div>
            <Vue3Lottie
                ref="menuControl"
                :animationData="MenuJSON"
                class="MenuBurger"
                :autoPlay="false"
                :pauseAnimation="false"
                direction="reverse"
                :loop="false"
                @click="playmenu()" />
        </div>
    </div>

</div>

<DMenu @playmenu="playmenu">
</DMenu>

<Profile :profileOpen="settings.profileOpen" />
<UploadArea />
<Notification :bellOpen="settings.bellOpen" />

<Anmelden
    @exit="anmelden = false, this.settings.bellNumber = 2"
    :anmelden="anmelden" />

<ChatContainer />
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
    Button1,
    UploadButton,
    ChatIcon,
    ChatContainer
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
        ChatIcon,
        ChatContainer
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
    setup() {

    },
    methods: {
        closeMenu() {
            if (this.settings.menuOpen === true) {
                this.$refs['menuControl'].setDirection("reverse")
                this.$refs['menuControl'].play()
                this.settings.menuOpen = false
            }
        },
        playmenu() {
            this.settings.bellOpen = false
            this.settings.profileOpen = false
            this.settings.uploadOpen = false

            if (this.settings.menuOpen === false) {
                this.$refs['menuControl'].setDirection("forward")
                this.$refs['menuControl'].play()
                this.settings.menuOpen = true
            } else {
                this.settings.menuOpen = false
                this.$refs['menuControl'].setDirection("reverse")
                this.$refs['menuControl'].play()
            }
        },
        bellToggle() {
            this.settings.bellOpen = !this.settings.bellOpen
            this.settings.profileOpen = false
            this.settings.uploadOpen = false
            this.settings.chatOpen = false
            this.closeMenu()
        },
        profileToggle() {
            this.settings.profileOpen = !this.settings.profileOpen
            this.settings.bellOpen = false
            this.settings.uploadOpen = false
            this.settings.chatOpen = false
            this.closeMenu()
        },
        chatToggle() {
            this.settings.chatOpen = !this.settings.chatOpen
            this.settings.bellOpen = false
            this.settings.profileOpen = false
            this.settings.uploadOpen = false
            this.closeMenu()
            console.log(this.settings.chatOpen)
        }
    },
}
</script>
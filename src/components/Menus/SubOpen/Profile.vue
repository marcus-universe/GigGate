<template>

    <transition :name="animationDirection">
        <div class="Profile" v-if="profileOpen">
            <div class="ProfileBox">
                <div class="ProfilBeschreibung">
                    <h2>Mark Hosten</h2>
                    <LinesStroke lineColor="neonBG" :space="0.6" />
                    <p>
                        Ich spiele E-Gitarre und meine Lieblingsgenres sind Rock und Blues.
                    </p>
                </div>

                <img class="ProfilBild" src="@/assets/img/profile/profile.jpg" alt="Mark Hosten" />

            </div>

            <div class="ProfileButtonList">
                <Button1 :link="'/'"
                    CustomStyle="ButtonStyle1 text_left flex_start border_purple purpleText equalButtons">
                    <img src="@/assets/Icons/Menu/profil_purple.svg" alt="Tutorial Workshop Icon">Profil Settings
                </Button1>

                <Button1 v-if="settings.mobile" :link="'preis'" CustomStyle="ButtonStyle1 text_left flex_start border_purple purpleText equalButtons">
                    <img src="@/assets/Icons/Filter/preisFilter.svg" alt="Preis Icon">Abo auswählen
                </Button1>

                <Button1 :link="'/'" CustomStyle="ButtonStyle1 text_left flex_start border_purple purpleText equalButtons">
                    <img src="@/assets/Icons/Menu/tutorials.svg" alt="Tutorial Workshop Icon">Tutorials/Workshop
                </Button1>

                <Button1 :link="'community'" CustomStyle="ButtonStyle1 text_left flex_start border_purple purpleText equalButtons">
                    <img src="@/assets/Icons/Menu/group_purple.svg" alt="Tutorial Workshop Icon">Deine Gruppen
                </Button1>

                <Button1 :link="'/'" CustomStyle="ButtonStyle1 text_left flex_start border_purple purpleText equalButtons">
                    <img src="@/assets/Icons/Menu/settings_purple.svg" alt="Tutorial Workshop Icon">Einstellungen
                </Button1>
            </div>

            <Button1 v-if="!settings.mobile" CustomStyle="ButtonStyle1 purpleText flex_end logoutButton"
                @buttonClicked="setLoggedOut" :action="true">
                <img src="@/assets/Icons/Menu/logout_purple.svg" alt="Tutorial Workshop Icon">Abmelden
            </Button1>

            <div v-if="settings.mobile" class="SmallLinks flex_center_h flex_between">
                <a href="#">Impressum</a>
                <a href="#">Datenschutz</a>
            </div>

        </div>
    </transition>



</template>

<script>
import { LinesStroke, Button1 } from '@/components/Elements'
export default {
    components: {
    LinesStroke,
    Button1,
    },
    computed: {
        settings() {
            return this.$store.state.settings
        },
    },
    props: {
      profileOpen: {
        type: Boolean,
        default: false
      }
    },
    data() {
        return {
            animationDirection: 'leftSwipe',
            
        }
    },
    mounted() {
        if (this.settings.mobile === true) {
            this.animationDirection = 'leftSwipe'
        } else {
            this.animationDirection = 'bellOpen'
        }
    },
    methods: {
        setLoggedOut() {
            this.settings.loggedIn = false
            this.settings.profileOpen = false
            
            if (this.settings.deletedNotify === true) {
                this.settings.bellNumber = 0
                this.settings.NotifyNumber = 0
            } else {
                this.settings.NotifyNumber = 2
                this.settings.bellNumber = 2
            }
        }
    },
}
</script>

<style>

</style>

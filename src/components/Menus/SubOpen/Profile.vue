<template>

    <transition name="leftSwipe">
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
                <Button1 :link="'/'" CustomStyle="ButtonStyle1 text_left flex_start border_purple purpleText">
                    <img src="@/assets/Icons/Menu/profil_purple.svg" alt="Tutorial Workshop Icon">Profil Settings
                </Button1>

                <Button1 :link="'/'" CustomStyle="ButtonStyle1 text_left flex_start border_purple purpleText">
                    <img src="@/assets/Icons/Menu/tutorials.svg" alt="Tutorial Workshop Icon">Tutorials/Workshop
                </Button1>

                <Button1 :link="'/'" CustomStyle="ButtonStyle1 text_left flex_start border_purple purpleText">
                    <img src="@/assets/Icons/Menu/group_purple.svg" alt="Tutorial Workshop Icon">Deine Gruppen
                </Button1>

                <Button1 :link="'/'" CustomStyle="ButtonStyle1 text_left flex_start border_purple purpleText">
                    <img src="@/assets/Icons/Menu/settings_purple.svg" alt="Tutorial Workshop Icon">Einstellungen
                </Button1>
            </div>
            <div class="SmallLinks flex_center_h flex_between">
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
    props: {
      profileOpen: {
        type: Boolean,
        default: false
      }
    },
}
</script>

<style>

</style>

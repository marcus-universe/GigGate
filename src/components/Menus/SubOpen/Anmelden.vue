<template>
    <transition name="anmeldeAnim">
        <div class="anmelden" v-if="anmelden">

            <Exit @click="$emit('exit')"></Exit>

            <h2>Anmelden</h2>
            <LinesStroke lineColor="neonBG lineAnmelden" />

            <div class="formZeile">
                <!-- <label>
            E-Mail / Benutzername: 
        </label> -->
                <input type="text" placeholder="E-Mail / Benutzername">
            </div>
            <div class="formZeile">
                <!-- <label>
            Passwort:
        </label> -->
                <input type="text" placeholder="Passwort">
            </div>
            <div class="SubmitZeile">
                <div class="formZeile" style="min-width: auto">
                    <input type="checkbox">
                    <label>
                        Angemeldet bleiben
                    </label>
                </div>
                <label class="LinkText">
                    Passwort vergessen?
                </label>
            </div>
            <Button1 @buttonClicked="setLogin" :action="true">Anmelden</Button1>
        </div>
    </transition>

    <transition name="PageFade">
        <div class="blurBG" v-if="anmelden"></div>
    </transition>

</template>

<script>
import {
    LinesStroke,
    Button1,
    Exit
} from '@/components/Elements'


export default {
    emits: ['exit', 'setLogin'],
    data() {
        return {
            anmeldenShow: this.anmelden
        }
    },

    components: {
    LinesStroke,
    Button1,
    Exit
},
    props: {
        anmelden: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        settings() {
            return this.$store.state.settings
        }
    },
    methods: {
        setLogin() {
            this.settings.loggedIn = true
            this.$emit('exit')
            if (this.settings.deletedNotify === true) {
                this.settings.bellNumber = 0
                this.settings.NotifyNumber = 0
            } else {
                this.settings.NotifyNumber = 4
                this.settings.bellNumber = 4
            }
        }
    },
}
</script>

<style>

</style>

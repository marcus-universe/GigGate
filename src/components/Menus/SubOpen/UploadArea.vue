<template>
    <transition :name="animationName">
        <div class="uploadArea" :class="{uploadDesktopArea: settings.mobile === false}" v-if="settings.uploadOpen">
            <div class="uploadBox">
                <Exit @click="close" />

                <h3>Teile dein Gig</h3>
                <div class="UploadContent">
                    <transition name="fade">
                        <form action="submit" class="flex_center_v align_center width100p" v-if="uploadStep === 2">

                            <div class="input flex_center_v">
                                <label for="title">Titel:</label>
                                <input type="text" ref="titleRef" name="title" id="title"
                                    placeholder="Schreibe hier dein Titel..." :value="title" @change="titleContent">
                            </div>
                            <div class="input flex_center_v">
                                <label for="beschreibung">Beschreibung:</label>
                                <textarea name="beschreibung" id="beschreibung"
                                    placeholder="Schreib etwas zu deinem Post..." cols="30" :value="text"></textarea>
                            </div>
                            <div class="input flex_center_v">
                                <label for="tags">Tags:</label>
                                <input type="text" name="tags" id="tags" placeholder="z.B: #Rock, #Jam, #Drumming"
                                    :value="tags">
                            </div>
                        </form>
                    </transition>
                </div>

                <div class="width100p flex_center_h">
                    <div class="flex_center_h  width80p flex_between align_center">

                        <div class="bottomCollum">
                            <Button1 CustomStyle="ButtonStyle2" v-if="uploadStep !== 1" @buttonClicked="back"
                                :action="true">
                                Zurück
                            </Button1>
                        </div>
                        <div class="bottomCollum">
                            <SwipePoints :stepCount="2" :currentStep="uploadStep" />
                        </div>
                        <div class="bottomCollum">
                            <Button1 CustomStyle="ButtonStyle2" v-if="uploadStep < 2" @buttonClicked="weiter"
                                :action="true">
                                Weiter
                            </Button1>
                            <Button1 CustomStyle="ButtonStyle2" v-if="uploadStep === 2" :action="true"> Teilen

                            </Button1>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
import {
    Button1,
    SwipePoints,
    Exit
} from '@/components/Elements'
export default {
    components: {
        Button1,
        SwipePoints,
        Exit
    },
    computed: {
        settings() {
            return this.$store.state.settings
        }
    },
    data() {
        return {
            animationName: "bellOpen",
            uploadStep: 1,
            title: "",
            text: "",
            tags: "",
        }
    },
    mounted() {
        if (this.settings.mobile) {
            this.animationName = "bellOpen"
        } else {
            this.animationName = "fade"
        }
    },
    methods: {
        weiter() {
            this.uploadStep = 2
            console.log(this.uploadStep)
        },
        back() {
            this.uploadStep = 1
            console.log(this.uploadStep)
        },
        close() {
            this.settings.uploadOpen = false
            this.settings.profileOpen = false
            this.settings.bellOpen = false
        },
        titleContent() {
            this.title = this.$refs.titleRef.value
        },
    },

}
</script>

<style>

</style>

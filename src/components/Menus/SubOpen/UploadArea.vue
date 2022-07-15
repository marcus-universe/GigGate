<template>
    <transition :name="animationName">
        <div class="uploadArea" :class="{uploadDesktopArea: settings.mobile === false}" v-if="settings.uploadOpen">
            <div class="uploadBox">
                <Exit @click="close" />

                <h3>Teile dein Gig</h3>
                <div class="UploadContent">
                    <transition name="fade">
                        <div v-if="uploadStep === 1" class="flex_center_h UploadFieldBox">
                            <div class="flex_center_v align_center UploadField" @click="OpenDialog">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g id="Ebene_13" data-name="Ebene 13">
                                        <rect class="cls-1" x="35.44" y="35.45" width="441.11" height="441.11"
                                            rx="93.2" />
                                        <rect class="cls-2" x="229.43" y="107.51" width="53.14" height="296.99"
                                            rx="20.32" transform="translate(0 512) rotate(-90)" />
                                        <rect class="cls-2" x="229.43" y="107.51" width="53.14" height="296.99"
                                            rx="20.32" transform="translate(512 512) rotate(180)" />
                                    </g>
                                </svg>
                                Vom {{uploadFrom}} auswählen
                            </div>
                        </div>
                    </transition>

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
                                    placeholder="Schreib etwas zu deinem Post..." cols="0" :value="text" ref="textRef"
                                    @change="textContent"></textarea>
                            </div>
                            <div class="input flex_center_v">
                                <label for="tags">Tags:</label>
                                <input type="text" name="tags" id="tags" placeholder="z.B: #Rock, #Jam, #Drumming"
                                    :value="tags" ref="tagsRef" @change="tagsContent">
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
import { open } from "@tauri-apps/api/dialog"
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
            uploadFrom: "Computer",
        }
    },
    mounted() {
        if (this.settings.mobile) {
            this.animationName = "bellOpen"
            this.uploadFrom = "Smartphone"
        } else {
            this.animationName = "fade"
            this.uploadFrom = "Computer"
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
        textContent() {
            this.text = this.$refs.textRef.value
        },
        tagsContent() {
            this.tags = this.$refs.tagsRef.value
        },
        OpenDialog() {
            open({
                title: "Upload",
                content: "",
                buttons: [
                    {
                        text: "Abbrechen",
                        color: "red",
                        action: () => {
                            this.close()
                        }
                    },
                    {
                        text: "Upload",
                        color: "green",
                        action: () => {
                            this.upload()
                        }
                    }
                ]
            }).catch(() => {
                this.close()
                const input = document.createElement('input')
                input.type = 'file'
                input.onchange = _this => {
                    const files = Array.from(input.files)
                    console.log(files)
                }
                input.click()
            })
        },

    },

}
</script>

<style>

</style>

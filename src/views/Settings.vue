<template>
    <div class="settings">
        <h1>Settings</h1>

        <div class="settingContainer">
            <div class="setting">
                <label for="IsFullscreen">Fullscreen</label>
                <input type="checkbox" name="IsFullscreen" id="IsFullscreen" v-model="IsFullscreen"
                    @change="FullscreenMode">
            </div>
            <LinesStroke lineColor="lineMargin_small" />
            <div class="setting">
                <label for="AlwaysOnTop">Fenster im Vordergrund</label>
                <input type="checkbox" name="AlwaysOnTop" id="AlwaysOnTop" v-model="AlwaysOnTop"
                    @change="AlwaysOnTopMode">
            </div>
            <LinesStroke lineColor="lineMargin_small" />
            <div class="setting">
                <label for="mobilemode">Mobile Ansicht</label>
                <input type="checkbox" name="mobilemode" id="mobilemode" v-model="IsMobile" @change="mobileMode">
            </div>
            <LinesStroke lineColor="lineMargin_small" />
            <div class="setting">
                <label for="notify">Benachrichtigungen</label>
                <input type="number" name="notifyNumber" id="notify" min="0" :max="maxNoftiy">
            </div>
        </div>
    </div>
</template>

<script>
import {
    WebviewWindow, LogicalSize, 
} from '@tauri-apps/api/window'
import {
    LinesStroke
} from '@/components/Elements'

export default {
    data() {
        return {
            maxNoftiy: 4,
            IsMobile: false,
            IsFullscreen: false,
            AlwaysOnTop: false,
            mainWindow: WebviewWindow.getByLabel('giggate')
        }
    },
    components: {
        LinesStroke,
    },
    computed: {
        settings() {
            return this.$store.state.settings
        }
    },
    mounted() {
        if (this.settings.loggedIn) {
            this.maxNoftiy = 4
        } else {
            this.maxNoftiy = 2
        }
        this.settings.bellNumber = this.maxNoftiy
    },
    methods: {
        FullscreenMode() {
            // check if mobile mode is checked
            if (this.IsFullscreen) {
                this.mainWindow.setFullscreen(true)
            } else {
                this.mainWindow.setFullscreen(false)
                this.mainWindow.setSize(new LogicalSize(1280, 720))
                // this.mainWindow.setPosition(new LogicalPosition(0, 0))
            }
        },

        AlwaysOnTopMode() {
            // check if mobile mode is checked
            if (this.AlwaysOnTop) {
                this.mainWindow.setAlwaysOnTop(true)
            } else {
                this.mainWindow.setAlwaysOnTop(false)
            }
        },

        mobileMode() {
            // check if mobile mode is checked
            if (this.IsMobile) {
                this.mainWindow.setSize(new LogicalSize(380, 750))
                // this.mainWindow.setPosition(new LogicalPosition(0, 0))
            } else {
                this.mainWindow.setSize(new LogicalSize(1280, 720))
                // this.mainWindow.setPosition(new LogicalPosition(0, 0))
            }
        },
    },
}
</script>

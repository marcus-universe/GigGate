<template>
<div class="settings">
    <h1>Settings</h1>

    <div class="settingContainer">
        <div class="setting">
            <label for="Mobile">Mobile Ansicht</label>
            <input type="checkbox" name="mobilemode" id="mobilemode">
        </div>
        <div class="setting">
            <label for="Mobile">Benachrichtigungen</label>
            <input type="number" name="mobilemode" id="mobilemode" min="0" :max="maxNoftiy">
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            maxNoftiy: 4,
        }
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
}
</script>

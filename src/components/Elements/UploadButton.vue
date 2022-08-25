<template>
<div
    class="uploadButton"
    :class="[customClass]"
    @click="toggleUploadBox">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" :class="{active: settings.uploadOpen}">
        <g
            id="Ebene_13"
            data-name="Ebene 13">
            <rect
                class="cls-1"
                x="35.44"
                y="35.45"
                width="441.11"
                height="441.11"
                rx="93.2" />
            <rect
                class="cls-2"
                x="229.43"
                y="107.51"
                width="53.14"
                height="296.99"
                rx="20.32"
                transform="translate(0 512) rotate(-90)" />
            <rect
                class="cls-2"
                x="229.43"
                y="107.51"
                width="53.14"
                height="296.99"
                rx="20.32"
                transform="translate(512 512) rotate(180)" />
        </g>
    </svg>
</div>
</template>

<script>
export default {
    props: {
        customClass: {
            type: String,
            default: ''
        }
    },
    computed: {
        settings() {
            return this.$store.state.settings
        }
    },
    methods: {
        toggleUploadBox() {
            this.settings.uploadOpen = !this.settings.uploadOpen
            this.settings.profileOpen = false
            this.settings.bellOpen = false
            this.settings.chatOpen = false
        }
    }

}
</script>

<style>

</style>

<template>
<div class="BellIcon">
    <div
        v-if="settings.bellNumber > 0"
        class="bellNumbers">{{
            settings.bellNumber
        }}</div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g id="Glocke">
            <path
                class="Glocke"
                :class="{active: bellOpen===true}"
                d="M416,316.23l-8.32-8.37a87.57,87.57,0,0,1-25.48-61.75V198.49A128.81,128.81,0,0,0,272.9,69.3,126.62,126.62,0,0,0,129.81,194.55v51.56a87.57,87.57,0,0,1-25.48,61.75L96,316.23a30.8,30.8,0,0,0,21.79,52.39h63.09V375A72.11,72.11,0,0,0,256,443.73,72.11,72.11,0,0,0,331.11,375v-6.38H394.2A30.8,30.8,0,0,0,416,316.23ZM293.56,375A35.31,35.31,0,0,1,256,406.17,35.31,35.31,0,0,1,218.44,375v-6.38h75.12Z" />
        </g>
    </svg>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        bellOpen: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        settings() {
            return this.$store.state.settings
        },
    },
    mounted() {
        if (this.settings.mobile === true && this.settings.deletedNotify === false) {
            this.settings.bellNumber = 4
        }
    },

}
</script>

<style>

</style>

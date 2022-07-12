<template>
<div
    class="Banners"
    :class="[bannerClass]">

    <div
        class="BannerTXTBox"
        v-if="titleSwitch === true">
        <slot name="title"></slot>
    </div>
    <div
        v-if="!videoActive"
        class="imagebox"
        :style="{ backgroundImage: 'url(' + require('@/assets/img/banner/' + image +'.jpg') +')'}">
        <!-- <img :src="" alt=""> -->
    </div>

    <div
        v-if="videoActive"
        class="videobox">
        <video class="videoplayer" controls :poster="require('@/assets/img/banner/events.jpg')">
            <source
                src="#"
                type="video/mp4">
        </video>
    </div>

    <div class="BannerTXTBox">
        <slot
            name="title"
            v-if="titleSwitch === false"></slot>
        <slot name="content"></slot>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            titleSwitch: false,
        }
    },
    props: {
        boxWidth: {
            type: Number,
            default: 40
        },
        bannerClass: {
            type: String,
            default: 'gradientBG'
        },
        videoActive: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            default: 'events'
        },
    },
    computed: {
        settings() {
            return this.$store.state.settings
        },

    },
    mounted() {
        if (this.settings.mobile === true || this.settings.tablet === true) {
            this.titleSwitch = true
        } else {
            this.titleSwitch = false
        }

        window.addEventListener('resize', () => {
            if (this.settings.mobile === true || this.settings.tablet === true) {
                this.titleSwitch = true
            } else {
                this.titleSwitch = false
            }
        })
    },
}
</script>

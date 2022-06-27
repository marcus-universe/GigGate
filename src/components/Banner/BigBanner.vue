<template>
<div
    class="Banners"
    :class="[bannerClass]">

    <div
        class="BannerTXTBox"
        v-if="settings.mobile || settings.tablet">
        <slot name="title"></slot>
    </div>
    <div
        v-if="!videoActive"
        class="imagebox"
        :style="{backgroundImage: 'url('+ require('@/assets/img/banner/events.jpg') +')'}">
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
            v-if="!settings.mobile && !settings.tablet"></slot>
        <slot name="content"></slot>
    </div>
</div>
</template>

<script>
export default {
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
        
    }
}
</script>

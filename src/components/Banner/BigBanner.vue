<template>
    <div class="Banners" :class="[bannerClass]" :style="{
        'width': boxWidth + '%', 'padding': 0 + ' ' + pR + '% ' + 0 + ' ' + pL + '% '
    }">

        <div class="imagebox">
            <img :src="image" alt="">
        </div>

        <div v-if="videoActive" class="videobox">
            <video class="videoplayer" controls>
                <source src="#" type="video/mp4">
            </video>
        </div>

        <div class="BannerTXTBox">
            <slot></slot>
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
            default: '#'
        },
        pL: {
            type: Number,
            default: 0
        },
        pR: {
            type: Number,
            default: 0
        }
    },
}
</script>

<template>
    <div class="Banners" :class="[bannerClass]" :style="{
        'width': boxWidth + '%', 'padding': 0 + ' ' + pR + '% ' + 0 + ' ' + pL + '% '
    }">

        <div v-if="!videoActive" class="imagebox"
            :style="{backgroundImage: 'url('+ require('@/assets/img/banner/events.jpg') +')'}">
            <!-- <img :src="" alt=""> -->
        </div>

        <div v-if="videoActive" class="videobox">
            <video class="videoplayer" controls :poster="require('@/assets/img/banner/events.jpg')">
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
            default: 'events'
        },

        pL: {
            type: Number,
            default: 0
        },
        pR: {
            type: Number,
            default: 0
        }
    }
}
</script>
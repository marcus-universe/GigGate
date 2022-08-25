<template>
    <div class="imageSlide flex_center_h flex_start width100p">
        <div class="flex_center_h flex_between align_center sliderContainer">
            <div @click="slideImage(forward)">
                <FilterIcon :icon="'slider'"
                    :customClass="{ 'slideReverse': true, 'purpleSVG filterShadow': rooms.currentIndex === rooms.images.length - 1}" />
            </div>

            <div @click="slideImage(reverse)">
                <FilterIcon :icon="'slider'"
                    :customClass="{ 'slide': true, 'purpleSVG filterShadow': rooms.currentIndex === rooms.images.length - 1}" />

            </div>
            <div class="bottomCollum">
                <SwipePoints :stepCount="rooms.images.length" :currentStep="rooms.currentIndex + 1" />
            </div>
        </div>
        <div @click="slideshow = true" class="flex_center_h flex_start imageContainer"
            :style="[slide, imageContainerWidth]">
            <div v-for="(image, index) in rooms.images" :key="image"
                :style="{ backgroundImage: 'url(' + require(`@/assets/img${rooms.images[index].url}.jpg`)+ ')' }">

            </div>
        </div>
    </div>
    <div v-if="slideshow" class="BiggerImage flex_center_h flex_start align_center">

        <div class="sliderContainer flex_center_h flex_between align_center">
            <div @click="slideImage(forward)">
                <FilterIcon :icon="'slider'"
                    :customClass="{ 'slideReverse': true, 'purpleSVG filterShadow': rooms.currentIndex === rooms.images.length - 1}" />
            </div>

            <div @click="slideImage(reverse)">
                <FilterIcon :icon="'slider'"
                    :customClass="{ 'slide': true, 'purpleSVG filterShadow': rooms.currentIndex === rooms.images.length - 1}" />

            </div>
        </div>

        <div class="imageContainer flex_center_h flex_start" :style="[slide, imageContainerWidth]">
            <div v-for="(image, index) in rooms.images" :key="image"
                :style="{ backgroundImage: 'url(' + require(`@/assets/img${rooms.images[index].url}.jpg`)+ ')' }"
                @click="BiggerImage(index)">

            </div>
        </div>

    </div>
    <div v-if="slideshow" class="blur10 slideshowBG">
        <Exit @click="slideshow = false" />
    </div>

</template>

<script>
import {
    FilterIcon, Exit, SwipePoints
} from '@/components/Elements/'
export default {
    components: {
    FilterIcon,
        Exit,
        SwipePoints,
},
    props: {
        currentIndex: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            forward: true,
            reverse: false,
            slideshow: false,
        }
    },
    computed: {
        rooms() {
            return this.$store.state.rooms[this.currentIndex]
        },
        slide() {
            return {
                transform: 'translateX(' + this.rooms.currentIndex * -(100 / this.rooms.images.length) + '%)'
            }
        },
        imageContainerWidth() {
            return {
                width: this.rooms.images.length * 100 + '%'
            }
        }
    },
    methods: {
        slideImage(e) {
            if (e) {
                this.rooms.currentIndex--
                console.log(this.rooms.currentIndex)
            } else {
                this.rooms.currentIndex++
                console.log(this.rooms.currentIndex)
            }

            if (this.rooms.currentIndex > this.rooms.images.length - 1) {
                this.rooms.currentIndex = 0
                console.log(this.rooms.currentIndex)
            } else if (this.rooms.currentIndex === -1) {
                this.rooms.currentIndex = this.rooms.images.length - 1
                console.log(this.rooms.currentIndex)
            }
        }
    }

}
</script>

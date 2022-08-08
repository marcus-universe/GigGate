<template>
    <div class="flex_center_v align_center flex_start equalWidth raumCard" v-for="(room, index) in rooms" :key="room"
        ref="roomCard">
        <ImageSlider :currentIndex="index" />

        <div class="cardContainer">
            <h4>{{rooms[index].name}}</h4>
            <p>{{ rooms[index].description.text}}</p>
            <div class="flex_center_h flex_between info">
                <div class="flex_center_h flex_start align_center person">
                    <FilterIcon :icon="'person'" :customClass="'infoIcon'" /> {{rooms[index].description.personen}}
                </div>
                <div class="breakline"></div>
                <div class="flex_center_h flex_start align_center ort">
                    <FilterIcon :icon="'ort'" :customClass="'infoIcon'" />{{rooms[index].description.ort}}
                </div>

            </div>
            <!-- <LinesStroke /> -->
        </div>
        <div class="flex_center_h cardContainer width100p cardContainerBottom">
            <div class="icons flex_center_h flex_between">
                <div class="flex_center_h flex_start instIconsContainer"
                    @wheel="$store.commit('horizontalScroller', $event)" ref="icons">

                    <FilterIcon v-for="(icon, iconIndex) in rooms[index].description.icons" :key="icon"
                        :icon="rooms[index].description.icons[iconIndex].icon" :customClass="'instIcon'" />

                </div>
                <FilterIcon :customClass="'navIcon'" :icon="'nav'" />
            </div>
        </div>
    </div>
</template>

<script>
import ImageSlider from './ImageSlider.vue'
import {
    FilterIcon
} from '@/components/Elements/'

export default {
    components: {
        FilterIcon,
        ImageSlider,
        // LinesStroke
    },
    computed: {
        rooms() {
            return this.$store.state.rooms
        }

    },
    methods: {
        ScrollIcons(event) {
            event.preventDefault()

            // this.$refs.icons.forEach(element => {
            //     if (element === event) {
            //         element.scrollLeft += event.deltaY
            //     }
            // })
            event.currentTarget.scrollLeft += event.deltaY / 2
            // console.log([event.deltaY, event.target.scrollLeft])
            console.log([event, event.target, this.$refs.icons[0]])
        }
    }
}
</script>

<style>

</style>

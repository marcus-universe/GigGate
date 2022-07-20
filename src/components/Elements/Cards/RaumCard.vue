<template>
    <div class="raumCard flex_center_h" v-for="(room, index) in rooms" :key="room">
        <div class="cardContainer">
            <h4>{{rooms[index].name}}</h4>
            <!-- <ImageSlider /> -->

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
            <LinesStroke />
            <div class="icons">
                <FilterIcon v-for="(icon, iconIndex) in rooms[index].description.icons" :key="icon"
                    :icon="rooms[index].description.icons[iconIndex].icon" :customClass="'instIcon'" />
            </div>
        </div>
    </div>
</template>
<script>
import {FilterIcon, LinesStroke} from '@/components/Elements/'
export default {
    components: {
    FilterIcon,
    // ImageSlider,
    LinesStroke
},
    computed: {
        rooms () {
            return this.$store.state.rooms
        }
        
    }

}
</script>

<style>

</style>
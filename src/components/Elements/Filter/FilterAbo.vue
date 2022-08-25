<template>
<div class="flex_center_h flex_start filterSelector">
    <div
        class="InstFilter flex_center_h flex_start align_center gap1"
        @click="filterAboClick"
        :class="{ active: settings.filterAboOpen}">
        <FilterIcon
            :customClass="{ arrow: true, active: settings.filterAboOpen, 'ortIcon': true }"
            :icon="'preis'" />
        Raum-Variante
        <FilterIcon
            :customClass="{arrow: true,  active: settings.filterAboOpen}"
            :icon="'slider'" />
    </div>

    <transition name=" fade">
        <div
            class="flex_center_h instrumentSelect flex_start selectAbo"
            v-if="settings.filterAboOpen">

            <Exit
                v-if="settings.mobile"
                @click="settings.filterAboOpen = false" />

            <div
                class="flex_center_h align_center flex_start selection"
                v-for="(abo, index) in abos"
                :key="abo"
                @click="selectAbo(index)"
                :class="{active: abos[index].active}">
                <span>{{abos[index].name}}</span>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import {
    Exit,
} from '@/components/Elements/'
import FilterIcon from './FilterIcons.vue'
export default {
    components: {
        FilterIcon,
        Exit
    },
    computed: {
        settings() {
            return this.$store.state.settings
        },
        abos() {
            return this.$store.state.abomodelle
        }

    },
    methods: {
        filterAboClick() {
            this.settings.filterAboOpen = !this.settings.filterAboOpen
            this.settings.menuNoShadow = !this.settings.menuNoShadow
        },
        selectAbo(index) {
            this.abos[index].active = !this.abos[index].active
        }
    }

}
</script>

<style>

</style>

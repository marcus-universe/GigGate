<template>
  <div class="flex_center_h flex_start filterSelector">
    <div class="InstFilter flex_center_h flex_start align_center gap1" @click="filterOrteClick"
      :class="{ active: settings.filterOrteOpen}">
      <FilterIcon :customClass="{ arrow: true, active: settings.filterOrteOpen, 'ortIcon': true }" :icon="'ort'" />
      Standort
      <FilterIcon :customClass="{arrow: true,  active: settings.filterOrteOpen}" :icon="'slider'" />
    </div>

    <transition name=" fade">
      <div class="flex_center_h instrumentSelect flex_start" v-if="settings.filterOrteOpen">

        <Exit v-if="settings.mobile" @click="settings.filterOrteOpen = false" />

        <div class="flex_center_h align_center flex_start selection" v-for="(ort, index) in orte" :key="ort"
          @click="selectOrt(index)" :class="{active: orte[index].active}">
          <!-- <FilterIcon customClass="filterInstIcon" :icon="'ort'" /> -->
          <span>{{
          orte[index].name}}</span>
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
        orte() {
            return this.$store.state.orte
        }

    },
    methods: {
        filterOrteClick() {
            this.settings.filterOrteOpen = !this.settings.filterOrteOpen
            this.settings.menuNoShadow = !this.settings.menuNoShadow
        },
        selectOrt(index) {
            this.orte[index].active = !this.orte[index].active
        }
    }

}
</script>

<style>

</style>

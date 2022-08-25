<template>
  <div class="flex_center_h flex_start filterSelector">
    <div class="InstFilter flex_center_h flex_start align_center gap1" @click="filterInstClick"
      :class="{ active: settings.filterInstOpen}">
      Instrumente
      <FilterIcon :customClass="{arrow: true,  active: settings.filterInstOpen}" :icon="'slider'" />
    </div>

    <transition name="fade">
      <div class="flex_center_h instrumentSelect flex_start" v-if="settings.filterInstOpen">

        <Exit v-if="settings.mobile" @click="settings.filterInstOpen = false" />

        <div class="flex_center_h align_center flex_start selection" v-for="(Instrument, index) in filterInst"
          :key="Instrument" @click="selectInst(index)" :class="{active: filterInst[index].active}">
          <FilterIcon customClass="filterInstIcon" :icon="filterInst[index].icon" />
          <span>{{
          filterInst[index].name}}</span>
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
        filterInst() {
            return this.$store.state.filterInst
        }

    },
    methods: {
        filterInstClick() {
            this.settings.filterInstOpen = !this.settings.filterInstOpen
            this.settings.menuNoShadow = !this.settings.menuNoShadow
        },
        selectInst(index) {
            this.filterInst[index].active = !this.filterInst[index].active
        }
    }

}
</script>

<style>

</style>

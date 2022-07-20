<template>
  <div class="flex_center_h flex_start filterSelector">
    <div class="InstFilter" @click="filterInstClick" :class="{ active: settings.filterInstOpen}">Instrumente</div>

    <transition name="fade">
      <div class="flex_center_h instrumentSelect" v-if="settings.filterInstOpen">
        <div class="selection flex_center_h align_center flex_start"
          v-for="(Instrument, index) in $store.state.filterInst" :key="Instrument" @click="selectInst(index)"
          :class="{active: filterInst[index].active}">
          <FilterIcon customClass="filterInstIcon" :icon="$store.state.filterInst[index].icon" /> <span>{{
            $store.state.filterInst[index].name}}</span>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import FilterIcon from '@/components/Elements/Filter/FilterIcons.vue'
export default {
    components: {
        FilterIcon
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
    },
    selectInst(index) {
      this.filterInst[index].active = !this.filterInst[index].active
    }
  }

}
</script>

<style>

</style>

<template>
  <section class="rooms">
    <BannerImage :image="'raum/room_1'">Unsere Proberäume</BannerImage>

    <div class="flex_center_h width100p">
      <div class="flex_center_h flex_start width80p filterContainer gap2"
        @wheel="$store.commit('horizontalScroller', $event)">
        <FilterInst />
        <FilterOrte />
      </div>
    </div>

    <div class="roomList flex_center_h">
      <div class="width80p flex_center_h flex_start gap2 flex_wrap">
        <RaumCard />
      </div>

    </div>

  </section>
</template>

<script>
import {
    FilterInst,
    RaumCard,
    FilterOrte
} from '@/components/Elements'
import BannerImage from '@/components/Banner/BannerImage.vue'
export default {
    components: {
        FilterInst,
        BannerImage,
        RaumCard,
        FilterOrte
    },
    methods: {
        // scrollFilter(event) {
        //   event.preventDefault()
        //   event.currentTarget.scrollLeft += event.deltaY / 2
        //   console.log(event)
        // }
    }

}
</script>

<style>

</style>

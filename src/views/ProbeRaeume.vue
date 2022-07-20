<template>
  <section class="rooms">
    <BannerImage :image="'raum/room_1'">Unsere Proberäume</BannerImage>

    <div class="flex_center_h filterContainer">
      <FilterInst />
    </div>

    <div class="roomList">
      <RaumCard />
    </div>


  </section>
</template>

<script>
import { FilterInst, RaumCard } from '@/components/Elements'
import BannerImage from '@/components/Banner/BannerImage.vue'
export default {
  components: {
    FilterInst,
    BannerImage,
    RaumCard
  },

}
</script>

<style>

</style>

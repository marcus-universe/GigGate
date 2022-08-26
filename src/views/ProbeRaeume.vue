<template>
<section class="rooms">
    <BannerImage :image="'raum/room3/1'">Unsere Proberäume</BannerImage>

    <div class="flex_center_h width100p">
        <div
            class="flex_center_h flex_start width80p filterContainer gap2"
            @wheel="$store.commit('horizontalScroller', $event)">
            <FilterInst />
            <FilterOrte />
            <FilterAbo />
        </div>
    </div>

    <div class="roomList flex_center_h">
        <div class="width80p flex_center_h flex_start gap2 flex_wrap">
            <RaumCard />
        </div>

    </div>

    <div class="flex_center_h gap2 slideSection">
      <FilterIcon :icon="'slider'" :customClass="'slideSectionIcon reverse'"></FilterIcon>
        <div class="NumberSection active">1</div>
        <div class="NumberSection">2</div>
        ...
        <div class="NumberSection">120</div>

        <FilterIcon :icon="'slider'" :customClass="'slideSectionIcon'"></FilterIcon>
    </div>

</section>
</template>

<script>
import {
    FilterInst,
    RaumCard,
    FilterOrte,
  FilterAbo,
    FilterIcon,
} from '@/components/Elements'
import BannerImage from '@/components/Banner/BannerImage.vue'
export default {
    components: {
        FilterInst,
        BannerImage,
        RaumCard,
        FilterOrte,
        FilterAbo,
        FilterIcon
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

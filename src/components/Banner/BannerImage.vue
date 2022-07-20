<template>
    <div class="ImageBanner margin_bottom_2"
        :style="{ backgroundImage: 'url(' + require('@/assets/img/' + image +'.jpg') +')', 'height': height + 'vh'}">

        <div class="bannerBlur neonTran flex_center_h align_center" :style="{'height': height + 'vh'}">
            <h1>
                <slot></slot>
            </h1>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true,

        },
        height: {
            type: Number,
            required: false,
            default: 20
        }
    },

}
</script>

<style>

</style>

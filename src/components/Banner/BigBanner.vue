<template>
    <div class="Banners" :class="[bannerClass]" :style="{'width': boxWidth + '%'}">
        <h1 v-if="h1Active == true" class="h1Banner">
            <slot>Default</slot>
        </h1>
        <h2 v-if="h1Active == false">
            <slot>Default</slot>
        </h2>
    </div>
</template>
<script>
export default {
    props: {
        boxWidth: {
            type: Number,
            default: 40
        },
        bannerClass: {
            type: String,
            default: 'EventsBanner'
        },
        h1Active: {
            type: Boolean,
            default: false
        }
    },
}
</script>
<template>
    <div class="line" :class="[lineColor]" :style="{'margin': space + 'rem auto' }"></div>
</template>

<script>
export default {
    props: {
        lineColor: {
            type: String,
            default: 'purpleBG'
        },
        space: {
            type: Number,
            default: 1
        }
    },
}
</script>

<style>

</style>
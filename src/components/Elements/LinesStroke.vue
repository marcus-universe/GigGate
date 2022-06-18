<template>
    <div class="line" :class="[lineColor]"></div>
</template>

<script>
export default {
    props: {
        lineColor: {
            type: String,
            default: 'purpleBG'
        }
    },
}
</script>

<style>

</style>
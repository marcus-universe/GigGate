<template>
    <h1 class="h1Banner" :class="[CustomStyle]">
        <slot>Default</slot>
    </h1>
</template>

<script>
export default {
    props: {
        CustomStyle: {
            type: String,
            default: 'whiteText'
        },
    },
}
</script>

<style>

</style>
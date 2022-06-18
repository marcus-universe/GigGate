<template>
    <article :class="[textColor]">
        <slot> Default Text </slot>
    </article>
</template>

<script>
export default {
    props: {
        textColor: {
            type: String,
            default: 'whiteText'
        }
    },
}
</script>

<style>

</style>
<template>
  <button class="CallToAction" :class="[ButtonStyle]"><slot>Default Button Text</slot></button>
</template>

<script>
export default {
    props: {
        ButtonStyle: {
        type: String,
        default: 'ButtonStyle1'
        }
    },
}
</script>

<style>

</style>
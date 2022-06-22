<template>
  <router-link :to="'/' + link" class="Button_1" :class="[CustomStyle]">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
    props: {
       link: {
            type: String,
            default: '',
        },
        CustomStyle: {
            type: String,
            default: 'ButtonStyle2'
        }
    }
}
</script>

<style>

</style>
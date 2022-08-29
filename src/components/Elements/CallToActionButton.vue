<template>
  <div :class="{flex_center_h: ButtonCenter}">
      <button class="CallToAction" :class="[ButtonStyle]" :to="'/' + link ">
        <router-link :to="'/' + link">
        <slot>Default Button Text</slot>
        </router-link>
      </button>
  </div>
</template>

<script>
export default {
    props: {
        ButtonStyle: {
            type: String,
            default: 'ButtonStyle1'
        },
        ButtonCenter: {
            type: Boolean,
            default: false
    },
    link: {
        type: String,
        default: ''
    },
    },
}
</script>

<style>

</style>

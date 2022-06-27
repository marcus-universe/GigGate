<template>
  <router-link :to="'/' + link" class="Button_1" :class="[CustomStyle]" v-if="!action">
    <slot></slot>
  </router-link>

  <a v-if="action" href="#" @click="$emit('buttonClicked')" class="Button_1" :class="[CustomStyle]"> <slot> </slot></a>
</template>

<script>
export default {
  emits: ['buttonClicked'],
    props: {
       link: {
            type: String,
            default: '',
        },
        CustomStyle: {
            type: String,
            default: 'ButtonStyle2'
        },
        action: {
          type: Boolean,
          default: false
        }
    }
}
</script>

<style>

</style>
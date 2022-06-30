<template>
  <div class="notifyBox">
    <div class="info">
      <h4>{{title}}</h4>
      <p><img v-if="iconActive" :src="getImgUrl(icon)" alt="icon" class="icon">{{text}}
      </p>
    </div>
    <router-link :to="link" class="button"> {{ button }}</router-link>
  </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    iconActive: {
      type: Boolean,
      default: false,
    },
    button: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  methods: {
    getImgUrl(icon) {
      return require('@/assets/Icons/Notify/' + icon)
    }
  },


}
</script>

<style>

</style>
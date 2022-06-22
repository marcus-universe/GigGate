<template>
  <transition name="bellOpen">
    <div class="Notifications" v-if="bellOpen">
    </div>
</transition>
</template>

<script>
export default {
    props: {
        bellOpen: {
            type: Boolean,
            default: false,
        },
    },

}
</script>

<style>

</style>
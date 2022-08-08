<template>

    <router-link :to="link" v-if="!action">
        <div class="Icons flex_center_h align_center" :class="[customStyle]">
            <slot></slot>
        </div>
    </router-link>

    <a v-if="action" @click="$emit('clickedIcon')">
        <div class="Icons flex_center_h align_center" :class="[customStyle]">
            <slot></slot>
        </div>
    </a>




</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: '/',
        },
        customStyle: {
            type: String,
            default: '',
        },
        action: {
            type: Boolean,
            default: false,
        },
    },

}
</script>

<style>

</style>
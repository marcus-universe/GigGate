<template>

    <router-link :to="link">
        <div class="Icons" :class="[customStyle]">
            <slot></slot>
        </div>
    </router-link>




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
    },

}
</script>

<style>

</style>
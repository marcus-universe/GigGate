<template>
<router-link :to="link">
    <img class="menuIcon" 
    :src="require('@/assets/Icons/Menu/'+icon+'.svg')" :alt="icon" />
    {{name}}
</router-link>
</template>

<script>
export default {

    props: {
        link: {
            type: String,
            default: '/',
        },
        name: {
            type: String,
            default: 'Home',
        },
        icon: {
            type: String,
            default: 'kontakt',
        },
    },
}
</script>

<style>

</style>

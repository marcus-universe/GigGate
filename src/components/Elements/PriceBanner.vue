<template>
    <div class="priceBox flex_center_h flex_between align_center gap2" :class="{ activePlan: activePlan }">
        <div class="priceBoxL">
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
        </div>
        <div class="priceBoxR flex_center_h">
            <div class="priceNumber flex_center_h flex_start align_center">{{ price }} <p>/{{ art }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        price: {
            type: String,
            required: true
        },
        art: {
            type: String,
            default: 'Monat',
        },
        activePlan: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<style>

</style>
<template>
    <div class="swipePointsContainer flex_center_h gap1 align_center">
        <div class="point" v-for="(step, index) in stepCount" :key="step"
            :class="{'active': index + 1 === currentStep}"></div>
    </div>


</template>

<script>
export default {
    props: {
        currentStep: {
            type: Number,
            default: 1
        },
        stepCount: {
            type: Number,
            default: 1
        },

    }

}
</script>

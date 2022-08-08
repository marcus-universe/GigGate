<template>
    <div class="flex_center_h gap2 chatMessage">
        <div class="flex_center_h flex_start align_center message">
            <img :src="require('@/assets/img/profile/' + chat.profile_img + '.jpg')" alt="">
            <div class="flex_center_v flex_start messageProfil">
                <h5>{{ chat.name}}</h5>
                <p>{{ chat.message}}</p>
            </div>

        </div>
        <FilterIcon :icon="'chat'" :customClass="'messageIcon'" />
    </div>
</template>

<script>
import {FilterIcon} from '@/components/Elements'
export default {
    components: {
        FilterIcon
    },
    props: {
        currentIndex: {
            type: Number,
            default: 0
        },
    },
    computed: {
        chat() {
            return this.$store.state.message[this.currentIndex]
        }
    },
}
</script>

<style>

</style>

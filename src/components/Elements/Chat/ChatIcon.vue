<template>
<div
    @click="$emit('chatToggle')"
    class="chat flex_center_h align_center">

    <FilterIcon
        :icon="'chat'"
        :customClass="{ 'chat': true, 'active': $store.state.settings.chatOpen}" />
</div>
</template>

<script>
import {
    FilterIcon
} from '@/components/Elements'
export default {
    components: {
        FilterIcon
    },
}
</script>

<style>

</style>

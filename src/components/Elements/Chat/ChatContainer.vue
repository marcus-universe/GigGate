<template>
    <transition :name="transitionName">
        <div class="flex_center_v chatContainer" v-if="settings.chatOpen">
            <ChatMessage v-for="(message, index) in $store.state.message" :key="message" :currentIndex="index" />
        </div>
    </transition>


</template>

<script>
import {ChatMessage} from '@/components/Elements'
export default {
    data() {
        return {
            transitionName: 'menufade',
        }
    },
    components: {
    ChatMessage
    },
    computed: {
        settings() {
            return this.$store.state.settings
        }
    },
    mounted() {
        if (this.settings.mobile) {
            this.transitionName = "menufadeBottom"
        } else {
            this.transitionName = "menufade"
        }
    },
}
</script>

<style>

</style>
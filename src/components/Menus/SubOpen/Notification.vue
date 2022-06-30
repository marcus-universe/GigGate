<template>
<transition name="bellOpen">
    <div
        class="Notifications"
        v-if="bellOpen">
        <div class="notifyButtons">
            <div
                class="gelesenButton"
                @click="settings.bellNumber = 0">Als gelesen markieren</div>
            <div class="deleteButton">Alle Nachrichten löschen</div>
        </div>

        <div class="allNotifys">
            <Notify
                v-for="(notify, index) in settings.bellNumber"
                :key="notify"
                :title="Notification[index].title"
                :button="Notification[index].button"
                :text="Notification[index].text"
                :icon="Notification[index].icon"
                :iconActive="Notification[index].iconActive"
                :link="Notification[index].url"
                />
        </div>

    </div>
</transition>
</template>

<script>
import Notify from '@/components/Elements/NotificationAlert.vue'
export default {
    components: {
        Notify,
    },
    props: {
        bellOpen: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        settings() {
            return this.$store.state.settings
        },
        Notification() {
            return this.$store.state.notifications
        },
    },

}
</script>

<style>

</style>

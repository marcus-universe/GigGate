<template>
    <transition name="bellOpen">
        <div class="Notifications" v-if="bellOpen">
            <div class="notifyButtons">
                <div class="gelesenButton" @click="settings.bellNumber = 0">Als gelesen markieren</div>
                <div class="deleteButton"
                    @click="settings.NotifyNumber = 0, settings.bellNumber = 0, settings.deletedNotify = true">Alle Nachrichten
                    löschen
                </div>
            </div>

            <div class="allNotifys">
                <template v-for="(notify, index) in settings.NotifyNumber">
                    <Notify v-if="CheckNotify(index)" :key="notify" :title="Notification[index].title"
                        :button="Notification[index].button" :text="Notification[index].text"
                        :icon="Notification[index].icon" :iconActive="Notification[index].iconActive"
                        :link="Notification[index].url" />

                </template>
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
    methods: {
        CheckNotify(index) {
            if (this.settings.loggedIn) {
                if (this.Notification[index].loggedIn) {
                    return true
                } else {
                    return true
                }
            } else {
                if (this.Notification[index].loggedIn) {
                    return false
                } else {
                    return true
                }
            }
        },
    },

}
</script>

<style>

</style>

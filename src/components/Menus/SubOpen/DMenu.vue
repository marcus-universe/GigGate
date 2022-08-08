<template>
    <transition name="menufade">
        <nav v-if="settings.mobile === false & settings.menuOpen === true" class="dektopNav">
            <div class="alignMenuItems">
                <DMenuPunkt :link="'/'" :name="'Home'" :icon="'home'" @click="$emit('playmenu')" />
                <DMenuPunkt :link="'/proberaeume'" :name="'Proberäume'" :icon="'proberaum'"
                    @click="$emit('playmenu')" />
                <DMenuPunkt :link="'/events'" :name="'Events'" :icon="'events'" @click="$emit('playmenu')" />
                <DMenuPunkt :link="'/community'" :name="'Community'" :icon="'community'" @click="$emit('playmenu')" />
                <DMenuPunkt :link="'/preis'" :name="'Preise'" :icon="'preise'" @click="$emit('playmenu')" />
                <!-- <DMenuPunkt :link="'/contact'" :name="'Kontakt'" :icon="'kontakt'" @click="$emit('playmenu')" /> -->
            </div>
        </nav>
    </transition>
</template>

<script>
import DMenuPunkt from '@/components/Elements/DMenuPunkt.vue'

export default {
    components: {
        DMenuPunkt,
    },
    emits: ['playmenu'],
    computed: {
        settings() {
            return this.$store.state.settings
        },
    },
}
</script>

<style>

</style>

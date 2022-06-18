<template>
<transition name="menufade">
    <nav
        v-if="mobile === false & menuOpen"
        class="dektopNav">
        <div class="alignMenuItems">
            <DMenuPunkt
                :link="'/'"
                :name="'Home'"
                @click="$emit('playmenu')" />
            <DMenuPunkt
                :link="'/proberaeume'"
                :name="'Proberäume'"
                @click="$emit('playmenu')" />
            <DMenuPunkt
                :link="'/events'"
                :name="'Events'"
                :icon="'events'"
                @click="$emit('playmenu')" />
            <DMenuPunkt
                :link="'/community'"
                :name="'Community'"
                :icon="'community'"
                @click="$emit('playmenu')" />
            <DMenuPunkt
                :link="'/preis'"
                :name="'Preise'"
                :icon="'preise'"
                @click="$emit('playmenu')" />
            <DMenuPunkt
                :link="'/contact'"
                :name="'Kontakt'"
                :icon="'kontakt'"
                @click="$emit('playmenu')" />
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
    props: {
        mobile: {
            type: Boolean,
            default: false,
        },
        menuOpen: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style>

</style>

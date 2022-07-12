<template>
    <div class="AboMachen flex_center_v">
        <h2>Jetzt Proberaum buchen</h2>
        <p>
            Wähle dein Abomodell aus und fang direkt an zu jammen.
        </p>
        <CallToActionButton ButtonStyle="ButtonStyle1" :ButtonCenter="true" link="preis">
            Jetzt Abo auswählen!
        </CallToActionButton>


    </div>
</template>

<script>
import CallToActionButton from '@/components/Elements/CallToActionButton.vue'
export default {
    components: {
        CallToActionButton,
    },
    computed: {
        element() {
            return this.$store.state.elements
        },
    },

}
</script>

<style>

</style>
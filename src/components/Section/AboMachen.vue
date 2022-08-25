<template>
    <div class="AboMachen flex_center_v">

        <div class="contentAbo flex_start">
        <h2>Jetzt Proberaum buchen</h2>
        <p>
            Wähle dein Abomodell aus und fang direkt an zu jammen.
        </p>

        <div class="flex_center_h">
            <Button1 CustomStyle="ButtonStyle1 text1rem" link="preis">
                Jetzt Abo auswählen!
            </Button1>
        </div>
</div>

    </div>
</template>

<script>
import { Button1 } from '@/components/Elements'
export default {
    components: {
        Button1,
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
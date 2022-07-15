<template>
    <section class="preise">
        <h1 class="neonText AboH1">Wähle dein Abo</h1>

        <div class="flex_center_h gap4">

            <div class="preisInfo">
                <h3>Was du bekommst</h3>

                <div class="preisPunkt">
                    Räume für bis zu {{preisListe[active].inhalt[0].raum[0].anzahl}} Personen
                </div>
                <div class="preisPunkt">
                    Es können {{ preisListe[active].inhalt[0].verleih[0].text}} ausgeliehen werden.
                </div>
                <div class="preisPunkt">
                    Instrumentverleih
                    <div class="check" :class="{ yes: preisListe[active].inhalt[0].verleih[0].allow}"></div>
                </div>
                <div class="preisPunkt">
                    Nutzbar von 6:00 Uhr bis 24:00 Uhr
                    <div class="check" :class="{ yes: preisListe[active].inhalt[0].zeit}"></div>
                </div>



                <div class="preisPunkt">
                    Gedämmte Räume + guter Akustik
                    <div class="check" :class="{yes: preisListe[active].inhalt[0].raum[0].gedämmt}"></div>
                </div>

                <div class="preisPunkt">
                    Zusätzlicher Studioraum
                    <div class="check" :class="{yes: preisListe[active].inhalt[0].raum[0].studio}"></div>
                </div>

                <div class="preisPunkt">
                    Zugang zu Workshops und Tutorials
                    <div class="check" :class="{ yes: preisListe[active].inhalt[0].workshop}"></div>
                </div>
                <div class="preisPunkt">
                    Community Abzeichen
                    <div class="check" :class="{yes: preisListe[active].inhalt[0].community}"></div>
                </div>

                <div class="preisPunkt">
                    10% Rabatt beim kauf auf eines Instrumentes
                    <div class="check" :class="{yes: preisListe[active].inhalt[0].rabatt}"></div>
                </div>

                <div class="preisPunkt">
                    50GB Cloud Zugang
                    <div class="check" :class="{yes: preisListe[active].inhalt[0].cloud}"></div>
                </div>

                <div class="preisPunkt">
                    Zugang auf FL-Studio Software
                    <div class="check" :class="{yes: preisListe[active].inhalt[0].software}"></div>
                </div>

                <div class="preisPunkt">
                    Mixer Setup
                    <div class="check" :class="{yes: preisListe[active].inhalt[0].mixer}"></div>
                </div>

                <div class="preisPunkt">
                    Computer vor Ort
                    <div class="check" :class="{yes: preisListe[active].inhalt[0].pc}"></div>
                </div>
            </div>

            <div class="preisListe flex_center_v flex_start gap1">
                <PriceBanner v-for="(preis, index) in preisListe" :key="preis" :title="preis.title"
                    :description="preis.description" :price="preis.price" :art="art" @click="selectPlan(index)"
                    :activePlan="checkActivePlan(index)" />

            </div>
        </div>
    </section>
</template>

<script>
import {
    PriceBanner
} from '@/components/Elements/'

export default {
    data() {
        return {
            art: 'Monat',
            active: 1
        }
    },
    components: {
        PriceBanner,
    },
    computed: {
        preisListe() {
            return this.$store.state.preisListe
        },
    },
    methods: {
        selectPlan(index) {
            this.active = index
        },
        checkActivePlan(index) {
            return this.active === index
        },
    },
}
</script>

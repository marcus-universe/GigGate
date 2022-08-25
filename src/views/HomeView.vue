<template>
    <section class="home">
        <div class="purpleBG HomeSection">
            <!-- <div class="JetztJammenBanner"></div> -->
            <Banner bannerClass="gradientBG SingleBanner" :videoActive="true">
                <template #title>
                    <H1Banner>Kein <b class="purpleText">Struggle</b>, <br> vor dem <b class="neonText">Jam</b>!
                    </H1Banner>
                    <LinesStroke lineColor="purpleBG" />
                </template>

                <template #content>
                    <TextArticle1 textColor="whiteText mainArticle">Deutschlandweit vollausgestattete Proberäume</TextArticle1>
                    <CallToActionButton ButtonStyle="ButtonStyle2" :ButtonCenter="true" link="proberaeume">Jetzt Jammen!
                    </CallToActionButton>
                </template>

            </Banner>
        </div>

        <div class="HomeSection ">
            <div class="flex_center_h_mobileSwitch paddingWindow gap2 SubContainer">
                <Banner bannerClass="purpleBG flex_row_reversed equalWidth">
                    <template #title>
                        <H1Banner CustomStyle="bgText h2Banner">Events</H1Banner>
                        <LinesStroke lineColor="bg" />
                    </template>

                    <template #content>
                        <TextArticle1 textColor="bgText">
                            Spring auf die Bühne oder erlebe Musik ganz neu von der Community.
                        </TextArticle1>
                        <CallToActionButton ButtonStyle="ButtonStyle2" :ButtonCenter="element.ButtonCenter"
                            link="events">
                            Unsere Events
                        </CallToActionButton>
                    </template>
                </Banner>

                <Banner bannerClass="neonBG flex_row_reversed equalWidth" image="community">
                    <template #title>
                        <H1Banner CustomStyle="bgText h2Banner">Community</H1Banner>
                        <LinesStroke lineColor="bg" />
                    </template>

                    <template #content>
                        <TextArticle1 textColor="bgText">
                            Tausche dich mit der Community aus, teile deine Musik mit anderen und finde neue
                            Bandmitglieder
                            zum
                            jammen.
                        </TextArticle1>
                        <CallToActionButton ButtonStyle="ButtonStyle1" :ButtonCenter="element.ButtonCenter"
                            link="community">Zur Community
                        </CallToActionButton>
                    </template>

                </Banner>
            </div>
        </div>
        <CommentSlider />
        <Sponsoren />
<AboMachen />

    </section>
</template>

<script>
import Banner from '../components/Banner/BigBanner.vue'
import CommentSlider from '@/components/Section/CommentSlider.vue'
import AboMachen from '@/components/Section/AboMachen.vue'
import Sponsoren from '@/components/Section/Sponsoren.vue'
import {
    CallToActionButton,
    LinesStroke
} from '../components/Elements'
import {
    H1Banner,
    TextArticle1
} from '../components/Texte'

export default {
    components: {
        Banner,
        CallToActionButton,
        LinesStroke,
        H1Banner,
        TextArticle1,
        CommentSlider,
        AboMachen,
        Sponsoren
    },
    computed: {
        element() {
            return this.$store.state.elements
        },
    },
}
</script>

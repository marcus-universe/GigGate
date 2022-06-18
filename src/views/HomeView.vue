<template>
    <section class="home">
        <div class="HomeSection purpleBG">
            <!-- <div class="JetztJammenBanner"></div> -->
            <Banner :boxWidth="80" bannerClass="gradientBG SingleBanner" :pR="10" :videoActive="true">
                <H1Banner>Kein <b class="purpleText">Struggle</b>, <br> vor dem <b class="neonText">Jam</b>!</H1Banner>
                <LinesStroke lineColor="purpleBG" />
                <TextArticle1 textColor="whiteText">Deutschlandweit vollausgestattete Proberäume</TextArticle1>


                <CallToActionButton ButtonStyle="ButtonStyle2" :ButtonCenter="true" link="proberaeume">Jetzt Jammen!
                </CallToActionButton>

            </Banner>
        </div>

        <div class="HomeSection">
            <Banner :boxWidth="50" bannerClass="purpleBG flex_row_reversed" :pL="3">
                <H1Banner CustomStyle="bgText">Events</H1Banner>
                <LinesStroke lineColor="bg" />
                <TextArticle1 textColor="bgText">
                    Spring auf die Bühne oder <br>erlebe Musik ganz neu <br>von der Community.
                </TextArticle1>
                <CallToActionButton ButtonStyle="ButtonStyle2" :ButtonCenter="false" link="events">Unsere Events
                </CallToActionButton>
            </Banner>
            <Banner :boxWidth="50" bannerClass="neonBG flex_row_reversed" :pL="3">
                <H1Banner CustomStyle="bgText">Community</H1Banner>
                <LinesStroke lineColor="bg" />
                <TextArticle1 textColor="bgText">
                    Tausche dich mit der Community aus, teile deine Musik mit anderen und finde neue Bandmitglieder zum
                    jammen.
                </TextArticle1>


                <CallToActionButton ButtonStyle="ButtonStyle1" :ButtonCenter="false" link="community">Zur Community
                </CallToActionButton>

            </Banner>
        </div>
    </section>
</template>

<script>
import Banner from '../components/Banner/BigBanner.vue'
import { CallToActionButton, LinesStroke } from '../components/Elements'
import { H1Banner, TextArticle1 } from '../components/Texte'

export default {
    components: {
        Banner,
        CallToActionButton,
        LinesStroke,
        H1Banner,
        TextArticle1
    },

}
</script>

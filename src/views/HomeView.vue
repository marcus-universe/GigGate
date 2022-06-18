<template>
    <section class="home">
        <div class="HomeSection purpleBG">
            <!-- <div class="JetztJammenBanner"></div> -->
            <Banner :boxWidth="80" bannerClass="gradientBG SingleBanner" :pR="10">
                <H1Banner>Kein <b class="purpleText">Struggle</b>, <br> vor dem <b class="neonText">Jam</b>!</H1Banner>
                <LinesStroke lineColor="purpleBG" />
                <TextArticle1 textColor="whiteText">Deutschlandweit vollausgestattete Proberäume</TextArticle1>
                <CallToActionButton ButtonStyle="ButtonStyle2">Jetzt Jammen!</CallToActionButton>
            </Banner>
        </div>

        <div class="HomeSection">
            <Banner :boxWidth="40" bannerClass="purpleBG" />
            <Banner :boxWidth="60" bannerClass="neonBG" />
        </div>

        <CallToActionButton> </CallToActionButton>
        <LinesStroke />
        <H1Banner>Kein <b class="purpleText">Struggle</b>, <br> vor dem <b class="neonText">Jam</b>!</H1Banner>
        <TextArticle1 textColor="whiteText">Deutschlandweit vollausgestattete Proberäume</TextArticle1>

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

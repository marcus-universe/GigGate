<template>
    <section class="home">
        <div class="HomeSection purpleBG">
            <!-- <div class="JetztJammenBanner"></div> -->
            <Banner :boxWidth="80" bannerClass="gradientBG SingleBanner" :h1Active="true">
                Kein <b class="purpleText">Struggle</b> <br> vor dem <b class="neonText">Jam</b>!
            </Banner>
        </div>
        <div class="HomeSection">
            <Banner :boxWidth="40" bannerClass="purpleBG" />
            <Banner :boxWidth="60" bannerClass="neonBG" />
        </div>
    </section>
</template>

<script>
import Banner from '../components/Banner/BigBanner.vue'

export default {
    components: {
        Banner
    },

}
</script>

<template>
<div class="anmelden">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="exit">
        <g
            id="Ebene_5"
            data-name="Ebene 5">
            <path
                class="icon_1"
                d="M101.12,360.23c71.08-58,136.43-122.67,199-189.66q15.53-16.86,30.65-34.13c10.05-11.58,20-23.24,29.45-35.32,30.95-36.41,84.82,5.67,56.74,44.56a38.13,38.13,0,0,1-6.09,6.09q-9.08,7.11-17.86,14.52c-17.59,14.75-34.73,30-51.59,45.58-67,62.58-131.65,127.93-189.66,199a36.06,36.06,0,0,1-50.65,5.88c-18.16-14-18.09-42.53,0-56.53Z" />
            <path
                class="icon_1"
                d="M360.35,410.88c-58-71.08-122.68-136.43-189.67-199q-16.86-15.52-34.13-30.65c-11.58-10.05-23.24-20-35.32-29.45C64.82,120.82,106.9,67,145.79,95a38.13,38.13,0,0,1,6.09,6.09Q159,110.2,166.41,119c14.74,17.59,30,34.73,45.57,51.59,62.58,67,127.93,131.65,199,189.67a36,36,0,0,1,5.88,50.64c-14,18.16-42.53,18.09-56.52,0Z" />
        </g>
    </svg>

    <h2>Anmelden</h2>
    <LinesStroke lineColor="neonBG lineAnmelden" />

    <div class="formZeile">
        <!-- <label>
            E-Mail / Benutzername: 
        </label> -->
        <input type="text" placeholder="E-Mail / Benutzername">
    </div>
    <div class="formZeile">
        <!-- <label>
            Passwort:
        </label> -->
        <input type="text" placeholder="Passwort">
    </div>
    <div class="SubmitZeile">
        <div class="formZeile" style="min-width: auto">
            <input type="checkbox">
            <label>
                Angemeldet bleiben
            </label>
        </div>
        <label class="LinkText">
            Passwort vergessen?
        </label>
    </div>
    <Button1 @click="Eingeloggt = true">Anmelden</Button1>
</div>
<div class="blurBG"></div>
</template>

<script>
import {
    LinesStroke,
    Button1
} from '@/components/Elements'

export default {

    components: {
        LinesStroke,
        Button1
    },
    props: {
  
    },
    methods: {
    },
   

}
</script>

<style>

</style>

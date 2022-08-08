<template>
    <div class="MobileNavLeiste">
        <nav class="topMobileBar" :class="{ noShadow: settings.bellOpen || settings.profileOpen || menuNoShadow }">
            <div class="alignMobileNav">
                <div class="profile">
                    <img src="@/assets/img/profile/profile.jpg" alt="Profile Image" class="icon" @click="profileToggle">
                </div>
                <div class="upload">
                    <UploadButton customClass="icon mobileOption" />
                    <Bell @click="bellToggle" :bellOpen="settings.bellOpen" />
                </div>
            </div>
        </nav>
        <nav class="flex_center_h bottomMobileBar"
            :class="{ noShadow: settings.bellOpen || settings.profileOpen || menuNoShadow }">

            <MobileIcon link="./community">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512">
                    <g class="isolate">
                        <g id="Ebene_5" data-name="Ebene 5">
                            <g>
                                <g>
                                    <path class="svgWhite"
                                        d="M69.87,404.14l69.85-24.74a63.36,63.36,0,0,1,21.14-3.63h166a24.54,24.54,0,0,0,24.47-24.47V213.1a24.54,24.54,0,0,0-24.47-24.47h-222A24.55,24.55,0,0,0,80.46,213.1V342.63a54.56,54.56,0,0,1-5.14,23.14L61.64,395.06A6.64,6.64,0,0,0,69.87,404.14Z" />
                                    <rect class="svgBG" x="113.2" y="221.7" width="185.95" height="21.39" rx="10.28"
                                        transform="translate(412.35 464.79) rotate(-180)" />
                                    <rect class="svgBG" x="113.2" y="269.55" width="160.41" height="21.39" rx="9.55"
                                        transform="translate(386.81 560.48) rotate(-180)" />
                                    <rect class="svgBG" x="113.2" y="317.4" width="201.2" height="21.39" rx="10.69"
                                        transform="translate(427.6 656.18) rotate(-180)" />
                                </g>
                                <g>
                                    <path class="svgWhite"
                                        d="M442.68,319.2,371,300.63a63.62,63.62,0,0,0-21.38-1.78l-165.4,14.44a24.54,24.54,0,0,1-26.51-22.24l-12-137.68a24.54,24.54,0,0,1,22.25-26.51L389,107.56a24.53,24.53,0,0,1,26.5,22.25l11.27,129a54.7,54.7,0,0,0,7.13,22.61l16.19,28A6.65,6.65,0,0,1,442.68,319.2Z" />
                                    <rect class="svgBG" x="182.67" y="150.69" width="185.95" height="21.39" rx="10.28"
                                        transform="translate(-12.99 24.58) rotate(-4.99)" />
                                    <rect class="svgBG" x="186.88" y="199.47" width="160.41" height="21.39" rx="9.55"
                                        transform="translate(-17.27 24.02) rotate(-4.99)" />
                                    <rect class="svgBG" x="190.96" y="245.36" width="201.2" height="21.39" rx="10.69"
                                        transform="translate(-21.16 26.33) rotate(-4.99)" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </MobileIcon>

            <MobileIcon link="./events">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512">
                    <g class="isolate">
                        <g id="Ebene_5" data-name="Ebene 5">
                            <g>
                                <path class="svgWhite"
                                    d="M428.55,196.27V381.19a45.5,45.5,0,0,1-45.37,45.37H131.11a45.52,45.52,0,0,1-45.38-45.39V196.27a28.2,28.2,0,0,1,28.19-28.19H400.36a28.21,28.21,0,0,1,28.19,28.19Z" />
                                <path class="svgBG"
                                    d="M266.25,248.92l12.69,39a9.56,9.56,0,0,0,9.1,6.62h41a9.57,9.57,0,0,1,5.63,17.32L301.51,336a9.57,9.57,0,0,0-3.48,10.7l12.68,39A9.57,9.57,0,0,1,296,396.45l-33.2-24.12a9.58,9.58,0,0,0-11.26,0l-33.2,24.12a9.57,9.57,0,0,1-14.73-10.7l12.68-39a9.57,9.57,0,0,0-3.48-10.7l-33.2-24.12a9.57,9.57,0,0,1,5.62-17.32h41a9.57,9.57,0,0,0,9.1-6.62l12.68-39A9.57,9.57,0,0,1,266.25,248.92Z" />
                                <path class="svgBG"
                                    d="M428.56,180.11V190.9a28.2,28.2,0,0,1-28.2,28.19H113.92A28.19,28.19,0,0,1,85.73,190.9V180.12a45.51,45.51,0,0,1,45.39-45.38H383.18A45.51,45.51,0,0,1,428.56,180.11Z" />
                                <path class="svgWhite"
                                    d="M428.56,162.46v10.78a22.91,22.91,0,0,1-.18,3v0a27.25,27.25,0,0,1-2.29,8.47,28.14,28.14,0,0,1-25.72,16.67H113.92A28.14,28.14,0,0,1,88.2,184.75a27.25,27.25,0,0,1-2.29-8.47v0a23,23,0,0,1-.18-3V162.47a45.52,45.52,0,0,1,45.38-45.39H383.19A45.5,45.5,0,0,1,428.56,162.46Z" />
                            </g>
                            <g>
                                <path class="svgBG"
                                    d="M345.64,117.08v45.51a14.32,14.32,0,0,1-27.55,5.49,14.12,14.12,0,0,1-1.09-5.49V117.08Z" />
                                <path class="svgBG"
                                    d="M197.31,117.08v45.51a14.12,14.12,0,0,1-1.1,5.49,14.32,14.32,0,0,1-27.55-5.49V117.08Z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </MobileIcon>
            <MobileIcon link="./" customStyle="LogoIcon">
                <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g id="Purple_Icon" data-name="Purple Icon">
                        <g>
                            <path class="svgWhite"
                                d="M93.35,191a7.24,7.24,0,0,1-4.52-6.7V160.78c0-29.54,33.64-32.16,60.42-27.87,46.48,7.45,75,32.79,75,72.36v183c0,36.77-27,29.14-75.16-13.19l-3.15-2.77c-36.87-32.41-57.09-61.55-57.09-92.23V226.48A5.46,5.46,0,0,1,94.29,221a5.57,5.57,0,0,1,2.47.58l45.82,23.18a11.82,11.82,0,0,1,6.49,10.55v13.75a7.22,7.22,0,0,1-11,6.18l-9.33-5.65a3.15,3.15,0,0,0-4.32,1.06,3.2,3.2,0,0,0-.45,1.63v13.53c0,16,9.13,26.47,23.48,37.6,15.67,12.15,27.25,15.94,27.25-2.62V206c0-18.57-11.58-26.72-27.25-30.74-14.35-3.67-23.48-1.53-23.48,14.46v2.94a7.22,7.22,0,0,1-9.93,6.69Z" />
                            <g>
                                <path class="svgWhite"
                                    d="M418.67,191a7.25,7.25,0,0,0,4.51-6.7V160.78c0-29.54-33.64-32.16-60.42-27.87-46.48,7.45-75,32.79-75,72.36v183c0,36.77,27,29.14,75.16-13.19l3.15-2.77c36.87-32.41,57.09-61.55,57.09-92.23V226.48a5.46,5.46,0,0,0-5.46-5.46,5.57,5.57,0,0,0-2.47.58l-45.82,23.18a11.82,11.82,0,0,0-6.49,10.55v13.75a7.22,7.22,0,0,0,11,6.18l9.33-5.65A3.14,3.14,0,0,1,388,272.3v13.53c0,16-9.13,26.47-23.48,37.6-15.67,12.15-27.25,15.94-27.25-2.62V206c0-18.57,11.58-26.72,27.25-30.74,14.35-3.67,23.48-1.53,23.48,14.46v2.94a7.22,7.22,0,0,0,9.94,6.7Z" />
                                <path class="svgPurple"
                                    d="M256,95.44c-77.69-.51-170.4-1.72-170.4,38.15,0,1.64,9.54-24.86,65.42-18.46,88.55,10.15,94.34,70.91,94.34,90.14V396.86c-1,15.23-9.25,19.49-9.25,19.49l19.88.35,19.88-.35s-8.21-4.26-9.25-19.49V205.27c0-19.23,5.8-80,94.34-90.14,55.88-6.4,65.42,20.11,65.42,18.46C426.41,93.72,333.69,94.93,256,95.44Z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </MobileIcon>
            <MobileIcon link="./proberaeume">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g id="Mic">
                        <path class="svgWhite"
                            d="M266.48,181.73c-2.8,3.09-5.55,6.29-8.22,9.59L89.31,399.52c-4.64,5.72-5.25,10.92-4.73,12.3L109,436.27c1.4.51,6.6-.09,12.32-4.73l208.19-169c3.3-2.69,6.52-5.44,9.61-8.23a90.6,90.6,0,0,1-72.65-72.63Zm3.59,86L247.85,290a8.47,8.47,0,0,1-12,0l-5-5a8.49,8.49,0,0,1,0-12l22.22-22.22a8.52,8.52,0,0,1,12,0l5,5A8.49,8.49,0,0,1,270.07,267.78Z" />
                        <path class="svgWhite"
                            d="M385.2,210.18q-4-3.13-8-6.43c-8.79-7.22-17.42-15.06-25.7-23.35a350.45,350.45,0,0,1-32.3-37q-3.2-4.24-6.17-8.49t-5.53-8.22c-2-3-3.82-6-5.6-9a70.88,70.88,0,0,0-11.49,17.79,70.13,70.13,0,0,0-4.94,15.31,71.69,71.69,0,0,0,71.08,86.07,72,72,0,0,0,28.89-6.37,70.87,70.87,0,0,0,15.06-9.23q-3.66-2.49-7.33-5.14Q389.16,213.22,385.2,210.18Z" />
                        <path class="svgWhite"
                            d="M406.47,114.35a72.13,72.13,0,0,0-12.75-10.18c-1-.64-2-1.25-3.06-1.82s-2.07-1.13-3.13-1.65-2.25-1.09-3.39-1.57l-1.16-.5-1.15-.47c-.36-.13-.71-.28-1.06-.4l-1.29-.47c-1.1-.4-2.2-.75-3.31-1.08s-2.22-.64-3.34-.91a71.32,71.32,0,0,0-18.38-2.07l-.84,0-.91,0c-.42,0-.84,0-1.25.06-1.71.1-3.41.27-5.12.5L345.2,94c-.49.07-1,.14-1.45.23-.31.06-.61.1-.91.17l-1.1.21c-.34.06-.67.13-1,.21-.49.09-1,.2-1.48.33-1,.24-2,.49-3,.78l-1.42.41-1.37.43c-.51.18-1,.34-1.54.53s-.9.32-1.35.5-1,.38-1.52.59c-.95.39-1.89.79-2.83,1.21-.48.21-.94.43-1.4.66a71,71,0,0,0-8.33,4.71,254.07,254.07,0,0,0,14.67,22.63,327,327,0,0,0,33.75,39.34,335.93,335.93,0,0,0,30.44,27c6.12,4.81,12.31,9.27,18.47,13.34l.93-1.29.74-1.09c.55-.81,1.06-1.62,1.56-2.43.25-.41.49-.82.73-1.24.49-.82.95-1.66,1.4-2.49.22-.42.44-.84.65-1.27s.43-.85.64-1.27c.4-.85.8-1.71,1.17-2.58s.74-1.74,1.07-2.6c.16-.39.3-.77.44-1.17,0-.08.07-.15.1-.24l.43-1.23c.15-.44.3-.9.44-1.34s.29-.89.42-1.34c.55-1.83,1-3.7,1.43-5.57.09-.4.16-.8.24-1.19s.18-.92.25-1.37.17-.92.23-1.37c.15-.91.27-1.84.38-2.75.05-.42.1-.83.14-1.24s.06-.65.09-1,.05-.77.09-1.16c0-.57.06-1.14.08-1.71s.05-1.06.06-1.59,0-1.06,0-1.6A71.67,71.67,0,0,0,406.47,114.35Z" />
                    </g>
                </svg>
            </MobileIcon>
            <MobileIcon :action="true" @clickedIcon="chatToggle" :customStyle="{'is-active': settings.chatOpen}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="Chat">
                    <g id="Chat">
                        <path class="svgWhite"
                            d="M476.56,100.82v252.9a33,33,0,0,1-32.93,32.91H186.39a70.54,70.54,0,0,0-23.64,4.07L49.18,430.91A15,15,0,0,1,30.6,410.45l24.65-52.76a66.63,66.63,0,0,0,6.24-28.05V100.82A33,33,0,0,1,94.41,67.89H443.63A33,33,0,0,1,476.56,100.82Z" />
                    </g>
                    <g id="Ebene_13" data-name="Ebene 13">
                        <rect class="svgBG" x="241.13" y="0.44" width="41.87" height="264.21" rx="17.01"
                            transform="translate(129.52 394.6) rotate(-90)" />
                        <rect class="svgBG" x="220.01" y="113.44" width="41.87" height="221.98" rx="15.6"
                            transform="translate(16.52 465.37) rotate(-90)" />
                        <rect class="svgBG" x="255.22" y="170.12" width="41.87" height="292.39" rx="17.9"
                            transform="translate(-40.17 592.46) rotate(-90)" />
                    </g>
                </svg>

            </MobileIcon>
        </nav>

    </div>

    <ChatContainer />
    <Profile :profileOpen="settings.profileOpen" />
    <UploadArea />
    <Notification :bellOpen="settings.bellOpen" />
</template>

<script>
import MobileIcon from './MobileIcons.vue'
import Bell from './Bell.vue'
import Notification from './SubOpen/Notification.vue'
import Profile from './SubOpen/Profile.vue'
import UploadButton from '@/components/Elements/UploadButton.vue'
import UploadArea from '@/components/Menus/SubOpen/UploadArea.vue'
import { ChatContainer } from '@/components/Elements'

export default {
    components: {
        MobileIcon,
        Bell,
        Notification,
        Profile,
        UploadButton,
        UploadArea,
        ChatContainer
    },
    computed: {
        settings() {
            return this.$store.state.settings
        }
    },
    methods: {
        bellToggle() {
            this.settings.bellOpen = !this.settings.bellOpen
            this.settings.profileOpen = false
            this.settings.uploadOpen = false
            this.settings.chatOpen = false
        },
        profileToggle() {
            this.settings.profileOpen = !this.settings.profileOpen
            this.settings.bellOpen = false
            this.settings.uploadOpen = false
            this.settings.chatOpen = false
        },
        chatToggle() {
            this.settings.chatOpen = !this.settings.chatOpen
            this.settings.profileOpen = false
            this.settings.bellOpen = false
            this.settings.uploadOpen = false
        }
    }
    


}
</script>

<style>

</style>

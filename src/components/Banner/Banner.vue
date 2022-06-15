<template>
    <div class="SecondBanners" :class="bannerClass">

    </div>
</template>
<script>
export default {
    props: [
        "boxWidth" = 40,
        "bannerClass" = ["CommunityBanner", "EventsBanner"]
    ],
}
</script>
<style>

</style>
<template>
<div class="commentContainer">
    <h2>Unsere Jammer <br> lieben uns!</h2>
    <div
        ref="commentContainer"
        class="commentSlide flex_center_h flex_start">

        <div
            ref="comment"
            class="comment"
            v-for="(comment, key) in $store.state.comments"
            :key="comment">

            <div class="commentInfo flex_center_h flex_start">
                <img :src="require('@/assets/img/profile/' + $store.state.comments[key].img + '.jpg')" :alt="$store.state.comments[key].img">
                <h3>{{ $store.state.comments[key].name }}</h3>

            </div>

            <div class="comment_text">
                <p>{{ $store.state.comments[key].comment }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        const scrollContainer = this.$refs.commentContainer

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault()
            scrollContainer.scrollLeft += evt.deltaY / 2
        })
    }

}
</script>

<style>

</style>

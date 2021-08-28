<template>
    <div>
        Board
        <div>bid: {{bid}}</div>
        <hr />
        <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
        <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0
        }
    },
    created() {
        this.bid = this.$route.params.bid
    }
}
</script>


<style>

</style>
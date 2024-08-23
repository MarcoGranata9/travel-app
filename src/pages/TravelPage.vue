<script>
import jsonData from "../jsonData.json";
import Card from "../components/Card.vue";
export default {
    data() {
        return {
            data: jsonData
        };
    },
    components: {
        Card,
    },
}
</script>

<template>
    <div class="container mt-4">
        <h1>I tuoi Viaggi</h1>
        <div class="row row-col-4">
            <div class="col-4" v-for="trip in data.viaggi" :key="trip.titolo">
                <Card :trip="trip"></Card>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
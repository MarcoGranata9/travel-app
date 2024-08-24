<script>
import { store } from "../store";
import DetailsCard from "../components/DetailsCard.vue";

export default {
    data() {
        return {
            store,
        }
    },
    props: ['id'],
    components: {DetailsCard,}
}
</script>

<template>
    <h1 class="text-center">{{ store.data.viaggi[id].titolo }}</h1>
    <div class="container-flex">
        <div class="row row-col-4 p-3">
            <div class="col-3" v-for="(day, index) in store.data.viaggi[id].giornate" :key="index">
                <DetailsCard :day=day :index=index></DetailsCard>
                
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
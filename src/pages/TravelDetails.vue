<script>
import jsonData from "../jsonData.json";

export default {
    data() {
        return {
            data: jsonData,
        }
    },
    props: ['id'],
}
</script>

<template>
    <h1 class="text-center">{{ data.viaggi[id].titolo }}</h1>
    <div class="container-flex">
        <div class="row row-col-4 p-3">
            <div class="col-3" v-for="day in data.viaggi[id].giornate">
                <div class="card" style="width: 18rem;" >
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <h5 class="card-title text-center">{{ day.titolo }}</h5>
                        <p class="card-text">Data: {{ day.data }}</p>
                        <p class="card-text">{{ day.descrizione }}</p>
                    </div>
                    <h5 class="ps-3">Tappe:</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="tappa in day.tappe">{{ tappa.titolo }}</li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
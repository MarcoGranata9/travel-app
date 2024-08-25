<script>
import { store } from "../store";
import DetailsCard from "../components/DetailsCard.vue";

export default {
    data() {
        return {
            store,
            giornata: {
                data: "",
                titolo: "",
                descrizione: "",
                tappe: [],
            }
        }
    },
    props: ['id'],
    components: { DetailsCard,},
    methods: {
        saveData() {
            let id = this.id
            this.store.data.viaggi[id].giornate.push(this.giornata)
            this.giornata = {
                data: "",
                titolo: "",
                descrizione: "",
                tappe: [],
            }
            localStorage.setItem("data", JSON.stringify(this.store.data));
        }

    }
}
</script>

<template>
    <h1 class="text-center">{{ store.data.viaggi[id].titolo }}</h1>
    <div class="container-flex">
        <div class="row g-3 p-5 m-0 justify-content-center">
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">Data</label>
                <input v-model="giornata.data" type="date" class="form-control" id="validationCustom01" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">Titolo</label>
                <input v-model="giornata.titolo" type="text" class="form-control" id="validationCustom02" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>  
            
            <div class="col-2 d-flex justify-content-center align-items-end">
                <button @click="saveData" class="btn btn-primary">Crea</button>
            </div>
        </div>
        <div class="row row-col-4 m-0 ">
            <div class="col-3" v-for="(day, index) in store.data.viaggi[id].giornate" :key="index">
                <DetailsCard :day=day :index=index :id=id></DetailsCard>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
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
    components: {
        DetailsCard,
    },
    methods: {
        saveData() {
            let id = this.id;
            if (this.giornata.data && this.giornata.titolo) {
                this.store.data.viaggi[id].giornate.push(this.giornata);
                this.giornata = {
                    data: "",
                    titolo: "",
                    descrizione: "",
                    tappe: [],
                };
                localStorage.setItem("data", JSON.stringify(this.store.data));
            } else {
                alert("Compila tutti i campi obbligatori!");
            }
        },
    }
}
</script>

<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">{{ store.data.viaggi[id].titolo }}</h1>
        
        <div class="row g-3 justify-content-center">
            <div class="col-md-4">
                <label for="data" class="form-label">Data</label>
                <input v-model="giornata.data" type="date" class="form-control" id="data" required>
            </div>
            <div class="col-md-4">
                <label for="titolo" class="form-label">Titolo</label>
                <input v-model="giornata.titolo" type="text" class="form-control" id="titolo" placeholder="Inserisci un titolo" required>
            </div>
            <div class="col-md-2 d-flex justify-content-center align-items-end">
                <button @click="saveData" class="btn btn-primary w-100" :disabled="!giornata.data || !giornata.titolo">Crea</button>
            </div>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
            <div class="col" v-for="(day, index) in store.data.viaggi[id].giornate" :key="index">
                <DetailsCard :day="day" :index="index" :id="id" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1100px;
    margin: auto;
}

h1 {
    color: #333;
    font-size: 2.5rem;
}

.row {
    margin-bottom: 2rem;
}

.btn {
    font-size: 1.1rem;
    padding: 10px 20px;
}

input[type="date"],
input[type="text"] {
    padding: 10px;
    font-size: 1rem;
}

.row-cols-1 > .col,
.row-cols-md-2 > .col,
.row-cols-lg-3 > .col {
    margin-bottom: 1.5rem;
}

.DetailsCard {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.DetailsCard:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>

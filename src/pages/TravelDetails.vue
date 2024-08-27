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
    <div class="container-flex m-1 m-sm-5">
        <div class="d-flex">
            <!-- Sidebar -->
            <aside class="sidebar p-3">
                <h3 class="text-center mb-4">Aggiungi Giornata</h3>
                <div class="mb-3">
                    <label for="data" class="form-label">Data</label>
                    <input v-model="giornata.data" type="date" class="form-control" id="data" required>
                </div>
                <div class="mb-3">
                    <label for="titolo" class="form-label">Titolo</label>
                    <input v-model="giornata.titolo" type="text" class="form-control" id="titolo" placeholder="Inserisci un titolo" required>
                </div>
                <button @click="saveData" class="btn btn-primary w-100" :disabled="!giornata.data || !giornata.titolo">Crea</button>
            </aside>

            
            <main class="content flex-grow-1 ms-0 m-sm-3">
                <h1 class="text-center mb-4">{{ store.data.viaggi[id].titolo }}</h1>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div class="col" v-for="(day, index) in store.data.viaggi[id].giornate" :key="index">
                        <DetailsCard :day="day" :index="index" :id="id" />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.d-flex {
    display: flex;
    flex-wrap: nowrap;
    

    @media (max-width: 600px) {
       flex-direction: column;
    }
}

.sidebar {
    width: 25%;
    height: 30%;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 50px;

     @media (max-width: 600px) {
        position: static;
        width: 100%;
        margin-bottom: 1rem;
    }
}

.content {
    width: 75%;

    @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 1rem;
    }
}

h1 {
    color: #333;
    font-size: 2.5rem;
}

h3 {
    color: #555;
    font-size: 1.5rem;
}

.row {
    margin-bottom: 2rem;
}

input[type="date"],
input[type="text"] {
    padding: 10px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
}

.btn-primary {
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    padding: 12px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    
    &:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }
}

.DetailsCard {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
}
</style>

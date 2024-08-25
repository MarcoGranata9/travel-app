<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            viaggio: {
                id: 0,
                immagine: "",
                titolo: "",
                descrizione: "",
                dataInizio: "",
                dataFine: "",
                giornate: [],
            }
        }
    },
    methods: {
        setId() {
            this.viaggio.id = this.store.data.viaggi.length;
        },
        saveData() {
            this.setId();
            this.store.data.viaggi.push(this.viaggio);
            localStorage.setItem("data", JSON.stringify(this.store.data));
        }
    }
}
</script>

<template>
    <div class="container p-5">
        <h1 class="text-center mb-4">Crea il tuo Viaggio</h1>
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="mb-4">
                    <label for="title" class="form-label">Nome del Viaggio</label>
                    <input v-model="viaggio.titolo" class="form-control" id="title" type="text"
                        placeholder="Inserisci il nome del viaggio" required>
                </div>

                <div class="mb-4">
                    <label for="description" class="form-label">Descrizione</label>
                    <textarea v-model="viaggio.descrizione" class="form-control" id="description" rows="4"
                        placeholder="Descrivi il viaggio" required></textarea>
                </div>

                <div class="mb-4">
                    <label for="image" class="form-label">Immagine del Viaggio</label>
                    <input v-model="viaggio.immagine" class="form-control" id="image" type="text"
                        placeholder="Inserisci l'URL dell'immagine" required>
                </div>

                <div class="row mb-4">
                    <div class="col-md-6">
                        <label for="date-start" class="form-label">Data Inizio</label>
                        <input v-model="viaggio.dataInizio" class="form-control" id="date-start" type="date" required>
                    </div>
    
                    <div class="col-md-6">
                        <label for="date-end" class="form-label">Data Fine</label>
                        <input v-model="viaggio.dataFine" class="form-control" id="date-end" type="date" required>
                    </div>
                </div>

                <div class="text-center">
                    <button :disabled="!viaggio.titolo || !viaggio.dataFine || !viaggio.dataInizio" class="btn btn-primary btn-lg">
                        <router-link :to="{name: 'travel'}" class="text-white text-decoration-none" @click="saveData"  type="submit">
                            Salva Viaggio
                        </router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #333;
}

label {
    font-weight: bold;
}

input, textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
}

.btn-primary {
    background-color: #007bff;
    border: none;
    padding: 10px 20px;
    font-size: 1.25rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
    &:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }
}
</style>

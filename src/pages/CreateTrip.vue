<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            viaggio: {
                id: 0,
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
            this.viaggio.id = this.store.data.viaggi.length
        },
        saveData() {
            this.setId()
            this.store.data.viaggi.push(this.viaggio)
            localStorage.setItem("data", JSON.stringify(this.store.data));
        }

    }
}
</script>

<template>
    <div class="container-flex">
        <h1 class="text-center">Crea il tuo viaggio</h1>
        <div class="row justify-content-center">
            <div class="col-8">
                
                    <div class="mb-3">
                        <label for="title" class="form-label">Titolo</label>
                        <input v-model="viaggio.titolo" class="form-control" id="title" type="text"
                            placeholder="Inserisci titolo" aria-label="default input example">
                    </div>

                    <div class="mb-3">
                        <label for="description" class="form-label">Example textarea</label>
                        <textarea v-model="viaggio.descrizione" class="form-control" id="description"
                            rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="date-start" class="form-label">Data Inizio</label>
                        <input v-model="viaggio.dataInizio" class="form-control" id="date-start" type="date"
                            aria-label="default input example">
                    </div>

                    <div class="mb-3">
                        <label for="date-end" class="form-label">Data Fine</label>
                        <input v-model="viaggio.dataFine" class="form-control" id="date-end" type="date"
                            aria-label="default input example">
                    </div>

                    <button @click="saveData" class="btn btn-primary" type="submit">Submit form</button>

                    <p>{{ viaggio.titolo }}</p>
                    <p>{{ viaggio.id }}</p>
                    <p>{{ viaggio.descrizione }}</p>
                    <p>{{ viaggio.dataInizio }}</p>
                    <p>{{ viaggio.dataFine }}</p>

                

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
<script>
import { store } from "../store";
import Card from "../components/Card.vue";

export default {
    data() {
        return {
            store
        };
    },
    components: {
        Card,
    },
}
</script>

<template>
    <div class="container mt-4">
        <h1 class="text-center mb-4">I tuoi Viaggi</h1>
        
        <!-- Messaggio se non ci sono viaggi -->
        <div v-if="store.data.viaggi.length === 0" class="text-center">
            <p>Non hai ancora creato nessun viaggio. <router-link to="/create" class="btn btn-primary">Crea un nuovo viaggio</router-link></p>
        </div>

        <!-- Lista dei viaggi -->
        <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col" v-for="trip in store.data.viaggi" :key="trip.id">
                <Card :trip="trip" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    font-size: 2.5rem;
    color: #333;
}

.card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
}

.text-center {
    margin-top: 2rem;
    color: #666;
}

.btn-primary {
    margin-top: 1rem;
    padding: 10px 20px;
    font-size: 1.2rem;
}
</style>

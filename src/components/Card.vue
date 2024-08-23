<script>
export default {
    data() {
        return {

        }
    },
    props: {
        trip: Object,
    }
}
</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="trip.immagine" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ trip.titolo }}</h5>
            <p class="card-text">{{ trip.descrizione }}</p>
            <p class="card-text">Inizio Viaggio: {{ trip.dataInizio }}</p>
            <p class="card-text">Fine Viaggio: {{ trip.dataFine }}</p>

            <router-link :to="{name: 'details', params: { id: trip.id}}" class="btn btn-primary">Go somewhere</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
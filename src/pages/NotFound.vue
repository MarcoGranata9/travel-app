<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <section class="error-section vh-100 d-flex flex-column justify-content-center align-items-center">
        <div class="text-center text-white">
            <h1 class="display-1 fw-bold">Errore 404</h1>
            <p class="fs-4">Oops! La pagina che stai cercando non esiste.</p>
            <router-link :to="{ name: 'home' }" class="btn btn-primary btn-lg mt-3">Torna alla Home</router-link>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.error-section {
    background-color: #343a40;
    color: #fff;
    text-align: center;
    padding: 20px;
    .btn-primary {
        background-color: #007bff;
        border: none;
        transition: background-color 0.3s ease, transform 0.3s ease;
        &:hover {
            background-color: #0056b3;
            transform: scale(1.05);
        }
    }
}

h1 {
    font-size: 5rem;
}

p {
    font-size: 1.5rem;
    margin-bottom: 20px;
}
</style>

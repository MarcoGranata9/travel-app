<script>
export default {
    data() {
        return {

        };
    },
}
</script>

<template>
    <section class="vh-100 d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="d-flex justify-content-center align-items-center flex-column">
                <div class="bg-dark bg-opacity-75 d-flex justify-content-center gap-3 align-items-center flex-column p-5 rounded text-white shadow-lg">
                    <h1 class="text-center display-4 fw-bold">Tripo</h1>
                    <h2 class="text-center fs-3">Il Tuo Viaggio, Pianificato alla Perfezione!</h2>
                    <router-link :to="{name: 'create'}" class="btn btn-primary btn-lg mt-3">Inizia a Pianificare</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-image: url("../assets/landbg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    .container {
        z-index: 2;
        position: relative;
    }
}

h1, h2 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.btn-primary {
    background-color: #007bff;
    border: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
    &:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }
}
</style>

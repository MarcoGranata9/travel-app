<script>
export default {
    data() {
        return {

        };
    },
}
</script>

<template>
    <section class="vh-100 p-5">
        <div class="container-fluid">
            <div class="d-flex justify-content-center align-items-center flex-column">
                <div class="bg-dark bg-opacity-50 d-flex justify-content-center gap-4 align-items-center flex-column p-4 rounded text-white">
                    <h1 class="text-center">Tripo</h1>
                    <h1 class="text-center">Il Tuo Viaggio, Pianificato alla Perfezione!</h1>
                    <router-link :to="{name: 'travel'}" class="btn btn-primary btn-lg">Inizia a Pianificare</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        background-image: url("../assets/landbg.jpg");
        background-size: cover;
    }
</style>
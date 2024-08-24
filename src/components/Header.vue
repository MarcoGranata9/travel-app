<script>
export default{
    data(){
        return {
            links: [
                {
                    name: 'home',
                    title: 'Home',
                },
                {
                    name: 'create',
                    title: 'Crea un viaggio',
                },
                {
                    name: 'travel',
                    title: 'I tuoi Viaggi',
                },
            ]

        }
    }
}
</script>

<template>
<nav class="navbar navbar-expand-lg bg-primary bg-gradient">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">
        <img src="/src/assets/logo.png" alt="Logo" width="70" height="70" class="d-inline-block align-text-top rounded-circle" >
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="link in links" :key="link.name">
            <router-link :to="{ name: link.name }" class="nav-link text-white fs-4 text">
                {{link.title}}
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>

</style>

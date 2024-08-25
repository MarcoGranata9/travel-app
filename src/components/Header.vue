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
    <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="/src/assets/logo.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top rounded-circle me-2">
        <span class="fs-4 text-white fw-bold">Tripo</span>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="link in links" :key="link.name">
            <router-link :to="{ name: link.name }" class="nav-link text-white fs-5 text-uppercase fw-medium mx-2">
                {{link.title}}
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
.navbar {
    background: linear-gradient(45deg, #007bff, #00d4ff);
    padding: 10px 20px;
}

.navbar-brand {
    font-family: 'Helvetica Neue', sans-serif;
}

.nav-link {
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
        color: #ffdf00;
        transform: scale(1.1);
    }
}

.navbar-toggler {
    border: none;
    &:focus {
        outline: none;
        box-shadow: none;
    }
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

@media (max-width: 992px) {
    .navbar-nav {
        text-align: center;
    }
}
</style>

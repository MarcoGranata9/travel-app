<script>
import Header from './components/Header.vue'
import jsonData from "./jsonData.json"
import { store } from './store';
export default {
  data() {
    return {
      store
    };
  },
  components: {Header},
  beforeCreate() {
    if(localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify(jsonData))
    }
  },
  created() {
    this.store.data = JSON.parse(localStorage.getItem("data"))
  }
}

</script>

<template>
  <Header></Header>
  
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@import "@fortawesome/fontawesome-free/css/all.css";
</style>

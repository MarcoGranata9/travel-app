<script>
import { store } from '../store'

export default {
    data() {
        return {
            isVisited: false,
            store,
        };
    },
    props: {
        index: Number,
        id: String,
        dayInd: Number,
    },
    computed: {
        getValue() {
            this.isVisited = this.store.data.viaggi[this.id].giornate[this.dayInd].tappe[this.index].visitata
        },
        toggleClass() {
            return {
                'bg-danger': !this.isVisited,
                'bg-success': this.isVisited,
                'text-white': true,
                'm-1': true,
                'my-pill': true,
            };
        },
        toggleText() {
            return this.isVisited ? 'Visitata' : 'Non Visitata';
        },
    },
    methods: {
        toggleStatus() {
            this.isVisited = !this.isVisited;
            
            // salva nello storage
            this.store.data.viaggi[this.id].giornate[this.dayInd].tappe[this.index].visitata = this.isVisited
            localStorage.setItem("data", JSON.stringify(this.store.data))            
        },
    },
}
</script>

<template>
    <span :class="getValue, toggleClass" @click="toggleStatus" class="rounded-pill px-2 fs-6 text-nowrap">
        {{ toggleText }}
        <i v-if="isVisited" class="fa-solid fa-circle-check"></i>
        <i v-else class="fa-solid fa-circle-xmark"></i>
    </span>
</template>


<style lang="scss" scoped>
.my-pill {
    cursor: pointer;
}
</style>

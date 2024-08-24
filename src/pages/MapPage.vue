<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
            apiKey: "ZyDk3PPXw0hnAGNFCFOULBxH7it8NAGe",
        }
    },
    props: ['id','index'],
    mounted() {
        tt.setProductInfo("boh", "6.25.0")
        let tappe = store.data.viaggi[this.id].giornate[this.index].tappe
        
        const map = tt.map({
            key: this.apiKey,
            container: "map",
            center: [tappe[0].location.longitudine, tappe[0].location.latitudine],
            zoom: 11,
        })
        
        map.on('load', ()=> {
            for (let i = 0; i < tappe.length; i++) {        
                new tt.Marker().setLngLat({lng: tappe[i].location.longitudine, lat: tappe[i].location.latitudine}).addTo(map)
            }
            
        })
    }
}
</script>

<template>
    <h1>MAPPA</h1>

    <div id="map" style="width: 600px; height: 600px;"></div>
</template>

<style lang="scss" scoped></style>
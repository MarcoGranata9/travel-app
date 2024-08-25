<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
            apiKey: "ZyDk3PPXw0hnAGNFCFOULBxH7it8NAGe",
            tappa: {
                titolo: "",
                location: {
                    latitudine: 0,
                    longitudine: 0,
                },
            }
        }
    },
    props: ['id', 'index'],
    mounted() {
        tt.setProductInfo("boh", "6.25.0")
        let tappe = store.data.viaggi[this.id].giornate[this.index].tappe
        let tappa = this.tappa

        const map = tt.map({
            key: this.apiKey,
            container: "map",
            center: [tappe[0].location.longitudine, tappe[0].location.latitudine],
            zoom: 11,
            language: 'it-IT',
        })

        map.on('load', () => {
            for (let i = 0; i < tappe.length; i++) {
                new tt.Marker().setLngLat({ lng: tappe[i].location.longitudine, lat: tappe[i].location.latitudine }).addTo(map)
            }
        })

        var options = {
            searchOptions: {
                key: this.apiKey,
                language: "it-IT",
                limit: 5,
            },
            autocompleteOptions: {
                key: this.apiKey,
                language: "it-IT",
            },
        }

        var ttSearchBox = new tt.plugins.SearchBox(tt.services, options)
        var searchMarkersManager = new SearchMarkersManager(map)
        ttSearchBox.on("tomtom.searchbox.resultsfound", handleResultsFound)
        ttSearchBox.on("tomtom.searchbox.resultselected", handleResultSelection)
        ttSearchBox.on("tomtom.searchbox.resultfocused", handleResultSelection)
        ttSearchBox.on("tomtom.searchbox.resultscleared", handleResultClearing)
        map.addControl(ttSearchBox, "top-left")

        function handleResultsFound(event) {
            var results = event.data.results.fuzzySearch.results

            if (results.length === 0) {
                searchMarkersManager.clear()
            }
            searchMarkersManager.draw(results)
            fitToViewport(results)
        }

        // Salva Dati
        function handleResultSelection(event) {
            var result = event.data.result

            if (result.type === "category" || result.type === "brand") {
                return
            }
            searchMarkersManager.draw([result])

            tappa.location.latitudine = result.position.lat
            tappa.location.longitudine = result.position.lng

            fitToViewport(result)
        }

        function fitToViewport(markerData) {
            if (!markerData || (markerData instanceof Array && !markerData.length)) {
                return
            }
            var bounds = new tt.LngLatBounds()
            if (markerData instanceof Array) {
                markerData.forEach(function (marker) {
                    bounds.extend(getBounds(marker))
                })
            } else {
                bounds.extend(getBounds(markerData))
            }
            map.fitBounds(bounds, { padding: 100, linear: true })
        }

        function getBounds(data) {
            var btmRight
            var topLeft
            if (data.viewport) {
                btmRight = [
                    data.viewport.btmRightPoint.lng,
                    data.viewport.btmRightPoint.lat,
                ]
                topLeft = [data.viewport.topLeftPoint.lng, data.viewport.topLeftPoint.lat]
            }
            return [btmRight, topLeft]
        }

        function handleResultClearing() {
            searchMarkersManager.clear()
        }

        function SearchMarkersManager(map, options) {
            this.map = map
            this._options = options || {}
            this._poiList = undefined
            this.markers = {}
        }

        SearchMarkersManager.prototype.draw = function (poiList) {
            this._poiList = poiList
            this.clear()
            this._poiList.forEach(function (poi) {
                var markerId = poi.id
                var poiOpts = {
                    name: poi.poi ? poi.poi.name : undefined,
                    address: poi.address ? poi.address.freeformAddress : "",
                    distance: poi.dist,
                    classification: poi.poi ? poi.poi.classifications[0].code : undefined,
                    position: poi.position,
                    entryPoints: poi.entryPoints,
                }
                var marker = new SearchMarker(poiOpts, this._options)
                marker.addTo(this.map)
                this.markers[markerId] = marker
            }, this)
        }

        SearchMarkersManager.prototype.clear = function () {
            for (var markerId in this.markers) {
                var marker = this.markers[markerId]
                marker.remove()
            }
            this.markers = {}
            this._lastClickedMarker = null
        }
        function SearchMarker(poiData, options) {
            this.poiData = poiData
            this.options = options || {}
            this.marker = new tt.Marker({
                element: this.createMarker(),
                anchor: "bottom",
            })
            var lon = this.poiData.position.lng || this.poiData.position.lon
            this.marker.setLngLat([lon, this.poiData.position.lat])
        }

        SearchMarker.prototype.addTo = function (map) {
            this.marker.addTo(map)
            this._map = map
            return this
        }

        SearchMarker.prototype.createMarker = function () {
            var elem = document.createElement("div")
            elem.className = "tt-icon-marker-black tt-search-marker"
            if (this.options.markerClassName) {
                elem.className += " " + this.options.markerClassName
            }
            var innerElem = document.createElement("div")
            innerElem.setAttribute(
                "style",
                "background: white; width: 10px; height: 10px; border-radius: 50%; border: 3px solid black;"
            )

            elem.appendChild(innerElem)
            return elem
        }

        SearchMarker.prototype.remove = function () {
            this.marker.remove()
            this._map = null
        }
    },
    methods: {
        saveData() {
            let id = this.id
            let index = this.index
            this.store.data.viaggi[id].giornate[index].tappe.push(this.tappa)
            this.tappa = {
                titolo: "",
                location: {
                    latitudine: 0,
                    longitudine: 0,
                },
            }
            localStorage.setItem("data", JSON.stringify(this.store.data));
        },
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<template>
    <div class="container-flex py-5">
        <div class="row justify-content-center m-0">
            <div class="col-lg-8 col-md-10 col-sm-12">
                <h1 class="text-center mb-4">Mappa del Viaggio</h1>
                <div class="mb-3">
                    <label for="nomeTappa" class="form-label">Nome Tappa</label>
                    <input v-model="tappa.titolo" type="text" class="form-control" id="nomeTappa" placeholder="Inserisci il nome della tappa">
                </div>
                <div class="mb-3">
                    <div id="map" class="map-container"></div>
                </div>
                <button @click="saveData(), goBack()" class="btn btn-primary w-100">Salva Tappa</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-flex {
    background-color: #f9f9f9;
    min-height: 100vh;
}

h1 {
    font-size: 2.5rem;
    color: #333;
    font-family: 'Helvetica Neue', sans-serif;
}

.form-label {
    font-weight: bold;
    color: #555;
}

.form-control {
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 1rem;
}

.map-container {
    width: 100%;
    height: 600px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary {
    background-color: #007bff;
    border: none;
    padding: 12px 20px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 8px;
    transition: background-color 0.3s;
}

.btn-primary:hover {
    background-color: #0056b3;
}
</style>

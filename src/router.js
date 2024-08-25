import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TravelPage from "./pages/TravelPage.vue";
import TravelDetails from "./pages/TravelDetails.vue";
import NotFound from "./pages/NotFound.vue";
import CreateTrip from "./pages/CreateTrip.vue";
import MapPage from "./pages/MapPage.vue";
import CreateStage from "./pages/CreateStage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/travel',
            name: 'travel',
            component: TravelPage,
        },
        {
            path: '/trip/:id',
            name: 'details',
            component: TravelDetails,
            props: true,
        },
        {
            path: '/new-trip',
            name: 'create',
            component: CreateTrip,
        },
        {
            path: '/map/:id/:index',
            name: 'map',
            component: MapPage,
            props: true,
        },
        {
            path: '/new-stage/:id/:index',
            name: 'stage',
            component: CreateStage,
            props: true,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        }
    ]
})

export {router}

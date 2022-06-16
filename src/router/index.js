import { createRouter, createWebHashHistory } from 'vue-router'
import NowListening from "../view/siderview/NowListening.vue"
import SongSheet from "../view/innerview/SongSheet.vue"
const routes = [{
    path: '/',
    component: NowListening,
    children: [{
        path: '/inner',
        component: SongSheet,
    }],
}, ]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
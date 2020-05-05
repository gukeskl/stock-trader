import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'

import YourStocs from './views/YourStocs.vue'
import History from './views/History.vue'
import Traiding from './views/TraidingPanel.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/yourstocs', component: YourStocs },
  { path: '/history', component: History },
  { path: '/traiding', component: Traiding }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

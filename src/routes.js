import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'

import YourStocks from './views/YourStocks.vue'
import History from './views/History.vue'
import Traiding from './views/TraidingPanel.vue'
import Settings from './views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/yourstocks', component: YourStocks },
  { path: '/history', component: History },
  { path: '/traiding', component: Traiding },
  { path: '/settings', component: Settings }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

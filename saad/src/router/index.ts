import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainBoard from '../components/MainBoard.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: MainBoard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

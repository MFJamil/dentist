import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainBoard from '../components/MainBoard.vue'
import Doctors from '../components/Doctors.vue'
import Team from '../components/Team.vue'
import Services from '../components/Services.vue'
import Tour from '../components/Tour.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: MainBoard
  },
  {
    path: '/docs',
    name: 'Doctors',
    component: Doctors
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },

  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/tour',
    name: 'Tour',
    component: Tour
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainBoard from '../components/MainBoard.vue'
import Doctors from '../components/Doctors.vue'
import Team from '../components/Team.vue'
import Services from '../components/service/Services.vue'
import Tour from '../components/Tour.vue'
import Timings from '../components/Timings.vue'
import Location from '../components/Location.vue'
import Emergency from '../components/Emergency.vue'
import UserMessage from '../components/UserMessage.vue'
import Implantology from '../components/service/Implantology.vue'
import GalaryCarousel from '../components/GalaryCarousel.vue'

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
    component: GalaryCarousel
  },
  {
    path: '/timings',
    name: 'Timings',
    component: Timings
  },

  {
    path: '/location',
    name: 'Location',
    component: Location
  },
  {
    path: '/emergency',
    name: 'Emergency',
    component: Emergency
  },
  {
    path: '/usermessage',
    name: 'UserMessage',
    component: UserMessage
  },
  {
    path: '/implantology',
    name: 'implantology',
    component: Implantology
  },

  

  
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

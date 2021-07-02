import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Dashboard from '../views/Dashboard.vue'
import Tracker from '../components/Tracker.vue'
import Addpage from '../views/Addpage.vue'
import Admin from '../views/Admin.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/tracker',
    name: 'Tracker',
    component: Tracker
  },
  {
    path: '/addpage',
    name: 'Addpage',
    components: Addpage
  },
  {
    path: '/admin',
    name: 'admin',
    components: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

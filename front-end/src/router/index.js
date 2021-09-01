import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Dashboard from '../views/Dashboard.vue'
import Edit from '../components/Edit.vue'
import Tracker from '../components/Tracker.vue'

import List from '../views/List.vue'


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
    path: '/list',
    name: 'List',
    components: List
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

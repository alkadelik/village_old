import { createRouter, createWebHistory } from 'vue-router'
import Inventory from '../views/InventoryView.vue'
import Landing from '../views/LandingView.vue'
import Login from '../views/LoginView.vue'

const routes = [
  {
    path: '/inventory',
    name: 'inventoryPage',
    component: Inventory
  },
  {
    path: '/',
    name: 'landingPage',
    component: Landing
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: Login
  },
  {
    path: '/listings',
    name: 'listings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListingsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

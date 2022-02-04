import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Welcome from '../views/welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

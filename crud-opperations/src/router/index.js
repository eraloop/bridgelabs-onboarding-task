import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import AddProducts from '../views/AddProducts.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productlist',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/addproducts',
    name: 'AddProducts',
    component: AddProducts
  },
  {
    path: '/editproducts',
    name: 'EditProducts',
    component: AddProducts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

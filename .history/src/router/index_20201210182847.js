import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component:Layout,

  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
    meta: {
      title: '登录/注册'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

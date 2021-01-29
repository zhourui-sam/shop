import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component:Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
          title:'首页'
        }
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('../components/mine/Mine.vue'),
        meta:{
          title:'我的'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
    meta: {
      title: '登录/注册'
    }
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../components/navheader/city/City.vue'),
    meta: {
      title: '城市选择'
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../components/setting/Setting.vue'),
    meta: {
      title: '城市选择'
    }
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../components/details/Details.vue'),
    meta: {
      title: '城市选择'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

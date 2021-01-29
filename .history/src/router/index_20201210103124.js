import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import('../components/page/Page.vue'),
    meta: {
      title: '分页'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

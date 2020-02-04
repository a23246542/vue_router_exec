import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Page from '@/views/pages/page';
//自訂分頁元件

Vue.use(VueRouter)

// ------------
const routes = [
  {
    path: '/home',
    name: '首頁',
    component: Home
  },
  {
    path: '/about',
    name: '關於',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newPage',
    name: '新分頁',
    component: Page
  },
]

const router = new VueRouter({
  routes //??物件裡面怎麼可以放陣列
})

export default router

// ============舊版寫法===============

// export default new VueRouter({
//     routes:[
//         {
//             name:'首頁',
//             path:'/index',
//             component:Home,
//         }
//     ]
// })
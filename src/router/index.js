import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Page from '@/views/pages/page';
import Page2 from '@/views/pages/page2';
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
  {
    path:'/newPage2',
    name:'新分頁2',
    component:Page2
  },
  {
      path:'/card',
      name:'卡片',
    //   redirect:'卡片1',
      component:()=>import('@/views/pages/card.vue'),
      children:[
          {
              name:'卡片1',
              path:'',
              component:()=>import('@/components/card_child/card1')
          },
          {
              name:'卡片2',
              path:'card2',
              component:()=>import('@/components/card_child/card2')
          },
          {
              name:'卡片3',
              path:'card3',
              component:()=>import('@/components/card_child/card3')
          },
          
      ]
  },
  {
    name:'新聞',
    path:'/news/:apiId',
    component:()=>import('@/components/news')
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
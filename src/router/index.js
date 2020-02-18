import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Page from '@/views/pages/page.vue';
import Page2 from '@/views/pages/page2.vue';
// import Menu from '@/components/card_child/cardMenu.vue'
//自訂分頁元件

Vue.use(VueRouter)

// ------------
const routes = [{
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
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/newPage',
        name: '新分頁',
        component: Page
    },
    {
        path: '/newPage2',
        name: '新分頁2',
        component: Page2
    },
    {
        name: '卡片',
        path: '/card',
        //   redirect:'卡片1',
        //   component:()=>import('@/views/pages/card.vue'),
        redirect:'/card/card1',
        // components: {//這些根本不會看到 要寫在子路由
        //     default:()=>import('@/views/pages/card.vue'),
        //     // menuView:()=>import('@/components/card_child/carMenu.vue')//??為何失敗
        //     menuView:()=>import('../components/card_child/cardMenu.vue')//??為何失敗
        //     // menuView:()=>Menu
        // },
        component:()=>import('@/views/pages/card.vue'),
        children: [
            {
                name: '卡片1',
                path: 'card1',
                // component: () => import('@/components/card_child/card1.vue'),
                components:{
                    default:()=>import('@/components/card_child/card1.vue'),
                    menuView:()=>import('@/components/card_child/cardMenu.vue')
                }
            },
            {
                name: '卡片2',
                path: 'card2',
                // component: () => import('@/components/card_child/card2')
                components:{
                    default:()=>import('@/components/card_child/card2.vue'),
                    menuView:()=>import('@/components/card_child/cardMenu.vue')
                }
            },
            {
                name: '卡片3',
                path: 'card3',
                // component: () => import('@/components/card_child/card3')
                components:{
                    default:()=>import('@/components/card_child/card3.vue'),
                    menuView:()=>import('@/components/card_child/cardMenu.vue')
                }
            },

        ]
    },
    {
        name: '新聞',
        path: '/news',
        component: () => import('@/components/news')
    },
    {
        name:'alex單檔',
        path:'/alex15',
        component:() => import('@/views/pages/Alex')
    },
    {
        name:'koma',
        path:'/koma-router',
        component:()=>import('../views/koma/koma-router.vue'),
        children:[
            {
                name:'dynamic',
                path:'player/:id',
                component:()=>import('../views/koma/dynamic.vue')
            }
        ]
    }
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
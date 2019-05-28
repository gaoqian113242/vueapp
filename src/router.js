import VueRouter from 'vue-router'

import HomeContainer from './components/tabber/HomrContainer.vue'

import MemberContainer from './components/tabber/MemberContainer.vue'

import ShopcarContainer from './components/tabber/ShopcarContainer.vue'

import SearchContainer from './components/tabber/SearchContainer.vue'

import NewsList from './components/news/NewsList.vue'

import NewsInfo from './components/news/NewsInfo.vue'

var router = new VueRouter({
  routes: [
    { path:'/' , component: HomeContainer},
    { path:'/home' , component: HomeContainer},
    { path:'/member' , component: MemberContainer},
    { path:'/shopcar' , component: ShopcarContainer},
    { path:'/search' , component: SearchContainer},
    { path:'/home/newslist', component: NewsList },
    { path:'/home/newsinfo/:id', component: NewsInfo },
  ],
  linkActiveClass: 'mui-active',
})

// 把路由对象暴露出去
export default router


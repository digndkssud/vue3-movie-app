import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({  
  // Hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior(){
    return { top: 0 }
  },  
  // pages
  // https://google.com/about
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      // 지정한 루트 이외의 것들은 notfound로 보내버림
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})
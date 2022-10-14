import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import libro from '../views/libro.vue'
import {userDati} from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
   
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/libroincatesimi',
      name: 'libroincatesimi',
      component: libro,
      meta:{'wizard':true}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const store = userDati()
  if(to.meta.wizard && store.class == 'rogue'){
    next('/')
  }else{next()}

})

export default router

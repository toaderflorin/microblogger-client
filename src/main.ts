import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Login from '@/views/LoginView.vue'
import FollowingView from '@/views/FollowingView.vue'
import NewsFeedView from '@/views/NewsFeedView.vue'
import Register from '@/views/Register.vue'
import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/feed',
      name: 'feed',
      component: NewsFeedView
    },
    {
      path: '/follow',
      name: 'follow',
      component: FollowingView
    },
    
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'register',
      component: Register
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('auth')
//   if ((to.path !== '/login' && !token) || (to.path !== '/signup')) {
//     next('/login')
//   } else {
//     next()
//   }
// })

const app = createApp(App)

app.use(router)

app.mount('#app')

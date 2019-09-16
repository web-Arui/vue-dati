import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Guanka from '@/views/guanka'
import Answer from '@/views/answer'
import Ranking from '@/views/Ranking'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Over from '@/views/over'
import Noeself from '@/views/Noeself'
import Setup from '@/views/Setup'
import Changepassword from '@/views/ChangePassword'
import Changeuse from '@/views/ChangeUse'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/login',
      component:Login
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path: '/guanka',
      name: 'guanka',
      component:Guanka
    },
    {
      path:'/answer',
      name:'answer',
      component:Answer
    },
    {
      path:'/ranking',
      name:'ranking',
      component:Ranking
    },
    {
      path:'/over',
      name:'over',
      component:Over
    },
    {
      path:'/noeself',
      name:'noeself',
      component:Noeself
    },
    {
      path:'/setup',
      name:'setup',
      component:Setup
    },
    {
      path:'/changepassword',
      name:'changepassword',
      component:Changepassword
    },
    {
      path:'/changeuse',
      name:'changeuse',
      component:Changeuse
    }
  ]
})
router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem('token')
  if(to.path==='/login' || to.path==='/register'){
    next()
  }else{
    if(!token){
      router.push({name:'login'})
    }
  }
  next()
})
export default router
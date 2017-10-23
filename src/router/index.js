import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Album from '@/components/Album'
import User from '@/components/User'

Vue.use(Router)

// TODO : Travailler nested routes

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
      data: {
        userId: 1
      }
    }
  ]
})

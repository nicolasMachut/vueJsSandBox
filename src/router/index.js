import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Album from '@/components/Album'
import User from '@/components/User'
import Page2 from '@/components/Page2'
import Child1 from '@/components/Child1'
import Child2 from '@/components/Child2'


Vue.use(Router)

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
      component: User,
      data: {
        userId: 1
      }/*,
      children: [
        {
          path: 'child1',
          component: Album
        }
      ]*/
    },
    {
      path: '/page2',
      component: Page2,
      children: [
        {
          path: 'child1',
          component: Child1
        },
        {
          path: 'child2',
          component: Child2
        }
      ]
    },
  ]
})

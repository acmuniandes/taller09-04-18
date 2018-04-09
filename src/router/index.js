import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SomeComponent from '@/components/SomeComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/id/:id',
      name: 'SomeComponent',
      component: SomeComponent
    }
  ]
})

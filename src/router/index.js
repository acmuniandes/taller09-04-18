import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SomeComponent from '@/components/SomeComponent'
import Principal from '@/components/Principal'
import Perfil from '@/components/Perfil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Principal
    },
    {
      path: '/usuarios/:usuario',
      name: 'Perfil',
      component: Perfil
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Unfinished from '../components/unfinished'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: Unfinished
    },
      {
        path:'/unfinished',
        component:Unfinished
      }
    ],
  mode:'history'
})

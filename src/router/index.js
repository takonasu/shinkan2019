import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import gashuku from '@/components/gashuku'
import seigo from '@/components/seigo'
import other from '@/components/other'
import gohan from '@/components/gohan'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/gashuku',
      name: 'gashuku',
      component: gashuku
    },
    {
      path: '/gohan',
      name: 'gohan',
      component: gohan
    },
    {
      path: '/seigo',
      name: 'seigo',
      component: seigo
    },
    {
      path: '/other',
      name: 'other',
      component: other
    }
  ]
})

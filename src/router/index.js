import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import gashuku from '@/components/gashuku'
import other from '@/components/other'
import gohan from '@/components/gohan'
import Eng_test from '@/components/Eng_test'
import enter from '@/components/enter'
import gakugun from '@/components/gakugun'
import gakurui from '@/components/gakurui'
import risyu from '@/components/risyu'
import shukusya from '@/components/shukusya'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/camp',
      name: 'gashuku',
      component: gashuku
    },
    {
      path: '/meal',
      name: 'gohan',
      component: gohan
    },
    {
      path: '/test',
      name: 'Eng_test',
      component: Eng_test
    },
    {
      path: '/entrance',
      name: 'enter',
      component: enter
    },
    {
      path: '/faculty',
      name: 'gakugun',
      component: gakugun
    },
    {
      path: '/lodging',
      name: 'shukusya',
      component: shukusya
    },
    {
      path: '/department',
      name: 'gakurui',
      component: gakurui
    },
    {
      path: '/registration',
      name: 'risyu',
      component: risyu
    },
    {
      path: '/author',
      name: 'other',
      component: other
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

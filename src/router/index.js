import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import gashuku from '@/components/gashuku'
import seigo from '@/components/seigo'
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
      path: '/Eng_test',
      name: 'Eng_test',
      component: Eng_test
    },
    {
      path: '/enter',
      name: 'enter',
      component: enter
    },
    {
      path: '/gakugun',
      name: 'gakugun',
      component: gakugun
    },
    {
      path: '/shukusya',
      name: 'shukusya',
      component: shukusya
    },
    {
      path: '/gakurui',
      name: 'gakurui',
      component: gakurui
    },
    {
      path: '/risyu',
      name: 'risyu',
      component: risyu
    },
    {
      path: '/other',
      name: 'other',
      component: other
    }
  ]
})

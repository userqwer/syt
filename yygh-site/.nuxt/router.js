import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e6d26b9 = () => interopDefault(import('..\\pages\\order\\index.vue' /* webpackChunkName: "pages/order/index" */))
const _52829762 = () => interopDefault(import('..\\pages\\patient\\index.vue' /* webpackChunkName: "pages/patient/index" */))
const _b9616a7c = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _d1ec50e0 = () => interopDefault(import('..\\pages\\hosp\\booking.vue' /* webpackChunkName: "pages/hosp/booking" */))
const _20fc5470 = () => interopDefault(import('..\\pages\\hosp\\schedule.vue' /* webpackChunkName: "pages/hosp/schedule" */))
const _f8190634 = () => interopDefault(import('..\\pages\\order\\show.vue' /* webpackChunkName: "pages/order/show" */))
const _f711749e = () => interopDefault(import('..\\pages\\patient\\add.vue' /* webpackChunkName: "pages/patient/add" */))
const _4288d31d = () => interopDefault(import('..\\pages\\patient\\show.vue' /* webpackChunkName: "pages/patient/show" */))
const _d9b3dfc8 = () => interopDefault(import('..\\pages\\weixin\\callback.vue' /* webpackChunkName: "pages/weixin/callback" */))
const _147a2738 = () => interopDefault(import('..\\pages\\hosp\\detail\\_hoscode.vue' /* webpackChunkName: "pages/hosp/detail/_hoscode" */))
const _5cbe1aaa = () => interopDefault(import('..\\pages\\hosp\\notice\\_hoscode.vue' /* webpackChunkName: "pages/hosp/notice/_hoscode" */))
const _f334895a = () => interopDefault(import('..\\pages\\hosp\\_hoscode.vue' /* webpackChunkName: "pages/hosp/_hoscode" */))
const _44c46d2d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/order",
    component: _3e6d26b9,
    name: "order"
  }, {
    path: "/patient",
    component: _52829762,
    name: "patient"
  }, {
    path: "/user",
    component: _b9616a7c,
    name: "user"
  }, {
    path: "/hosp/booking",
    component: _d1ec50e0,
    name: "hosp-booking"
  }, {
    path: "/hosp/schedule",
    component: _20fc5470,
    name: "hosp-schedule"
  }, {
    path: "/order/show",
    component: _f8190634,
    name: "order-show"
  }, {
    path: "/patient/add",
    component: _f711749e,
    name: "patient-add"
  }, {
    path: "/patient/show",
    component: _4288d31d,
    name: "patient-show"
  }, {
    path: "/weixin/callback",
    component: _d9b3dfc8,
    name: "weixin-callback"
  }, {
    path: "/hosp/detail/:hoscode?",
    component: _147a2738,
    name: "hosp-detail-hoscode"
  }, {
    path: "/hosp/notice/:hoscode?",
    component: _5cbe1aaa,
    name: "hosp-notice-hoscode"
  }, {
    path: "/hosp/:hoscode?",
    component: _f334895a,
    name: "hosp-hoscode"
  }, {
    path: "/",
    component: _44c46d2d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5878edd5 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _a19fe3ac = () => interopDefault(import('../pages/approval-management.vue' /* webpackChunkName: "pages/approval-management" */))
const _b2fd6d78 = () => interopDefault(import('../pages/company-organization-structure-management.vue' /* webpackChunkName: "pages/company-organization-structure-management" */))
const _0dc695d3 = () => interopDefault(import('../pages/news-management-for-hr-software.vue' /* webpackChunkName: "pages/news-management-for-hr-software" */))
const _8cd7c800 = () => interopDefault(import('../pages/promotion.vue' /* webpackChunkName: "pages/promotion" */))
const _7f30b7a4 = () => interopDefault(import('../pages/smart-payroll-salary-slip-management-online.vue' /* webpackChunkName: "pages/smart-payroll-salary-slip-management-online" */))
const _575fae86 = () => interopDefault(import('../pages/time-attendance.vue' /* webpackChunkName: "pages/time-attendance" */))
const _0b8a63e2 = () => interopDefault(import('../pages/toline.vue' /* webpackChunkName: "pages/toline" */))
const _41aa832f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _767462a6 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _ff65fe5a = () => interopDefault(import('../pages/_lang/404.vue' /* webpackChunkName: "pages/_lang/404" */))
const _adab35b0 = () => interopDefault(import('../pages/_lang/approval-management.vue' /* webpackChunkName: "pages/_lang/approval-management" */))
const _60a5a47c = () => interopDefault(import('../pages/_lang/company-organization-structure-management.vue' /* webpackChunkName: "pages/_lang/company-organization-structure-management" */))
const _ea1f405e = () => interopDefault(import('../pages/_lang/news-management-for-hr-software.vue' /* webpackChunkName: "pages/_lang/news-management-for-hr-software" */))
const _5f01787e = () => interopDefault(import('../pages/_lang/promotion.vue' /* webpackChunkName: "pages/_lang/promotion" */))
const _0cf574a2 = () => interopDefault(import('../pages/_lang/smart-payroll-salary-slip-management-online.vue' /* webpackChunkName: "pages/_lang/smart-payroll-salary-slip-management-online" */))
const _3da93484 = () => interopDefault(import('../pages/_lang/time-attendance.vue' /* webpackChunkName: "pages/_lang/time-attendance" */))
const _284eefb8 = () => interopDefault(import('../pages/_lang/toline.vue' /* webpackChunkName: "pages/_lang/toline" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _5878edd5,
    name: "404"
  }, {
    path: "/approval-management",
    component: _a19fe3ac,
    name: "approval-management"
  }, {
    path: "/company-organization-structure-management",
    component: _b2fd6d78,
    name: "company-organization-structure-management"
  }, {
    path: "/news-management-for-hr-software",
    component: _0dc695d3,
    name: "news-management-for-hr-software"
  }, {
    path: "/promotion",
    component: _8cd7c800,
    name: "promotion"
  }, {
    path: "/smart-payroll-salary-slip-management-online",
    component: _7f30b7a4,
    name: "smart-payroll-salary-slip-management-online"
  }, {
    path: "/time-attendance",
    component: _575fae86,
    name: "time-attendance"
  }, {
    path: "/toline",
    component: _0b8a63e2,
    name: "toline"
  }, {
    path: "/",
    component: _41aa832f,
    name: "index"
  }, {
    path: "/:lang",
    component: _767462a6,
    name: "lang"
  }, {
    path: "/:lang/404",
    component: _ff65fe5a,
    name: "lang-404"
  }, {
    path: "/:lang/approval-management",
    component: _adab35b0,
    name: "lang-approval-management"
  }, {
    path: "/:lang/company-organization-structure-management",
    component: _60a5a47c,
    name: "lang-company-organization-structure-management"
  }, {
    path: "/:lang/news-management-for-hr-software",
    component: _ea1f405e,
    name: "lang-news-management-for-hr-software"
  }, {
    path: "/:lang/promotion",
    component: _5f01787e,
    name: "lang-promotion"
  }, {
    path: "/:lang/smart-payroll-salary-slip-management-online",
    component: _0cf574a2,
    name: "lang-smart-payroll-salary-slip-management-online"
  }, {
    path: "/:lang/time-attendance",
    component: _3da93484,
    name: "lang-time-attendance"
  }, {
    path: "/:lang/toline",
    component: _284eefb8,
    name: "lang-toline"
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

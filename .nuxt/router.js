import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a6ccd17 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _54eab7aa = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _94d4a0c4 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _6af3c1aa = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _23cc4af3 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _cdd1f5ee = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _2978fa7a = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _23328308 = () => interopDefault(import('../pages/tech.vue' /* webpackChunkName: "pages/tech" */))
const _31c09a77 = () => interopDefault(import('../pages/todos.vue' /* webpackChunkName: "pages/todos" */))
const _5a24a7dc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3a6ccd17,
    name: "about"
  }, {
    path: "/contact",
    component: _54eab7aa,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _94d4a0c4,
    name: "dashboard"
  }, {
    path: "/form",
    component: _6af3c1aa,
    name: "form"
  }, {
    path: "/login",
    component: _23cc4af3,
    name: "login"
  }, {
    path: "/register",
    component: _cdd1f5ee,
    name: "register"
  }, {
    path: "/team",
    component: _2978fa7a,
    name: "team"
  }, {
    path: "/tech",
    component: _23328308,
    name: "tech"
  }, {
    path: "/todos",
    component: _31c09a77,
    name: "todos"
  }, {
    path: "/",
    component: _5a24a7dc,
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

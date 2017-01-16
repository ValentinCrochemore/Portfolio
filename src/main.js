// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import VueSmoothScroll from 'vue-smoothscroll'
import App from './App'

// Project components
import Index from './components/Index'
import Work from './components/Work'

// Everything that Vue uses
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueLazyload)
Vue.use(VueSmoothScroll)

// Routes definition
const routes = [
  {
    path: '/', component: Index
  },
  {
    path: '/work/:id',
    component: Work,
    name: 'work'
  },
  {
    path: '/work', redirect: '/work/1'
  },
  {
    path: '*', redirect: '/'
  }
]

// The router instance
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

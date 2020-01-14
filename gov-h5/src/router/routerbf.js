import Vue from 'vue'
import VueRouter from 'vue-router'
import PageRouter from './page/'
import ViewsRouter from './views/'
// import AvueRouter from './avue-router'
import Store from '../store/'
Vue.use(VueRouter)
const Router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
  routes: [].concat([])
})
// AvueRouter.install(Router, Store)
console.log(Store + '---')
Router.addRoutes([...PageRouter, ...ViewsRouter])
export default Router

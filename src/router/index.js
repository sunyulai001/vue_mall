import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Category = () => import('@/views/Category')
const Profile = () => import('@/views/Profile')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})
// 解决重复点击跳转报错问题
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.replace
// 修改原型对象中的push方法
VueRouter.prototype.replace = function replace (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router

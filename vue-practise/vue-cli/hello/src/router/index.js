import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../components/User.vue'
import Student from '../components/Student.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
  {
    path: '/student',
    name: 'student',
    component: Student,
  },
]

const router = new VueRouter({
  routes,
})

export default router

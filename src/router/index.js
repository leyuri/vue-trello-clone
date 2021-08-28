import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Board from '../components/Board.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/b/:bid', component: Board },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router
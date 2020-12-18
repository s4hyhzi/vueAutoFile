import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home"
import About from "../pages/About"
import Logout from "../pages/Login/Logout"
import Self from "../pages/Self/Self"
import New from "../pages/New/New"
<<<<<<< HEAD
import New from "../pages/Now/Now"
=======
>>>>>>> 8eb8a2ee18bca8af4959fd2bb00b449f96715e6f
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/self/self',
      name: 'Self',
      component: Self
    },
    {
      path: '/new/new',
      name: 'New',
      component: New
    },
    {
      path: '/now/now',
      name: 'New',
      component: New
    },
  ]
})

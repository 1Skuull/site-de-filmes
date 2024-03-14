import { createRouter, createWebHistory} from "vue-router"
import Profile from "./pages/profile.vue"
import Home from "./pages/home.vue"
import Login from "./pages/login.vue"
import Register from "./pages/register.vue"
import Category from "./pages/categories.vue"


const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
  { path: '/category/:name?', component: Category},
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "link-active",
  strict: true
})

export default router
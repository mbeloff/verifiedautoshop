import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home.vue");
const Success = () => import("../views/Success.vue");
const NotFound = () => import("../views/NotFound.vue");
const Contact = () => import("../views/Contact.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/success",
    name: "Success",
    component: Success
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/404",
    name: "404",
    component: NotFound
  },
  {
    path: "/*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;

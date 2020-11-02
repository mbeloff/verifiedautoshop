import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
const Success = () => import("../views/Success.vue");
const NotFound = () => import("../views/NotFound.vue");
const Contact = () => import("../views/Contact.vue");
const Locations = () => import("../views/Locations.vue");
const Services = () => import("../views/Services.vue");
// const Form = () => import("../components/Form.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/quote",
    name: "Quote",
    component: Home
  },
  {
    path: "/locations",
    name: "Locations",
    component: Locations
  },
  {
    path: "/:type/success",
    name: "Success",
    component: Success,
    props: true
  },
  {
    path: "/:type/thanks",
    name: "Thanks",
    component: Success,
    props: true
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  },
  {
    path: "/services/:service",
    name: "Services",
    component: Services
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
    if (to.hash) {
      return { selector: to.hash };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  }
});

export default router;

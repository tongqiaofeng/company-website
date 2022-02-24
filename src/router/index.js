import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/about";
import Product from "../views/product";
import Technology from "../views/technology";
import Contact from "../views/contact"

Vue.use(VueRouter);

const routes = [
   {
    path: "/",
     name: "About",
     component: About
  },
  {
    path: "/product",
     name: "Product",
     component:Product
  },
  {
    path: "/technology",
     name: "Technology",
     component:Technology
  },
  {
    path: "/contact",
     name: "Contact",
     component:Contact
  },
];

const router = new VueRouter({
  routes
});

export default router;

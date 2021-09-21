import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store"
import { auth } from "./modules/auth"
import { general } from "./modules/gerneral"
import { products } from "./modules/products"
import mainlayout from "../layouts/mainwrapper"
import { Users} from "./modules/users"
import { blogs} from "./modules/blog"
import { seos} from "./modules/seo"
import { Suppliers } from "./modules/customer"
import { guides } from "./modules/guide"
// import AdminGuard from '@/helpers/guard'

Vue.use(VueRouter);

const routes = [
  ...auth,
  {path: "/", component: mainlayout,
  children: [
    ...general,
    ...products,
    ...Users,
    ...blogs,
    ...guides,
    ...seos,
    ...Suppliers
        ]
      },
      {path: "*", redirect: '/dashboard', component: mainlayout}
      // {
      //   path: '*',
      //   component: DefaultLayout,
      //   children: [
      //     {
      //       path: '',
      //       component: NotFound
      //     }
      //   ]
      // }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

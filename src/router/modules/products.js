// import store from '@/store'
import Product from '@/views/admin/Products/index'
// import Category from '@/components/datatables/category'
// import Products from '@/components/datatables/product'
import ProductForm from '@/views/admin/Products/form'
import ProductShow from '@/views/admin/Products/show'
import ProductEdit from '@/views/admin/Products/edit'
import Inventory from '@/views/admin/inventory/index'
import Inventoryform from '@/views/admin/inventory/index'
// import AdminGuard from '@/helpers/guard'

export const products = [
  {path: "/products",component: Product, name: "product", beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },

{path: "/products/create",component: ProductForm, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },

{path: "/products/show/:code",component: ProductShow, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
{path: "/products/:code/edit",component: ProductEdit, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },

{path: "/invetory/update",component: Inventory, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
{path: "/invetory/update/:code",component: Inventoryform, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },

]

// import store from '@/store'
import dashboard from '@/views/admin/general/dashboard'
import orders from '@/views/admin/orders'
import show from '@/views/admin/orders/show'
// import AdminGuard from '@/helpers/guard'


// var token = store.getters.Token
// var isadmin = store.getters.isadmin = true
export const general = [
  {path: "/dashboard", component: dashboard, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
  {path: "/orders", component: orders, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
  {path: "/orders/show/:code", component: show, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
]

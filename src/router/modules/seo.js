// import store from '@/store'
import blog from '@/views/admin/seos/index'
// import Category from '@/components/datatables/category'
// import seoss from '@/components/datatables/seos'
import seosForm from '@/views/admin/seos/form'
import seosShow from '@/views/admin/seos/show'
import seosEdit from '@/views/admin/seos/edit'
// import AdminGuard from '@/helpers/guard'

export const seos = [
  {path: "/seos",component: blog, name: "product", beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },

{path: "/seos/create",component: seosForm, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
{path: "/seos/show/:code",component: seosShow, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
{path: "/seos/:code/edit",component: seosEdit, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
// {path: "/products/update",component: Stock, beforeEnter(to, from, next) {
//   if (token && isadmin){
//     next()
//   }else{
//     next('/')
//   }
// }},

]

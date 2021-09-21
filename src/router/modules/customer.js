// import store from '@/store'
import supplier from '@/views/admin/supplier/index'
// import Category from '@/components/datatables/category'
// import supplierss from '@/components/datatables/suppliers'
import suppliersForm from '@/views/admin/supplier/form'
import suppliersShow from '@/views/admin/supplier/show'
import suppliersEdit from '@/views/admin/supplier/edit'
// import password from '@/views/admin/suppliers/password'
// import AdminGuard from '@/helpers/guard'


export const Suppliers = [
  {path: "/suppliers",component: supplier, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
{path: "/suppliers/create",component: suppliersForm, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
// {path: "/suppliers/password",component: password, beforeEnter (to, from, next) {
//     let token = localStorage.getItem('access_token') || null
//     let admin = localStorage.getItem('admin') || null 
//     console.log("authgaurd", token, admin)
//      if (token === null && admin === null){
//        return next('/login')
//      }
//      return next()
//    } },
{path: "/suppliers/show/:code",component: suppliersShow, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
{path: "/suppliers/:code/edit",component: suppliersEdit, beforeEnter (to, from, next) {
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

// import store from '@/store'
import guide from '@/views/admin/guides/index'
// import Category from '@/components/datatables/category'
// import guidess from '@/components/datatables/guides'
import guidesForm from '@/views/admin/guides/form'
import guidesShow from '@/views/admin/guides/show'
import guidesEdit from '@/views/admin/guides/edit'

export const guides = [
  {path: "/guides",component: guide, name: "product", beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },

{path: "/guides/create",component: guidesForm, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
{path: "/guides/show/:code",component: guidesShow, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
{path: "/guides/:code/edit",component: guidesEdit, beforeEnter (to, from, next) {
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

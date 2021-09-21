// import store from '@/store'
import blog from '@/views/admin/blogs/index'
// import Category from '@/components/datatables/category'
// import blogss from '@/components/datatables/blogs'
import blogsForm from '@/views/admin/blogs/form'
import blogsShow from '@/views/admin/blogs/show'
import blogsEdit from '@/views/admin/blogs/edit'

export const blogs = [
  {path: "/blogs",component: blog, name: "product", beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },

{path: "/blogs/create",component: blogsForm, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
{path: "/blogs/show/:code",component: blogsShow, beforeEnter (to, from, next) {
    let token = localStorage.getItem('access_token') || null
    let admin = localStorage.getItem('admin') || null 
    console.log("authgaurd", token, admin)
     if (token === null && admin === null){
       return next('/login')
     }
     return next()
   } },
{path: "/blogs/:code/edit",component: blogsEdit, beforeEnter (to, from, next) {
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

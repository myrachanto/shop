import axios from 'axios'
// import store from '../store'
 const instance = axios.create({
     baseURL:'https://shop.nillavee.co.ke'
    //  baseURL:'http://localhost:3333'
 })
 var token = localStorage.getItem('access_token')
 instance.defaults.headers.common['Authorization'] = 'Bearer '+ token

 export default instance
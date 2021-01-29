//封装axios
import axios from 'axios'
const http = axios.create({
    //基础路径
    baseURL:'/api',
    //超时时间
    timeout: 10000
})

//响应拦截(对请求结果的统一处理)
http.interceptors.response.use(res =>{
    return res.data
    //对请求结果获得的res将直接成为需求数据res.data里面的数据，在请求时不用再写res.data,直接写res
}, err=>{
    // 统一处理请求的错误
    //相当于if(err.response)成立的话，则let status = err.response.status
    let status = err.response && err.response.status
    
})
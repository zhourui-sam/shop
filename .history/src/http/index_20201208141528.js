//封装axios
import axios from 'axios'
import { Toast } from 'vant'
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
    if (status === 400){
        //参数错误
        Toast.fail('参数错误')
    }
    if (status === 401){
        //没有权限
        Toast.fail('没有权限')
    }
    if (status === 403){
        //登陆过期
        Toast.fail('登陆过期')
    }
    if (status === 404){
        //路径错误
        Toast.fail('路径错误')
    }
    if (status === 500){
        //服务器出错
        Toast.fail('服务器出错')
    }
    if (status === 503){
        //服务器维护
        Toast.fail('服务器维护')
    }
})
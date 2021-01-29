//封装axios
import axios from 'axios'
const http = axios.create({
    //基础路径
    baseURL:'/api',
    //超时时间
    timeout: 10000
})
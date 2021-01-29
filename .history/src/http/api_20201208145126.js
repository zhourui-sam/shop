//统一封装请求
import http from './index'

export default{
    //请求的方法
    HomeData(){
        return http.get('Home')
    }
}
//统一封装请求
import http from './index'

export default{
    //请求的方法
    HomeData(){//首页数据
        return http.get('/recommend')
    },
    SearchData(value){//搜索数据
        return http.get('/search',{
            value
        })
    },
    QueryData(id){//分类查询数据
        return http.get('/classification?mallSubId=${id}',{
            id
        })
    },
    GetCardData(){//获取购物车数据
        return http.get('/getCard')
    },
    EditCardData({count,id,mallPrice}){//购物车加减物品
        return http.post('/editCart',{
            count,
            id,
            mallPrice
        })
    }
    
}
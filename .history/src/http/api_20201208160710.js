//统一封装请求
import http from './index'

export default{
    //请求的方法
    HomeData(){//首页数据1
        return http.get('/recommend')
    },
    SearchData(value){//搜索数据2
        return http.post('/search',{
            value
        })
    },
    QueryData(id){//分类查询数据3
        return http.get('/classification?mallSubId=${id}',{
            id
        })
    },
    GetCard(){//获取购物车数据4
        return http.get('/getCard')
    },
    EditCard({count,id,mallPrice}){//购物车加减物品5
        return http.post('/editCart',{
            count,
            id,
            mallPrice
        })
    },
    DeleteShop(id){//购物车商品删除6
        return http.post('/deleteShop',{
            id
        })
    },
    OrderData({address,tel,orderId,totalPrice,idDirect,count}){//购物车支付页面7
        return http.post('/order',{
            address,
            tel,
            orderId,
            totalPrice,
            idDirect,
            count
        })
    },
    GoodsData(id){//单个商品详情8
        return http.get('/goods/one?id=${id}',{
            id
        })
    },
    Collection(goods){//收藏单个商品9，参数：商品的详情信息
        return http.post('/collection',{
            goods
        })
    },
    CancelCollection(id){//取消收藏10，参数：商品的cid
        return http.post('/cancelCollection',{
            id
        })
    }
    
}
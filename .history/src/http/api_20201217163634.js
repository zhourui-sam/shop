//统一封装请求
import http from './index'

export default {
    //请求的方法
    HomeData() { //首页数据1
        return http.get('/recommend')
    },
    SearchData(value) { //搜索数据2
        return http.post('/search', {
            value //搜索关键词
        })
    },
    QueryData(id) { //分类查询数据3
        return http.get(`/classification?mallSubId=${id}`)
    },

    GetCard() { //获取购物车数据4
        return http.post('/getCard')
    },
    EditCard({ count, id, mallPrice }) { //购物车加减物品5
        return http.post('/editCart', {
            count, //购物车数量
            id, //商品id
            mallPrice //价格
        })
    },
    DeleteShop(id) { //购物车商品删除6
        return http.post('/deleteShop',
            id //商品id(数组)
        )
    },
    OrderData({ address, tel, orderId, totalPrice, idDirect, count }) { //购物车支付页面7
        return http.post('/order', {
            address, //收货地址
            tel, //电话
            orderId, //所有商品的id(数组)
            totalPrice, //总价格
            idDirect, //用来判断是购物车结算还是直接购买(直接购买为true,购物车结算为false)
            count //商品数量
        })
    },
    GoodsData(id) { //单个商品详情8
        return http.get(`/goods/one?id=${id}`)
    },
    Collection(goods) { //收藏单个商品9
        return http.post('/collection', {
            goods //商品的详情信息
        })
    },
    CancelCollection(id) { //取消收藏10
        return http.post('/cancelCollection', {
            id //商品的id
        })
    },
    IsCollection(id) { //查询商品是否已收藏11
        return http.post('/isCollection', {
            id //商品的id
        })
    },
    AddShop(id) { //加入购物车12
        return http.post('/addShop', {
            id //商品的id
        })
    },
    LoginOut() { //退出登录13
        return http.post('/loginOut')
    },
    QueryUser() { //获取用户信息14
        return http.post('/queryUser')
    },
    SaveUser({ gender, year, month, day, id, nickname }) { //修改保存用户信息15
        return http.post('/saveUser', {
            gender, //性别
            year, //年
            month, //月
            day, //日
            id, //用户id
            nickname //昵称
        })
    },
    MyOrder() { //查询用户订单数量16
        return http.get('/myOrder/orderNum')
    },
    GoodsOne({ id, rate, content, anonymous, _id, order_id, image }) { //商品评论17
        return http.post('/goodsOne/comment', {
            id, //商品id
            rate, //分数
            content, //内容
            anonymous, //是否匿名
            _id, //商品的_id
            order_id, //商品的order_id
            image //[]数组
        })
    },
    Verify() { //获取登录注册默认验证码18
        return http.get('/verify')
    },
    GetAddress() { //查询用户收货地址19
        return http.get('/getAddress')
    },
    GetDefaultAddress() { //查询默认收货地址20
        return http.get('/getDefaultAddress')
    },
    SetDefaultAddress(id) { //设置默认收货地址21
        return http.post('/setDefaultAddress', {
            id //地址id
        })
    },
    Address({ name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id }) { //增加收货地址22
        return http.post('/address', {
            name, //用户名
            tel, //电话
            address, //(省+市+区+详情地址)
            isDefault, //是否默认
            province, //省
            city, //市
            county, //区
            addressDetail, //详情地址
            areaCode, //地区代码
            id, //修改地址时候要传id
        })
    },
    DeleteAddress(id) { //删除地址23
        return http.post('/deleteAddress', {
            id //地址_id
        })
    },
    Collection() { //查询我的收藏24
        return http.get('/collection/list')
    },
    Register({ nickname, password, verify }) { //注册25
        return http.post('/register', {
            nickname, //用户名
            password, //密码
            verify //验证码
        })
    },
    Login({ nickname, password, verify }) { //登录26
        return http.post('/login', {
            nickname, //用户名
            password, //密码
            verify //验证码
        })
    },
    GetMyOrder() { //订单查询27
        return http.get('/getMyOrder')
    },
    AlreadyEvaluated() { //查询并评价28
        return http.get('/alreadyEvaluated')
    },
    TobeEvaluated() {
        return http.get('/tobeEvaluated')
    },

}
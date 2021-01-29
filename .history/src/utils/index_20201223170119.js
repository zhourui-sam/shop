import { Dialog } from 'vant'
import router from '../router/index'
//自己定义一个$checkLogin的方法，全局判断客户是否登录
export const checkLogin = (next, item) => {
    let username = JSON.parse(localStorage.getItem('nickname'))
    console.log('checkLogin')
    if (!username) { //
        Dialog.confirm({
            title: '提示',
            message: '您还未登录'
        }).then(() => {
            router.push('/login') //跳路由
        }).catch()
    } else {
        next(item)
    }
}

export const save = (key, item) => {
    //key代表操作， 浏览历史 搜索历史 收藏
    let user = JSON.parse(localStorage.getItem('nickname'))
    if (!user) {
        Dialog.confirm({
            title: '提示',
            message: '您还未登录'
        }).then(() => {
            router.push('/login') //跳路由
        }).catch()
    } else {
        let username = user.nickname
            //存在本地 用户名加上操作名
        let name = username + key
    }
}
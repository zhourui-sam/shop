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

export const save = () => {
    console.log('save')
}
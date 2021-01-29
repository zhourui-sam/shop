import { Dialog } from 'vant'
//自己定义一个$checkLogin的方法，全局判断客户是否登录
export const checkLogin = (next) => {
    let username = JSON.parse(localStorage.getItem('nickname'))
    console.log('checkLogin')
    if (!username) { //
        Dialog.confirm({
            title: '提示',
            message: '您还未登录'
        }).then(() => {
            //跳路由
        }).catch()
    }
}

export const save = () => {
    console.log('save')
}
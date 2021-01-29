import { Dialog } from 'vant'

export const checkLogin = () => {
    let username = JSON.parse(localStorage.getItem('nickname'))
    console.log('checkLogin')
    if (!username) {
        Dialog.alert({
            title: '提示',
            message: '您还未登录'
        })
    }
}

export const save = () => {
    console.log('save')
}
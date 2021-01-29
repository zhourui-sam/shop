<template>
  <div>
    <div class='top'>
        <van-icon name="arrow-left" class='return' @click="Return"/>
        <div class='title'>个人资料</div>
    </div>
    <div class='main'>
      <van-cell-group>
        <van-cell title="头像" is-link center>
          <!-- 使用 title 插槽来自定义内容 -->
          <template #default>
            <van-image
            round
            width="5rem"
            height="5rem"
            src='http://img4.imgtn.bdimg.com/it/u=198369807,133263955&fm=27&gp=0.jpg'/>
          </template>
        </van-cell>
        <van-field label="用户名" v-model="username"/>
        <van-field label="昵称" v-model="nickname"/>
        <van-field label="性别" v-model="gender"/>
        <van-field label="邮箱" v-model="email" placeholder="请输入邮箱"/>
        <van-field label="出生年月日" v-model="birthdate" @click="choice"/>
        <div class='time' >
          <van-datetime-picker
          v-if="this.flag === true"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          @confirm='confirm'
          @cancel='cancel'/>
        </div>
      </van-cell-group>
    </div>
    <div class='bottom'>
      <van-button type="primary" class='btn' @click="Save">保存</van-button>
      <van-button type="default" class='btn' @click="Return">取消</van-button>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { Toast } from 'vant';
import { Field } from 'vant'
dayjs().format();

export default {
  name: '',
  props:{},
  data () {
    return {
      avatar:'',
      nickname:'',
      username:'',
      gender:'',
      year:0,
      month:0,
      day:0,
      _id:'',
      email:'',
      minDate: new Date(1950,1,1),
      birthdate:'',
      flag:false
    }
  },
  components: {},
  methods: {
    confirm(value){
      this.birthdate = dayjs(value).format(`YYYY年MM月DD日`)
      this.flag = !this.flag
    },
    cancel(){
      this.flag = !this.flag
    },
    choice(){
      this.flag = !this.flag
    },
    Return(){
      this.$router.push('/mine')
    },
    Save(){
      this.$api.SaveUser({
        gender:this.gender,
        year:this.year,
        month:this.month,
        day:this.day,
        id:this._id,
        nickname:this.nickname,
        email:this.email
      }).then(res =>{
        if(res.code === 200){
        Toast.success(res.msg)
        console.log(this.username)
        }}).catch(err =>{
        Toast.fail(res.msg)
      })
    }
  },
  mounted() {
      this.$api.QueryUser().then(res =>{//获取后端请求数据
        console.log(res.userInfo)
        this.avatar = res.userInfo.avatar
        this.username = res.userInfo.username
        this.nickname = res.userInfo.nickname
        this.gender = res.userInfo.gender
        this.year = res.userInfo.year
        this.month = res.userInfo.month
        this.day = res.userInfo.day
        this._id = res.userInfo._id
        this.email = res.userInfo.email
        this.birthdate = this.year+'年'+this.month+'月'+this.day+'日'
      }).catch(err =>{
          console.log(err)
      })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .top{
        width:100vw;
        height:50px;
        position: fixed;
        top:0;
        left:0;
        align-items: center;
        display: flex;
        justify-content: center;
        .return{
            font-size: 14px;
            position: absolute;
            left:10px;
            color: rgb(55, 152, 250);
        };
    }
    .main{
      width:100vw;
      margin-top:50px;
    }
    .bottom{
      margin-top: 50px;
      height:120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .btn{
        width:80%;
      }
    }
    
</style>
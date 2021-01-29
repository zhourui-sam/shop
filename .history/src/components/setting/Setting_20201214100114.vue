<template>
  <div>
    <div class='top'>
        <van-icon name="arrow-left" class='return'/>
        <div class='title'>个人资料</div>
    </div>
    <div class='main'>
      <van-cell-group>
        <van-cell title="头像" is-link center>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #default>
            <van-image
            round
            width="5rem"
            height="5rem"
            src='http://img4.imgtn.bdimg.com/it/u=198369807,133263955&fm=27&gp=0.jpg'/>
          </template>
        </van-cell>
        <van-field title="用户名" v-model="this.information.username"/>
        <van-field title="昵称" v-model="this.information.nickname"/>
        <van-field title="性别" v-model="this.information.gender"/>
        <van-field title="邮箱" v-model="this.email" />
        <van-field title="出生年月日" v-model="this.birthdate"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      information:{
        avatar:'',
        nickname:'',
        username:'',
        gender:'',
        year:0,
        month:0,
        day:0,
        _id:'',
      },
      email:'请输入邮箱',
      birthdate:'',
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api.QueryUser().then(res =>{
        console.log(res.userInfo)
        this.information.avatar = res.userInfo.avatar
        this.information.username = res.userInfo.username
        this.information.nickname = res.userInfo.nickname
        this.information.gender = res.userInfo.gender
        this.information.year = res.userInfo.year
        this.information.month = res.userInfo.month
        this.information.day = res.userInfo.day
        this.birthdate = this.information.year+'年'+this.information.month+'月'+this.information.day+'日'
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
</style>
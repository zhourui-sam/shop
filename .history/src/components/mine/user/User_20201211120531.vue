<template>
  <div>
    <div class='user'>
      <div class='setting'>
        <van-icon name="setting" size='20' color='white'/>
      </div>
      <div class='pic'>
        <van-image
        fit="cover"
        round
        width="6rem"
        height="6rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        <div v-if="username" class='message'>
            <div class='name'>欢迎您：{{this.username.nickname}}</div>   
            <div class='logout'>退出登录</div>
        </div>
        <div v-else class='login' @click="login">请登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        username:''
    }
  },
  components: {},
  methods: {
    login(){
        this.$router.push('/login')
    }
  },
  mounted() {
      this.username = JSON.parse(localStorage.getItem('nickname'))
  },
  computed: {
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
    .user{
    width:375px;;
    height:250px;
    background: rgb(227, 12, 123);
    margin-top:50px;
    .setting{
        position: relative;
        top:10px;
        left:370px;
    };
    .pic{
        width:375px;;
        height:200px;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-around;
        color: white;
        .message{
            height:100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            .name{
                font-weight: bold;
                font-size: 20px;
            }
        };
        .login{
            position: relative;
            top:-20px;
        }
    }
  }
</style>
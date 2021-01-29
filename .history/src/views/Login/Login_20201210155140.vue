<template>
  <div class='bg'>
    <div class='contain'>
      <div class='title'>登录/注册</div>
      <div class='box'>
        <van-field v-model="value" placeholder="USERNAME" class='form'/>
      </div>
      <div class='box'>
        <van-field v-model="value" placeholder="PASSWORD" class='form'/>
      </div>
      <div class='box'>
        <van-field v-model="value" label="手机号码" placeholder="仅注册需要" class='form'/>
      </div>
      <div class='box'>
        <van-field v-model="value" label="短信验证码" placeholder="仅注册需要" class='form'/>
        <van-button size="small" type="primary" class='msg'>发送验证码</van-button>
      </div>
      <div class='box'>
        <van-field v-model="model.verify" label="验证码" placeholder="请输入验证码" class='form' />
      </div>
      <div>
        <van-button type="primary" class='btn'>登录</van-button>
        <van-button type="danger" class='btn1' @click="register">注册</van-button>
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
        value:'',
        verify:'',
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api.Verify().then(res =>{
          console.log(res)
      })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .bg{
        width:100vw;
        height:100vh;
        background-image: url(../../assets/login.jpg);
        display: flex;
        justify-content: center;
        .contain{
            background: white;
            position: relative;
            width:95%;
            height:80vh;
            top:100px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .box{
                width:95%;
                height:50px;
                display: flex;
                .form{
                    margin-top:20px;
                };
                .msg{
                    width:100px;
                    position: relative;
                    top:15px;
                };
            } 
            .title{
                font-weight: bold;
                font-size: 24px;
                position: relative;
                top:5px;
                left:5px;
            };
        }
    }
    .btn{
        width:100px;
        position: relative;
        left:20px;
    }
    .btn1{
        width:100px;
        position: relative;
        left:60px;
    }

</style>
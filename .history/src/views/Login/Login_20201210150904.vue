<template>
  <div class='bg'>
    <div class='contain'>
      <div class='title'>登录/注册</div>
      <van-cell-group class='box'>
        <van-field v-model="value" placeholder="USERNAME" class='form'/>
      </van-cell-group>
      <van-cell-group class='box'>
        <van-field v-model="value" placeholder="PASSWORD" class='form'/>
      </van-cell-group>
      <van-cell-group class='box'>
        <van-field v-model="value" label="手机号码" placeholder="仅注册需要" class='form'/>
      </van-cell-group>
      <van-cell-group class='box'>
        <van-field v-model="value" label="短信验证码" placeholder="仅注册需要" class='form'/>
        <van-button size="small" type="primary" class='msg'>发送验证码</van-button>
      </van-cell-group>
      <van-cell-group class='box'>
        <van-field v-model="value" label="验证码" placeholder="请输入验证码" class='form'/>
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
        value:''
    }
  },
  components: {},
  methods: {},
  mounted() {},
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
            height:85vh;
            top:100px;
            .box{
                width:95%;
                height:50px;
                .form{
                    margin-top:20px;
                };
                .msg{
                    width:100px;
                    position: relative;
                    top:15px;
                }
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

</style>
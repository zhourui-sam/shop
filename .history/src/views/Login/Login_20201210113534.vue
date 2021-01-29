<template>
  <div class='bg'>
    <div class='contain'>
      <van-cell-group class='box'>
        <div class='title'>登录/注册</div>
      </van-cell-group>
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
        <van-field v-model="value" label="短信验证码" placeholder="仅注册需要" class='form msg'/>
        <van-button size="small" type="primary">发送验证码</van-button>
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
            position: relative;
            width:95%;
            height:85vh;
            top:100px;
            .box{
                width:100%;
                height:50px;
            
                .title{
                    font-weight: bold;
                    font-size: 24px;
                    position: relative;
                    top:5px;
                    left:5px;
                };
                .form{
                    margin-top:20px;
                }
            }
        }
    }

</style>
<template>
  <div>
    <div class='top'>
        <van-icon name="arrow-left" class='return'/>
        <div class='title'>个人资料</div>
    </div>
    <div class='main'>
      <van-cell-group>
        <van-cell title="头像" is-link size="large"/>
        <van-cell title="头像" is-link size="large">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #value>
            <van-image
            round
            width="10rem"
            height="10rem"
            src="this.information.avatar"/>
          </template>
        </van-cell>
        <van-cell title="用户名" v-model="this.information.username"/>
        <van-cell title="昵称" v-model="this.information.nickname"/>
        <van-cell title="性别" v-model="this.information.gender"/>
        <van-cell title="邮箱" v-model="this.email"/>
        <van-cell title="出生年月日" v-model="this.birthdate"/>
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
      email:'',
      birthdate:'',
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api.QueryUser().then(res =>{
        console.log(res)
          this.information.avatar = res.userInfo.avatar

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
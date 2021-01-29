<template>
  <div>
    <div class='top'>
        <van-icon name="arrow-left" class='return'/>
        <div class='title'>个人资料</div>
    </div>
    <div class='main'>
      <van-cell-group>
        <van-cell title="头像" is-link size="large" v-model="avatar"/>
        <van-cell title="用户名" v-model="username"/>
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
      }
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api.QueryUser().then(res =>{
          console.log(res)
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
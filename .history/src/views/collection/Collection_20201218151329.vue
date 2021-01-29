<template>
  <div>
    <van-nav-bar title="我的收藏" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='container'>
      <div class='main'>
        <div class="none">
          暂无收藏~~~
        </div>
        <van-button type="primary" class='gobuy' @click="gotobuy">去购物~</van-button>
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
    }
  },
  components: {},
  methods: {
    onClickLeft(){
        this.$router.go('-1')
    },
    gotobuy(){
        this.$router.push('/')
    },
    getcollection(){
        this.$api.GetCollection().then(res =>{
            console.log(res)
        }).catch(err =>{
            console.log(err)
        })
    }
  },
  mounted() {
      this.getcollection()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.container{
  width:100vw;
  .main{
    width:100vw;
    height:50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: gray;
  };
  .gobuy{
      position: relative;
      top:50px;
  }
}
</style>
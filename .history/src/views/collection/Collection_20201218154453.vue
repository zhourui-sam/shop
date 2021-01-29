<template>
  <div>
    <van-nav-bar title="我的收藏" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='container'>
      <div class='main' v-if="this.data.list === 0">
        <div class="none">
          暂无收藏~~~
        </div>
        <van-button type="primary" class='gobuy' @click="gotobuy">去购物~</van-button>
      </div>
      <div class='boxer' v-else>
        <div class="box" v-for="(item,index) in this.data" :key="index">
          <div class='pic'>
            <img :src="item.image_path">
          </div>
          <div class='contain'>
            <div class='name'>{{item.name}}</div>
            <div class='price'>{{item.present_price}}</div>
            <div class='cancel'></div>
          </div>
        </div>
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
        data:[],
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
            console.log(res.data.list)
            this.data = res.data.list
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
  .box{
    display: flex;
    height:90px;
    border-bottom: 1px solid gray;
    margin-top:10px;
    .pic{
        width:80px;
        height:80px;
        border: 1px solid gray;
        img{
            width:80px;
            height:80px;
        }
    }
  }
  .gobuy{
      position: relative;
      top:50px;
  }
}
</style>
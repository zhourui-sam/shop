<template>
  <div>
    <div class='top'>购物车</div>
    <div class='account'></div>
    <div class='cars'>
      <div v-for="(item,index) in this.cards" :key="index" class='box'>
        <van-checkbox v-model="item.check" shape="square" checked-color="#ee0a24"></van-checkbox>
        <img :src="item.image_path">
        <div class='variate'>
          <div class='name'>{{item.name}}</div>
          <div class='price'>{{item.present_price}}{{item.count}}</div>
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
      cards:[],
      checked:false,
    }
  },
  components: {},
  methods: {
    
  },
  mounted() {
      this.$api.GetCard().then(res =>{
          console.log(res.shopList)
          this.cards = res.shopList
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
    position: fixed;
    top: 0;
    height:50px;
    background: white;
  display: flex;
    text-align: center;
    line-height: 50px;
};
.account{
  margin-top:50px;
  width:100vw;
  height:100px;
  background: skyblue;
};
.cars{
  top: 10px;
  position: relative;
  .box{
  display: flex;
  justify-content: space-around;
  height:90px;
  border-bottom: 1px solid rgb(238, 238, 238);
  margin-top:10px;
  }
  .inp{
    width:18px;
    height:18px;
  }
  img{
    width:80px;
    height:80px;
    border: 1px solid rgb(238, 238, 238);
    position: relative;
  }
  .variate{
    width:250px;
    height:80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
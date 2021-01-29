<template>
  <div>
    <van-nav-bar title="最近浏览" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class="contain">
      <div class='box' v-for="(item,index) in data" :key="index">
        <div class='pic'>
          <img :src="item.image">
        </div>
        <div class='text'>
          <div class='name'>{{item.goodsName}}</div>
          <div class='price'>
            <div class='mallPrice'>￥{{item.mallPrice}}</div>
            <div class='nowPrice'>{{item.price}}</div>
          </div>
            <div class='cancel'><van-icon name="close" @click="cancel(index)"/></div>
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
        this.$router.push('/mine')
    },
    getdata(){
      this.data = JSON.parse(localStorage.getItem('adminbrowerHistory'))
      console.log(this.data)
    },
    cancel(item){
      localStorage.removeItem
    }
  },
  mounted() {
    this.getdata()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.contain{
  width:100vw;
  .box{
    width:100vw;
    height:120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .pic{
      width:100px;
      height:100px;
      border: 1px solid rgb(238, 238, 238);
      img{
        width:100px;
        height:100px;
      }
    }
    .text{
      width:260px;
      display: flex;
      flex-direction: column;
      .price{
        display: flex;
        align-items: center;
        .mallPrice{
          width:30px;
          height:30px;
          line-height: 30px;
          text-align: center;
          color: red;
        }
        .nowPrice{
          width:30px;
          height:30px;
          line-height: 30px;
          text-align: center;
          text-decoration: line-through;
        }
      }
      .cancel{
        width:260px;
        text-align: end;
      }
    }
  }
}
</style>
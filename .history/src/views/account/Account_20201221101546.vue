<template>
  <div>
    <van-nav-bar title="订单结算" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='address'>
      <div class='address-left'><van-icon name="location-o" size="30px"/></div>
      <div class='address-middle'>
        <div class='detail'>
          <div class='name'>名字:{{defaultadd.name}}</div>
          <div class='tel'>{{defaultadd.tel}}</div>
        </div>
        <div class='default-add'>收货地址:{{defaultadd.address}}</div>
        <div class='msg'>(收货不便时，可选择免费待收货服务)</div>
      </div>
      <div class='address-right'><van-icon name="arrow"  size="30px"/></div>
    </div>
    <div class='pic'>
      <img src="../../assets/caitiao.jpg">
    </div>
    <div class='shopping'>
      <div class='goods' v-for="(item,index) in this.goods" :key="index">
        <img :src="item.image_path">
        <div class='goods-detail'>
          <div class='goods-name'>{{item.name}}</div>
          <div class='goods-price'>￥{{item.present_price}}</div>
        </div>
        <div class='goods-count'>x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactCard } from 'vant'
import { Toast } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
        defaultadd: {},
        goods:[],
    }
  },
  components: {},
  methods: {
      onClickLeft(){
        this.$router.go('-1')
      },
      onEdit() {
        Toast('编辑');
      },
      GetAddress(){
        this.$api.GetDefaultAddress().then(res =>{
          this.defaultadd = res.defaultAdd
        }).catch(err =>{
          console.log(err)
        })
      },
      GetGoods(){
        this.goods = JSON.parse(this.$route.query.goods)
        console.log(this.goods)
      }
  },
  mounted() {
      this.GetAddress()
      this.GetGoods()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .address{
        display: flex;
        width:100vw;
        height:110px;
        align-items: center;
        justify-content: space-around;
        .address-middle{
          width:70vw;
          height:100px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .detail{
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .default-add{
            font-size:13px;
          }
          .msg{
            font-size: 13px;
            color: rgb(249, 204, 157);
          }
        }
    }
    .pic{
      width:100vw;
      height:5px;
      img{
        width:100vw;
        height:5px;      
      }
    }
    .shopping{
      margin-top:20px;
      .goods{
        width:100vw;
        height:100px;
        display: flex;
        img{
          width:100px;
          height:100px;
          border: 1px solid rgb(238, 238, 238);
        }
        .goods-detail{
          width:280px;
          height:70px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 14px;
          color: red;
        }
      }
    }
</style>
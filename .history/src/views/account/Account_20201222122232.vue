<template>
  <div>
    <van-nav-bar title="订单结算" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='address'>
      <div class='address-left' @click="GoAddress"><van-icon name="location-o" size="30px"/></div>
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
    <!--<div v-if="flag === 1">
      <div class='goods'>
        <img src="comebuy.image_path">
        <div class='goods-detail'>
          <div class='goods-name'>{{goods.name}}</div>
          <div class='goods-price'>￥{{goods.present_price}}</div>
        </div>
        <div class='goods-count'>x{{goods.count}}</div>
      </div>
      <div style="height:50px"></div>
      <van-submit-bar :price="total*100" button-text="提交订单" @submit="onSubmit" />
    </div>-->
    <div class='shopping'>
      <div class='goods' v-for="(item,index) in this.goods" :key="index">
        <img :src="item.image_path">
        <div class='goods-detail'>
          <div class='goods-name'>{{item.name}}</div>
          <div class='goods-price'>￥{{item.present_price}}</div>
        </div>
        <div class='goods-count'>x{{item.count}}</div>
      </div>
      <div style="height:50px"></div>
      <div v-if="this.flag==1">
        <van-submit-bar :price="total*100" button-text="买买买" @submit="onSubmit1" />
      </div>
      <div v-else>
        <van-submit-bar :price="total*100" button-text="提交订单" @submit="onSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import { SubmitBar } from 'vant'
import { ContactCard } from 'vant'
import { Toast } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
        defaultadd: {},
        goods:[],
        total:0,
        GoodsId:[],
        count:0,
        comebuy:{},
        flag:-1,
        GoodsId1:[],
        count1:0,
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
        this.flag = this.$route.query.flag
        console.log(this.goods)
        this.goods.map(item =>{
          this.total += item.present_price*item.count,
          this.count += item.count
          this.GoodsId.push(item.cid)
          })
      },
      onSubmit(){
        this.$api.OrderData({
          address : this.defaultadd.address,
          tel : this.defaultadd.tel,
          orderId : this.GoodsId,
          totalPrice : this.total,
          idDirect : false,
          count : this.count
        }).then(res=>{
          console.log(res)
          Toast.success(res.msg)
          this.$router.push('/cards')
        })
      },
      onSubmit1(){
        this.$api.OrderData({
          address : this.defaultadd.address,
          tel : this.defaultadd.tel,
          orderId : this.GoodsId1,
          totalPrice : this.total,
          idDirect : flase,
          count : this.count1
        }).then(res=>{
          console.log(res)
          Toast.success(res.msg)
          this.$router.push('/cards')
        })
      },
      getId(){
        this.GoodsId1.push(this.goods[0].id)
        this.count1= this.goods[0].count
      },
      GoAddress(){
        
      }
  },
  mounted() {
      this.getId()
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
        height:120px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgb(238, 238, 238);
        img{
          width:100px;
          height:100px;
          border: 1px solid rgb(238, 238, 238);
        }
        .goods-detail{
          width:260px;
          height:80px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 10px;
          font-size: 14px;
          color: red;
        }
      }
    }
</style>
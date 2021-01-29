<template>
  <div>
    <van-nav-bar title="我的订单" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='classify'>
        <van-tabs v-model="active">
            <van-tab title="全部">
                <div class='contain'>
                    <div class='box' v-for="(item,index) in detail" :key="index">
                        <div class='top'>
                            <div class='top-left'>订单编号:{{item.order_id}}</div>
                            <div class='top-right'>交易完成</div>
                        </div>
                        <div class='middle'>
                            <div class='goods' v-for="(item1,index1) in item.order_list" :key="index1">
                                <div class='img'><img :src="item1.image_path"></div>
                                <div class='name'>{{item1.name}}</div>
                                <div class='num'>
                                    <div class='price'>￥{{item1.mallPrice}}</div>
                                    <div class='count'>x{{item1.count}}</div>
                                </div>
                            </div>
                        </div>
                        <div class='bottom'>
                            <div class='time'>创建时间:{{item.add_time}}</div>
                            <div class='address'>收货地址:{{item.address}}</div>
                            <div class='total'>共{{item.order_list.length}}件商品，合计：{{item.mallPrice.toFixed(2)}}</div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="待支付">内容 2</van-tab>
            <van-tab title="待发货">内容 3</van-tab>
            <van-tab title="待收货">内容 4</van-tab>
            <van-tab title="已完成">内容 4</van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
  name: '',
  props:{},
  data () {
    return {
        active:0,
        detail:[],
        mallPrice:0,
    }
  },
  components: {},
  methods: {
    onClickLeft(){
        this.$router.go('-1')
    },
    getorder(){
        this.$api.GetMyOrder().then(res =>{
            this.detail = res.list
            this.mallPrice = res.mallPrice
            console.log(this.detail)
        })
    },
  },
  mounted() {
      this.getorder()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .contain{
        width:100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        .box{
            width:95vw;
            .top{
                width:95vw;
                height:50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgb(238, 238, 238);
                .top-right{
                    color: rgb(210, 89, 27);
                }
            }
            .middle{
                width:95vw;
                margin-top:10px;
                border-bottom: 1px solid rgb(238, 238, 238);
                .goods{
                    width:95vw;
                    height:120px;
                    display: flex;
                    justify-content: space-around;
                    .img{
                        width:100px;
                        height:100px;
                        border: 1px solid rgb(238, 238, 238);
                        img{
                            width:100px;
                            height:100px;
                        }
                    }
                    .name{
                        width:260px;
                        height:100px;
                        margin-left:5px;
                    }
                    .num{
                        width:48px;
                        // text-align: end;
                        .count{
                            color: gray;
                            margin-top: 10px;
                        }
                    }
                }
            }
            .bottom{
                width: 95vw;
                height:80px;
                margin-top: 10px;
                border-bottom: 1px solid rgb(238, 238, 238);
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-end;
            }
        }
    }
</style>
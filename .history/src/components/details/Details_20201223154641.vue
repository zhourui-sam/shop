<template>
  <div class='bg'>
    <div class='goods'>
    <!--父组件给子组件传数据，需要用v-if判断，才不会刷新页面数据获取不到，数据类型为对象形式时需要用Objext.keys(数据)的形式判断对象的长度是否大于0-->
      <depicture :goods='goods' v-if="Object.keys(goods).length>0"></depicture>
      <maintext :goods='goods' v-if="Object.keys(goods).length>0"></maintext>
      <mainpicture :goods='goods' v-if="Object.keys(goods).length>0"></mainpicture>
    </div>
    <div class='bottom'>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button type="warning" text="加入购物车" @click="clickItem"/>
        <van-goods-action-button type="danger" text="立即购买" @click="buydetail"/>
        <van-popup v-model="show" closeable close-icon="close" position="bottom" :style="{ height: '40%'}" class='gobuy'>
          <div class='buy-detail'>
            <div class='buy-pic'>
              <img :src="this.goods.image_path">
            </div>
            <div class='buy-detail-right'>
              <div class='buy-detail-name'>
                {{this.goods.name}}
              </div>
              <div class='buy-detail-price'>
                ￥{{this.goods.present_price}}
              </div>
            </div>
          </div>
          <div class='buy-count'>
            <div class='buy-count-text'>
              <div>购买数量:</div>
              <div class='buy-count-text-number'>
                <div style="color:gray">剩余:{{this.goods.amount}}</div>
                <div style="color:red">每人限购50件</div>
              </div>
            </div>
            <div class='buy-count-number'>
              <van-stepper v-model="value" min="1" max="50" />
            </div>
          </div>
          <div class='gobuy'>
            <van-button type="danger" size="large" @click="gobuy(goods)">立即购买</van-button>
          </div>
        </van-popup>
      </van-goods-action>
    </div>
    <div class='backto'>
      <van-icon name="arrow-left" size="20px" @click="backto"/>
    </div>
  </div>
</template>

<script>
import { Popup } from 'vant'
import { Toast } from 'vant'
import depicture from './picture/Picture'
import maintext from './maintext/MainText'
import mainpicture from './mainpicture/MainPicture'
export default {
  name: '', 
  props:{},
  data () {
    return {
      goods:{},
      id:'',
      show: false,
      value: 1,
      flag:1
    }
  },
  components: {depicture,maintext,mainpicture},
  methods: {
    backto(){
      this.$router.go(-1)
    },
    AddCards(){
      this.id = this.$route.query.id
      this.$api.AddShop(this.id).then(res =>{
        Toast.success(res.msg)
      })
    },
    clickItem(){
      this.$checkLogin(this.AddCards)
    },
    buydetail(){
      this.show = true;
    },
    gobuy(goods){
      this.$set(this.goods,'count',this.value)
      let detail = []
      detail.push(this.goods)
      this.$router.push({
        path:'/account',
        query:{
          goods : JSON.stringify(detail),
          flag : this.flag
        }
      })
    }
  },
  mounted() {
    this.id = this.$route.query.id//获取全局数据id
    this.$api.GoodsData(this.id).then(res =>{
      this.goods = res.goods.goodsOne
      console.log(this.goods)
    }).catch(err =>{
      console.log(err)
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.bg{
  width:100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .goods{
    width:90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  };
  .bottom{
    display: flex;
    width:100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    .goto{
      width:60px;
      text-align: center;
      color: rgb(102, 102, 102)
    };
    .btn{
      width:150px;
      height:55px;
      font-size: 18px;
    };
    .gobuy{
      .buy-detail{
        width:100vw;
        height:120px;
        border-bottom: 1px solid rgb(238, 238, 238);
        display: flex;
        align-items: center;
        .buy-pic{
          width:100px;
          height:100px;
          border: 1px solid rgb(238, 238, 238);
          img{
            width:100px;
            height:100px;
          }
        }
        .buy-detail-right{
          margin-left:20px;
          height:60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .buy-detail-price{
            color: red;
          }
        }
      }
      .buy-count{
          width:100vw;
          height:100px;
          border-bottom: 1px solid rgb(238, 238, 238);
          display: flex;
          align-items: center;
          justify-content: space-around;
          .buy-count-text{
            width:40vw;
            height:50px;
            font-size: 13px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .buy-count-text-number{
              display: flex;
              width:40vw;
              justify-content: space-between;
            }
          }
        }
    }
  };
  .backto{
    width:30px;
    height:30px;
    background: rgba(128,128,128,0.5);
    border-radius: 100%;
    position: fixed;
    left:30px;
    top:30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
<template>
  <div class='bg'>
    <div class='goods'>
      <depicture :goods='goods' v-if="goods"></depicture>
      <maintext :goods='goods' v-if="goods"></maintext>
      <mainpicture :goods='goods' v-if="goods"></mainpicture>
    </div>
    <div class='bottom'>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button type="warning" text="加入购物车" @click="AddCards"/>
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
    <div class='backto'>
      <van-icon name="arrow-left" size="20px" @click="backto"/>
    </div>
  </div>
</template>

<script>
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
      isisCollection:{},
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
     getCollection(){
    //       IsCollection(id) { //查询商品是否已收藏11
    //     return http.post('/isCollection', {
    //         id //商品的id
    //     })
    // },
          this.$api.IsCollection().then(res =>{
              this.isCollection = res
               console.log(this.isCollection)
          }).catch(err =>{
              console.log(err)
          })
    },
  },
  mounted() {
    this.getCollection()
    this.id = this.$route.query.id//获取全局数据id
    this.$api.GoodsData(this.id).then(res =>{
      this.goods = res.goods.goodsOne
      console.log(res.goods.goodsOne)
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
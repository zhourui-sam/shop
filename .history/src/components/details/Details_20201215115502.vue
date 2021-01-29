<template>
  <div class='bg'>
    <div class='goods'>
      <depicture :details='details' v-if="details"></depicture>
      <maintext :details='details' v-if="details"></maintext>
      <mainpicture :details='details' v-if="details"></mainpicture>
    </div>
    <div class='bottom'>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
    <div class='backto'>
      <van-icon name="arrow-left" />
    </div>
  </div>
</template>

<script>
import depicture from './picture/Picture'
import maintext from './maintext/MainText'
import mainpicture from './mainpicture/MainPicture'
export default {
  name: '', 
  props:{},
  data () {
    return {
      details:{},
      id:'',
    }
  },
  components: {depicture,maintext,mainpicture},
  methods: {},
  mounted() {
    this.id = this.$route.query.id//获取全局数据id
    this.$api.GoodsData(this.id).then(res =>{
      this.details = res.goods.goodsOne
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
    width:80px;
    height:80px;
    background: gray;
    border-radius: 100%;
    position: fixed;
    left:30px;
    top:30px;
  }
}
</style>
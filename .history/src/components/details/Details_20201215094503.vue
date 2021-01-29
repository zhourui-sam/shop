<template>
  <div class='bg'>
    <div class='goods'>
      <depicture :details='details' v-if="details"></depicture>
      <maintext :details='details' v-if="details"></maintext>
      <mainpicture :details='details' v-if="details"></mainpicture>
    </div>
    <div class='bottom'>
      <div class='goto'>
        <van-icon name="chat-o" size="30px"/>
        <div>客服</div>
      </div>
      <div class='goto'>
        <van-icon name="shopping-cart-o" size="30px"/>
        <div>购物车</div>
      </div>
      <div><van-button type="warning" class='btn'>加入购物车</van-button></div>
      <div><van-button type="danger" class='btn'>立即购买</van-button></div>
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
  }
}
</style>
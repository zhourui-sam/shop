<template>
  <div>
    <div class='top'>购物车</div>
    <div class='account'>
      <div class="checkall">
        <van-checkbox v-model="checked" shape="square" checked-color="#ee0a24" class='allcheck' @click="changeAll">
          <div v-if="checked === false">全选</div>
          <div v-else>取消全选</div>
        </van-checkbox>
        <div class='total'>
          合计:<div class='money'>
          ￥{{cards.mallPrice*cards.count}}
          </div>
          请确认订单
        </div>
      </div>
      <van-button color="#7232dd" class='btn' @click="del">删除</van-button>
      <van-button color="#7232dd" class='btn tobuy'>去结算</van-button>
    </div>  
    <div class='cars'>
      <div v-for="(item,index) in this.cards" :key="index" class='box'>
        <van-checkbox v-model="item.check" shape="square" checked-color="#ee0a24" @click="changeItem"></van-checkbox>
        <img :src="item.image_path">
        <div class='variate'>
          <div class='name'>{{item.name}}</div>
          <div class='price'>
            <div>￥{{item.mallPrice}}</div>
            <div><van-stepper v-model="item.count" theme="round" button-size="20"/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
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
    changeAll(){
      this.cards.map(count =>{
        count.check = this.checked
      })
    },
    changeItem(){
      this.checked = this.cards.every(item =>{
        return item.check === true
      })
    },
    del(){
      Dialog.confirm({
        title: '提示',
        message: '请确认是否要删除当前选中内容',
      }).then(() => {
          let remove = []
          this.cards.map(count =>{
            if(count.check === true){
              remove.push(count.cid)
            }
          })
          console.log(remove)
          this.$api.DeleteShop(remove).then(res =>{
            console.log(res)
          }).catch(err =>{
            console.log(err)
          })
        })
        .catch(() => {});
    },
    getData(){
      this.$api.GetCard().then(res =>{
          console.log(res.shopList)
          this.cards = res.shopList
      }).catch(err =>{
          console.log(err)
      })
    }
  },
  mounted() {
      
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
    text-align: center;
    line-height: 50px;
};
.account{
  margin-top:50px;
  width:100vw;
  height:150px;
  .checkall{
    height:90px;
    border-top: 1px solid rgb(238, 238, 238);
    border-bottom: 1px solid rgb(238, 238, 238);
    display: flex;
    align-items: center;
    .allcheck{
      width:100px;
      position: relative;
      left:20px;
    };
    .total{
      position: relative;
      left:200px;
      .money{
        color:red;
      }
    }
  };
  .btn{
    width:80px;
    position: relative;
    top:10px;
    left:200px;
  };
  .tobuy{
    left:220px;
  }
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
    color: red;
    .price{
      width:240px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
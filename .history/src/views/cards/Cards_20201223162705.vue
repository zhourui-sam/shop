<template>
  <div>
    <van-nav-bar title="购物车" :fixed="true"/>
    <div v-if="this.username">
      <div v-if="this.cards.length>0">
        <div class='account'>
          <div class="checkall">
            <van-checkbox v-model="checked" shape="square" checked-color="#ee0a24" class='allcheck' @click="changeAll">
              <div v-if="checked === false">全选</div>
              <div v-else>取消全选</div>
            </van-checkbox>
            <div class='total'>
              合计:<div class='money'>
              ￥{{total}}
              </div>
              请确认订单
            </div>
          </div>
          <van-button color="#7232dd" class='btn' @click="del">删除</van-button>
          <van-button color="#7232dd" class='btn tobuy' @click="account">去结算</van-button>
        </div>  
        <div class='cars'>
          <div v-for="(item,index) in this.cards" :key="index" class='box'>
            <van-checkbox v-model="item.check" shape="square" checked-color="#ee0a24" @click="changeItem"></van-checkbox>
            <img :src="item.image_path">
            <div class='variate'>
              <div class='name'>{{item.name}}</div>
              <div class='price'>
                <div>￥{{item.mallPrice}}</div>
                <div><van-stepper v-model="item.count" theme="round" button-size="20" @change="editCard(item)"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class='empty'>
        <img src="../../assets/empty.jpg" class='carsempty'>
        <div>购物车为空</div>
        <van-button type="primary" class='gobuy' @click="gotobuy">去购物~</van-button>
      </div>
    </div>
    <div v-else>
      <div class='pic'>
        <img src="../../assets/order.gif">
      </div>
      <div>
        <van-button type="primary" size="large" @click="Login">去登陆</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
      cards:[],
      checked:false,
      good:[],
      username:'',
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
            Toast.success(res.msg)
            this.getData()
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
    },
    editCard(item){
      this.$api.EditCard({
        count : item.count,
        id : item.cid,
        mallPrice : item.mallPrice
      }).then(res =>{
      }).catch(err =>{
        console.log(err)
      })
    },
    gotobuy(){
      this.$router.push('/')
    },
    account(){
      let flag = 0
      // let good = []
      let goods = []
      this.cards.map(item =>{
        if(item.check === true){
          this.good.push(item)
        }
      })
      if(this.good.length > 0){
      this.$router.push({
        path:'/account',
        query:{
           goods:JSON.stringify(this.good),
           flag:flag
        }
      })
      }else{
        Toast.fail('未勾选中商品')
      }
    }
  },
  mounted() {
      this.getData()
      this.username = JSON.parse(localStorage.getItem('nickname'))
  },
  computed: {
    total(){
      let total = 0
      this.cards.map(item =>{
        if  (item.check){
          total += item.mallPrice*item.count
        }
      })
      return total.toFixed(2)
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
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
.empty{
  width:100vw;
  height:50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top:160px;
  .carsempty{
    width:200px;
    height:200px;
  };
  .gobuy{
    width:200px;
  }
}
</style>
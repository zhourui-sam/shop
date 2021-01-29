<template>
  <div>
    <van-nav-bar title="地址列表" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='container'>
      <div class='main' v-if="addressList.length === 0">
        <div class="none">
          暂无收货地址~~~
        </div>
      </div>
      <div v-else class='contain'>
        <div class='detail' v-for="(item,index) in addressList" :key="index">
            <van-radio checked-color="#ee0a24" name="index" v-model="radio"></van-radio>
            <div class='name'>{{item.name}},{{item.tel}}</div>
            <div class='address'>{{item.addressDetail}}</div>
        </div>
      </div>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      default-tag-text="默认"
      @add="onAdd"
    />
  </div>
</template>

<script>
import { AddressList } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
      addressList:[],
      chosenAddressId:'1',
      radio:false,
    }
  },
  components: {},
  methods: {
    onClickLeft(){
      this.$router.go('-1')
    },
    getAddress(){
      this.$api.GetAddress().then(res =>{
        this.addressList = res.address
        console.log(this.addressList)
      }).catch(err =>{
        console.log(err)
      })
    },
    onAdd(){
      this.$router.push('/editaddress')
    },
  },
  mounted() {
    this.getAddress()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.container{
  width:100vw;
  .main{
    width:100vw;
    height:50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
  }
  .contain{
  }
}
</style>
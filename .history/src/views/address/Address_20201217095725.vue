<template>
  <div>
    <van-nav-bar title="地址列表" :fixed="true" left-arrow @click-left="onClickLeft"/>
    <div class='container'>
      <div class='main' v-if="addressList.length === 0">
        <div class="none">
          暂无收货地址~~~
        </div>
      </div>
      <div></div>
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
      chosenAddressId:'1'
    }
  },
  components: {},
  methods: {
    onClickLeft(){
      this.$router.go('-1')
    },
    getAddress(){
      this.$api.GetAddress().then(res =>{
        console.log(res)
        this.addressList = res.address
      }).catch(err =>{
        console.log(err)
      })
    },
    onAdd(){
      this.$router.push('/editaddress')
    }
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
  margin-top:50px;
  width:100vw;
  .main{
    width:100vw;
    height:50vh;
    display: flex;
    justify-content: center;
  }
}
</style>
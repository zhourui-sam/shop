<template>
  <div>
    <van-nav-bar title="地址列表" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='container'>
      <div class='main' v-if="addressList.length === 0">
        <div class="none">
          暂无收货地址~~~
        </div>
        <van-address-list
        @add="onAdd"/>
      </div>
      <div v-else class='contain'>
        <!--<div class='detail' v-for="(item,index) in addressList" :key="index">
            <van-radio checked-color="#ee0a24" v-model="item.isDefault"></van-radio>
            <div class='name'>{{`${item.name},${item.tel}`}}
              <div class='address'>{{item.addressDetail}}</div>
            </div>
            <div class='edit'><van-icon name="edit" size="20px" @click="edition(item)"/></div>
        </div> -->
        <van-address-list
        v-model="chosenAddressId"
        :list="addressList"
        default-tag-text="默认"
        @add="onAdd"
        @edit="edition"/>
      </div>
    </div>
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
      chosenAddressId:1,
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
        this.addressList.map((item,index) =>{
          this.$set(item,'id',index+1)
        })//通过给数组里面的每个对象添加一个新的id属性来控制前面的打钩
        //map遍历addressList数组的每一项，给每一项的对象用$set自定义添加一个名字为id的属性，属性值为index+1
        //$set里面传入三个参数(对应数组或者对象的名字，新添加属性的名字'id'(数组为key，对象为value)，添加每一项的对应属性的值'index+1'(数组为value，对象为key))
        console.log(this.addressList)
      }).catch(err =>{
        console.log(err)
      })
    },
    onAdd(){
      this.$router.push('/newaddress')
    },
    edition(item){
      this.$router.push({
        path:'/editaddress',
        query: item
      })
    }
  },
  mounted() {
    this.getAddress()
    this.$api.GetDefaultAddress().then(res=>{
      console.log(res)
    })
    this.$api.GetMyOrder().then(res=>{
      console.log(11111111111);
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
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
}
</style>
<template>
  <div>
    <van-nav-bar title="订单结算" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='address'>
       <div class='address-left'><van-icon name="location-o" size="32px"/></div>
       <div class='address-middle'>
          <div class='text'>
            <div class='name'>名字:{{defaultadd.name}}</div>
            <div class='tel'>{{defaultadd.tel}}</div>
          </div>
          <div class='default-add'>收货地址:{{defaultadd.address}}</div>
          <div class='msg'>(收货不便时，可选择免费待收货服务)</div>
       </div>
       <div class='address-right'><van-icon name="arrow"  size="32px"/></div>
    </div>
  </div>
</template>

<script>
import { ContactCard } from 'vant'
import { Toast } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
        defaultadd: {},
    }
  },
  components: {},
  methods: {
      onClickLeft(){
        this.$router.go('-1')
      },
      onEdit() {
        Toast('编辑');
      },
      GetAddress(){
          this.$api.GetDefaultAddress().then(res =>{
              console.log(res)
              this.defaultadd = res.defaultAdd
          }).catch(err =>{
              console.log(err)
          })
      }
  },
  mounted() {
      this.GetAddress()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .address{
        display: flex;
        width:100vw;
        height:100px;
        align-items: center;
        justify-content: space-around;
        .address-middle{
          height:100px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
            .detail{
              display: flex;
                height:80px;
                align-items: center;
                .text{
                  height: 80px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                }
                .default-add{
                  font-size:13px;
                }
            }
            .msg{
              font-size: 13px;
              color: rgb(249, 204, 157);
            }
        }
    }
</style>
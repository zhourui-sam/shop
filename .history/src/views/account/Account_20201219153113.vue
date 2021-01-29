<template>
  <div>
    <van-nav-bar title="订单结算" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='address'>
       <div class='address-left'><van-icon name="location-o" size="32px"/></div>
       <div class='address-middle'>
         <div class='detail'>
            <div class='text'>
              <div class='name'></div>
              <div class='default-add'></div>
            </div>
            <div class='tel'></div>
         </div>
         <div class='msg'></div>
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

</style>
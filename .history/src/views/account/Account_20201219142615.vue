<template>
  <div>
    <van-nav-bar title="订单结算" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='address'>
        <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="onEdit"
        />
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
        currentContact: {
        name: '张三',
        tel: '13000000000',
      },
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
          }).catch(err =>{
              console.log(err)
          })
      }
  },
  mounted() {
      this.GetAddress
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
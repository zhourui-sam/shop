<template>
  <div>
    <van-nav-bar title="新增地址" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true' />
    <div class='main'>
        <van-address-edit
            :area-list="area"
            show-delete
            show-set-default
            show-search-result
            @save="onSave"
            @delete="onDelete"
            delete-button-text='返回'/>
    </div>
  </div>
</template>

<script>
import { AddressEdit } from 'vant'
import area from '../../../../js/area'
import { Toast } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
        area,
    }
  },
  components: {},
  methods: {
    onClickLeft(){
      this.$router.go('-1')
    },
    
    onSave(content) {
      this.$api.Address({
        name : content.name,
        tel : content.tel,
        address : content.province+content.city+content.county+content.addressDetail,
        isDefault : content.isDefault,
        province : content.province,
        city : content.city,
        county :content.county,
        addressDetail : content.addressDetail,
        areaCode : content.areaCode,
        id : content.id
      }).then(res =>{
          Toast.success(res.msg)
          this.$router.go('-1')
      }).catch(err =>{
          Toast.fail(res.msg)
      })
    },
    onDelete() {
      this.$router.go('-1');
    },
    
  },
  mounted() {
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
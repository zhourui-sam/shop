<template>
  <div>
    <van-nav-bar title="编辑地址" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true' />
    <div class='main'>
        <van-address-edit
            :area-list="area"
            show-delete
            show-set-default
            show-search-result
            @save="onSave"
            @delete="onDelete"/>
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
        // id:'',
        // name:'',
        // tel:'',
        // province:'',
        // city:'',
        // county:'',
        // addressDetail:'',
        // areaCode:'',
        // postalCode:'',
        // isDefault:false,
        // address:'',
    }
  },
  components: {},
  methods: {
    onClickLeft(){
      this.$router.go('-1')
    },
    
    onSave() {
      this.$api.Address({
        name : key.name,
        tel : key.tel,
        address : key.address,
        isDefault : key.isDefault,
        province : key.province,
        city : key.city,
        county :　key.county,
        addressDetail : key.addressDetail,
        areaCode : key.areaCode,
        id : id
      }).then(res =>{
          Toast.success(res.msg)
          this.$router.go('-1')
      }).catch(err =>{
          Toast.fail(res.msg)
      })
    },
    onDelete() {
      Toast('delete');
    },
  },
  mounted() {
      console.log(this.searchResult)
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <van-nav-bar title="编辑地址" :fixed="true" left-arrow @click-left="onClickLeft"/>
    <div class='main'>
        <van-address-edit
            :area-list="area"
            show-postal
            show-delete
            show-set-default
            show-search-result
            @save="onSave"
            @delete="onDelete">
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
        searchResult: [],
    }
  },
  components: {},
  methods: {
    onClickLeft(){
      this.$router.go('-1')
    },
    onSave() {
      Toast('save');
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
    .main{
        margin-top:46px;
    }
</style>
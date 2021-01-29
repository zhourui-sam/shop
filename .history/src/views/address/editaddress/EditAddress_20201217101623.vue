<template>
  <div>
    <van-nav-bar title="编辑地址" :fixed="true" left-arrow @click-left="onClickLeft"/>
    <div>
        <van-address-edit
            :area-list="area"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"/>
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
      onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
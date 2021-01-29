<template>
  <div>
    <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { AddressEdit } from 'vant'
import area from '../../../../js/area'
export default {
  name: '',
  props:{},
  data () {
    return {
        areaList,
        searchResult: [],
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
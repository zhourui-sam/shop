<template>
  <div>
    <!--<van-area title="地址" :area-list="areaList" value="101100" v-if="flag" @confirm='confirm' @cancel='cancel'/>-->
    <van-index-bar @confirm='confirm' @cancel='cancel'>
        <div v-for="(value,key) in city" :key="key">
        <van-index-anchor :index="key" />
        <van-cell :key="item.id" :title="item.name" v-for="item in value" />
        </div>
    </van-index-bar>
  </div>
</template>

<script>
import city from '../../../../js/city'//导入城市js文件信息
import area from '../../../../js/area'

export default {
  name: '',
  props:{},
  data () {
    return {
        city : city.data.cities,
        areaList : area,
    }
  },
  components: {},
  methods: {
    
    confirm(value){
        this.address = value[1].name
    },
    cancel(){
        this.flag = !this.flag
    }
  },
  mounted() {
    console.log(this.city)
    },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
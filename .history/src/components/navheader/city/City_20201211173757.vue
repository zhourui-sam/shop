<template>
  <div>
    <!--<van-area title="地址" :area-list="areaList" value="101100" v-if="flag" @confirm='confirm' @cancel='cancel'/>-->
    <van-index-bar  v-if="flag" @confirm='confirm' @cancel='cancel'>
        <div v-for="(value,key) in city" :key="key">
        <van-index-anchor :index="key" />
        <van-cell :key="item.id" :title="item.name" v-for="item in value" />
        </div>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        city : city.data.cities,
    }
  },
  components: {},
  methods: {
    AddPosition(){
        this.flag = !this.flag
    },
    confirm(value){
        this.address = value[1].name
        this.flag = !this.flag
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
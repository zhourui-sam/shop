<template>
  <div>
    <div class='top'>
    <div class='position' @click="AddPosition">{{address}}</div>
      <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      class='input'>
        <template #action>
          <div >搜索</div>
        </template>
      </van-search>
      </div>
    <van-area title="地址" :area-list="areaList" value="110101" v-if="flag"/>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: '',
  props:{},
  data () {
    return {
      value:'',
      address:'加载中...',
      flag:false
    }
  },
  components: {},
  methods: {
      AddPosition(){
          this.flag = !this.flag
      }
  },
  mounted() {
    let _this = this
    this.$api.HomeData().then(res =>{
      console.log(res)
      }).catch(err =>{
        console.log(err)
      }),
    AMap.plugin('AMap.Geolocation', function() {
      let geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,     
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: 'RB'
      })

      geolocation.getCurrentPosition()
      AMap.event.addListener(geolocation, 'complete', onComplete)
      AMap.event.addListener(geolocation, 'error', onError)

      function onComplete (data) {
        // data是具体的定位信息
        _this.address = data.addressComponent.city
      }

      function onError (data) {
        // 定位出错
      }
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .position{
            width:80px;
            text-align: right;
        };
        .input{
            width:350px;
        }
    }
</style>
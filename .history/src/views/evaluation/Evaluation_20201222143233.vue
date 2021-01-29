<template>
  <div>
    <van-nav-bar title="评价中心" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='top-pic'>
        <img src="../../assets/evaluate.jpg">
    </div>
    <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
      onClickLeft(){
          this.$router.go('-1')
      }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .top-pic{
        width:100vw;
        height:200px;
        img{
            width:100vw;
            height:200px;
        }
    }
</style>
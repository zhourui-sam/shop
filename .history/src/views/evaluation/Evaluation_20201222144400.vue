<template>
  <div>
    <van-nav-bar title="评价中心" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='top-pic'>
        <img src="../../assets/evaluate.jpg">
    </div>
    <div class='contain'>
        <van-tabs v-model="active" class='title'>
            <van-tab title="待评价">内容 1</van-tab>
            <van-tab title="已评价">内容 2</van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
        active: 0
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
    .contain{
        width:100vw;
        background: white;
        // margin-top:-30px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            width:80vw;
        }
    }
</style>
<template>
  <div>
    <van-nav-bar title="评价中心" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='top-pic'>
        <img src="../../assets/evaluate.jpg">
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
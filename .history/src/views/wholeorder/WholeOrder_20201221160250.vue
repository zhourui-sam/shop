<template>
  <div>
    <van-nav-bar title="我的订单" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='classify'>
        <van-tabs v-model="active">
            <van-tab title="全部">内容 1</van-tab>
            <van-tab title="待支付">内容 2</van-tab>
            <van-tab title="待发货">内容 3</van-tab>
            <van-tab title="待收货">内容 4</van-tab>
            <van-tab title="已完成">内容 4</van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
  name: '',
  props:{},
  data () {
    return {
        active:1
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

</style>
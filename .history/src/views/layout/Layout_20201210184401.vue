<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div></div>
      <van-tabbar v-model="active" active-color="#ee0a24">
        <van-tabbar-item icon="home-o">商城</van-tabbar-item>
        <van-tabbar-item icon="wap-nav">分类</van-tabbar-item>
        <van-tabbar-item icon="cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        active:0
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
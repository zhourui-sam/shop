<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div></div>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" color='red'>商城</van-tabbar-item>
        <van-tabbar-item icon="wap-nav" color='red'>分类</van-tabbar-item>
        <van-tabbar-item icon="cart" color='red'>购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" color='red'>我的</van-tabbar-item>
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
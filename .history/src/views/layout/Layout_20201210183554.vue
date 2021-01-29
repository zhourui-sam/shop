<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div></div>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">商城</van-tabbar-item>
        <van-tabbar-item icon="search">分类</van-tabbar-item>
        <van-tabbar-item icon="card-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
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
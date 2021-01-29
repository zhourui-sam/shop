<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div class='bottom'>
      <van-tabbar v-model="active" active-color="#ee0a24" placeholder >
        <van-tabbar-item icon="home-o" @click="ToHome">商城</van-tabbar-item>
        <van-tabbar-item icon="wap-nav">分类</van-tabbar-item>
        <van-tabbar-item icon="cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" @click="ToMine">我的</van-tabbar-item>
      </van-tabbar>
    </div>
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
  methods: {
    ToHome(){
      this.$router.push('/')
    },
    ToMine(){
      this.$router.push('/mine')
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <van-cell is-link icon="records" @click="goorderItem">全部订单</van-cell>
    <van-cell is-link icon="star-o" @click="CollectionItem">收藏商品</van-cell>
    <van-cell is-link icon="location-o" @click="AddressItem">地址管理</van-cell>
    <van-cell is-link icon="eye-o" @click="historyItem">最近浏览</van-cell>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
    Address(){
      this.$router.push('/address')
    },
    Collection(){
      this.$router.push('/collection')
    },
    goorder(){
      this.$router.push('/wholeorder')
    },
    goorderItem(){
      this.$checkLogin(this.goorder)
    },
    history(){
      this.$router.push('/history')
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
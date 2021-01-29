<template>
  <div>
    <van-cell is-link icon="records">全部订单</van-cell>
    <van-cell is-link icon="star-o" @click="Collection">收藏商品</van-cell>
    <van-cell is-link icon="location-o" @click="Address">地址管理</van-cell>
    <van-cell is-link icon="eye-o">最近浏览</van-cell>
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
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <van-nav-bar title="我的收藏" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='container'>
      <div class='main' v-if="addressList.length === 0">
        <div class="none">
          暂无收货地址~~~
        </div>
      </div>
    </div>
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
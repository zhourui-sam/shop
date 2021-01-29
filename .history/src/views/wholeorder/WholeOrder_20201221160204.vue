<template>
  <div>
    <van-nav-bar title="全部订单" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='classify'>
        <van-tabs v-model="active">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
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
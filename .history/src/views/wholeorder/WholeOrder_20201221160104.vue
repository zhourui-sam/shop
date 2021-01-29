<template>
  <div>
    <van-nav-bar title="全部订单" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
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
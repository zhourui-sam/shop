<template>
  <div>
    <div class='title'>会员中心</div>
    <user></user>
    <div>
      <van-grid :column-num="5">
        <van-grid-item icon="balance-pay" text="待付款" />
        <van-grid-item icon="free-postage" text="待发货" />
        <van-grid-item icon="points" text="待收货" />
        <van-grid-item icon="good-job-o" text="评价" />
        <van-grid-item icon="like-o" text="已完成" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import user from './user/User'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {user},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
  .title{
    width:100vw;
    height:50px;
    position: fixed;
    top:0;
    left:0;
    background: white;
    text-align: center;
    line-height: 50px;
  }
 
</style>
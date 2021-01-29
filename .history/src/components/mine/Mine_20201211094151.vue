<template>
  <div>
    <div class='title'>会员中心</div>
    <div class='user'>

    </div>
    <div>
      <van-grid :column-num="5">
        <van-grid-item icon="photo-o" text="待付款" />
        <van-grid-item icon="photo-o" text="待发货" />
        <van-grid-item icon="photo-o" text="待收货" />
        <van-grid-item icon="photo-o" text="评价" />
        <van-grid-item icon="photo-o" text="已完成" />
      </van-grid>
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
  .user{
    width:100vw;
    height:250px;
    background: purple;
    margin-top:50px;
  }
</style>
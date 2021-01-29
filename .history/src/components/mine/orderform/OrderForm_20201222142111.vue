<template>
  <div>
    <div>
      <van-grid :column-num="5">
        <van-grid-item icon="balance-pay" text="待付款" />
        <van-grid-item icon="free-postage" text="待发货" />
        <van-grid-item icon="points" text="待收货" />
        <van-grid-item icon="good-job-o" text="评价" @click="evaluation"/>
        <van-grid-item icon="like-o" text="已完成" />
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
  methods: {
    evaluation(){
      this.$router.push('/evaluation')
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
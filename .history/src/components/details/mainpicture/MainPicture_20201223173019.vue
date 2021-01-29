<template>
  <div>
    <div class='detail'>
        <van-tabs v-model="active">
            <van-tab title="商品详情">
                <div v-html="goods.detail" class='pic'></div>
            </van-tab>
            <van-tab title="商品评论">
                
            </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    goods:{
        type:Object
    },
  },
  data () {
    return {
        active: 0,
    }
  },
  components: {},
  methods: {
    getdata(){
      this.$api.AlreadyEvaluated().then(res =>{
        this.listed = res.data.list
        console.log(this.listed)
      })
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.pic{
    vertical-align: middle; 
    font-size: 0;
    display: inline-block;
}
</style>
<template>
  <div>
    <div class='detail'>
        <van-tabs v-model="active">
            <van-tab title="商品详情">
                <div v-html="goods.detail" class='pic'></div>
            </van-tab>
            <van-tab title="商品评论">
                <div class='box'>

                </div>
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
        list:[],
    }
  },
  components: {},
  methods: {
    getdata(){
      let arr = []
      this.$api.AlreadyEvaluated().then(res =>{
        this.list = res.data.list
        console.log(res.data.list)
        this.list.map(item =>{
          if(item.goods[0].id === this.goods.id)
        })
      })
    }
  },
  mounted() {
    this.getdata()
  },
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
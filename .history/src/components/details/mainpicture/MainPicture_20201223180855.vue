<template>
  <div>
    <div class='detail'>
        <van-tabs v-model="active">
            <van-tab title="商品详情">
                <div v-html="goods.detail" class='pic'></div>
            </van-tab>
            <van-tab title="商品评论">
                <div class='comment'>
                  <div class='box' v-for="(item,index) in arr" :key="index">
                    <div class='head'>
                      <div class='head-pic'>
                        <van-image
                        round
                        width="4rem"
                        height="4rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                        fit='cover'/>
                      </div>
                    </div>
                    <div class='right'>
                      <div class='name-time'>

                      </div>
                      <div class='rank'></div>
                      <div class='text'></div>
                    </div>
                  </div>
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
        arr:[],
        username:'',
    }
  },
  components: {},
  methods: {
    getdata(){
      this.$api.AlreadyEvaluated().then(res =>{
        this.list = res.data.list
        console.log(res.data.list)
        this.list.map(item =>{
          if(item.goods[0].id === this.goods.id){
            this.arr.push(item)
          }
        })
      })
      console.log(this.arr)
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
.head-pic{
  width:100px;
  height:100px;
}
</style>
<template>
  <div>
    <div class='detail'>
        <van-tabs v-model="active">
            <van-tab title="商品详情">
                <div v-html="goods.detail" class='pic'></div>
            </van-tab>
            <van-tab title="商品评论">
                <div class='comment'>
                  <div class='box' v-for="(item,index) in comment" :key="index">
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
                        <div class='name'>{{this.username}}</div>
                        <div class='time'>{{item.comment_time}}</div>
                      </div>
                      <div class='rate'>
                        <van-rate v-model="item.rate" readonly/>
                      </div>
                      <div class='text'>
                        {{item.content}}
                      </div>
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
    comment:{
      type:Array
    }
  },
  data () {
    return {
        active: 0,
        username:'',
    }
  },
  components: {},
  methods: {
    getdata(){
        console.log(this.comment)
        this.comment.map(item =>{
          if(item.anonymous === true){
            this.username = item.comment_nickname
          }else{
            this.username = item.user[0].nickname
          }
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
.head-pic{
  width:100px;
  height:100px;
}
</style>
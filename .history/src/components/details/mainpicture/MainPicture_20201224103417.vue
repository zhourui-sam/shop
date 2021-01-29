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
                    <div class='left'>
                        <van-image
                        round
                        width="4rem"
                        height="4rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                        fit='cover'/>
                    </div>
                    <div class='right'>
                      <div class='name-time'>
                        <div class='name' v-if="item.anonymous === false">{{item.user[0].nickname}}:</div>
                        <div class='name' v-else>{{item.comment_nickname}}:</div>
                        <div class='time'>{{item.comment_time}}</div>
                      </div>
                      <div class='rate'>
                        <van-rate v-model="item.rate" readonly size="16px"/>
                      </div>
                      <div class='text'>
                        评论内容：{{item.content}}
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
    }
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.comment)
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
.box{
  width: 90vw;
  height:100px;
  display: flex;
  justify-content: space-around;
  .left{
    width:70px;
    height:70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right{
    width:70vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .name-time{
      width:70vw;
      display: flex;
      justify-content: space-between;
    }
    .rate{
      display: flex;
      justify-content: start;
    }
  }
}
</style>
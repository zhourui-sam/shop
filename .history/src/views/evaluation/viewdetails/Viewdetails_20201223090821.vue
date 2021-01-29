<template>
  <div>
    <van-nav-bar title="评价中心" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='top'>
      <div class='contain'>
        <div class='head'>
            <van-image
            round
            width="4rem"
            height="4rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            fit='cover'/>
        </div>
        <div class='rank'>
            <div class='name'>{{this.username.nickname}}</div>
            <div class='rank-star'><van-rate v-model="value" readonly/></div>
        </div>
        <div class='upload'>
          {{this.good.comment_time}}
        </div>
      </div>
      <div class='writedown'>
        评价内容: {{this.good.content}}
      </div>
    </div>
    <div class='middle'>
      <div class='box' v-for="(item,index) in good.goods" :key="index">
        <div class='pic'>
          <img :src="item.image_path">
        </div>
        <div class='name'>
          {{item.name}}
        </div>
        <div class='btn'>
          <van-icon name="shopping-cart-o" size="25"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Rate } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
        username:'',
        good:{},
        value:0,
    }
  },
  components: {},
  methods: {
      onClickLeft(){
          this.$router.go('-1')
      },
      Getdata(){
          this.good = JSON.parse(this.$route.query.good)
          this.username = JSON.parse(localStorage.getItem('nickname'))
          console.log(this.good)
          this.value = this.good.rate
      }
  },
  mounted() {
      this.Getdata()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
  .top{
    width:100vw;
    height:120px;
    border-bottom:1px solid rgb(238, 238, 238) ;
    .contain{
      width:100vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .rank{
        height:68px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
    .writedown{
      margin-top:10px;
      margin-left:15px;
    }
  }
  .middle{
    width:100vw
  }
</style>
<template>
  <div class='box'>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in this.rotate" :key="index">
        <img v-lazy="image.image"  class='pic' @click="details(image)"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name: '',
  props:{
      rotate:{
          style:Array,
          
      }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {
    details(image){
      this.$router.push({
        path:'/details',
        query:{
          id:image.goodsId
        }
      })
    }
  },
  mounted() {
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .box{
        width:100%;
        height:200px;
        .pic{
            width:100%;
            height:200px;
        }
    }
</style>
<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in this.rotate" :key="index">
        <img v-lazy="image" />
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
        image:[]
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

</style>
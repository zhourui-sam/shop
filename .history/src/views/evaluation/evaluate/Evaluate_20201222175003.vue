<template>
  <div>
    <van-nav-bar title="评价中心" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='top'>
        <div class='pic'>
            <img :src="good.image_path">
        </div>
        <div class='text'>
            <div class='text-name'>商品评分</div>
            <div class='score'><van-rate v-model="value" /></div>
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
        good:[],
        value: 0,
    }
  },
  components: {},
  methods: {
      Getdata(){
          console.log(this.$route.query)
          this.good = this.$route.query.good
      },
      onClickLeft(){
          this.$router.go('-1')
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

</style>
<template>
  <div class='contain'>
    <van-cell-group>
      <van-cell title="商品推荐"/>
    </van-cell-group>
      <div class='goods'>
        <div v-for="(item,index) in recommendation" :key="index" class='box'>
            <img v-lazy='item.image' class='img'>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      recommendation:{
          type:Array
      }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {
      console.log(this.recommendation)
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .contain{
        width:100vw;
        height:300px;
        background: tomato;
        margin-top:50px;
        overflow: hidden;
        .goods{
            width:3000px;
            display: flex;
            justify-content: space-around;
            .box{
                width:200px;
                height:200px;
                .img{
                    width:200px;
                    height:200px;
                }
            }
        }
    }
</style>
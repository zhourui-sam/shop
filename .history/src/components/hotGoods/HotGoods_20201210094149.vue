<template>
  <div class='bg'>
    <div class='contain'>
      <div class='classify'>热销商品</div>
      <div class='box'>
        <div class='pic' v-for="(item,index) in hotGoods" :key='index'>
          <img v-lazy='item.image' class='img'>
          <div class='name'>{{}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      hotGoods:{
          type:Array
      }
  },
  data () {
    return {
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
.bg{
  position: relative;
  top:400px;
  .contain{

    .classify{
      width:100%;
      height:30px;
      line-height: 30px;
      color:red;
      margin-left: 5px;
      text-align: center;
    };
    .box{
      width:100%;
      display:flex;
      flex-wrap: wrap;
      .pic{
        width:50%;
        height:200px;
        .img{
          width:100%;
          height:200px;
        }
      }
    }
  }
}
</style>
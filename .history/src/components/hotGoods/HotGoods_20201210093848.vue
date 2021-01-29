<template>
  <div class='bg'>
    <div class='contain'>
      <div class='name'>热销商品</div>
      <div class='box'>
        <div class='pic' v-for="(item,index) in hotGoods" :key='index'>
          <img v-lazy='item.image' class='img'>
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
  .box{

    .name{
      width:100%;
      height:30px;
      line-height: 30px;
      color:red;
      margin-left: 5px;
      text-align: center;
    };
    .pic{
      width:50%;
      display:f
    }
  }
}
</style>
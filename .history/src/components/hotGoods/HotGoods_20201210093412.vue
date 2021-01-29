<template>
  <div class='bg'>
    <div class='box'>
      <div class='name'>热销商品</div>
      <div class='pic' v-for="(item,index) in hotGoods" :key='index'>
        <img v-lazy='item.image' class='img'>
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
  top:450px;
}
</style>
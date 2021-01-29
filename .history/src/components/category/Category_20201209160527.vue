<template>
  <div class='bg'>
    <div class='box'>
      <div v-for="(item,index) in category" :key="index" class='img'>
        <img v-lazy="item.image" class='pic'/>
        {{item.mallCategoryName}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    category:{
      type:Array
    }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {

  },
  mounted() {
    console.log(this.category)
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
  .bg{
    width:100%;
    height:100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top:30px;
    .box{
      width:90%;
      height:100px;
      background: white !important;
      display: flex;
      align-items: center;
      img{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .pic{
        width:60px;
        width:60px;
      }
    }
  }
</style>
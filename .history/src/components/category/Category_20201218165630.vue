<template>
  <div class='bg'>
    <div class='box'>
      <div v-for="(item,index) in category" :key="index" class='img'>
        <img v-lazy="item.image" class='pic' @click="classification(item)"/>
        <div>{{item.mallCategoryName}}</div>
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
    classification(index){
      this.$router.push({
        path:'/classification',
        query:{
          index : index
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
  .bg{
    width:100%;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top:10px;
    .box{
      width:90%;
      height:100px;
      background: white !important;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 10px;
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
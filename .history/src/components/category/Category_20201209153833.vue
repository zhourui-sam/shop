<template>
  <div class='bg'>
    <div v-for="(item,index) in category" :key="index">
      <div class='box'>
        <img v-lazy="item.image" class='pic'/>
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
    .box{
      width:60px;
      height:60px;
      .pic{
        width:60px;
        width:60px;
      }
    }
  }
</style>
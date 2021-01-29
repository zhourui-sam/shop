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
    width:80%;
    height:100px;
    display: flex;
    .box{
      width:50px;
      height:50px;
      .pic{
        width:50px;
        width:50px;
      }
    }
  }
</style>
<template>
  <div class='bg'>
    <div v-for="(item,index) in this.category" :key="index"></div>
      <div>
        <img v-lazy="item.image"  class='pic'/>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    category:{
      style:Array
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
  }
</style>
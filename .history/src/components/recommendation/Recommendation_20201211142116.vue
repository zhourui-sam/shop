<template>
  <div class='box'>
    <div class='goods'>
        <div v-for="(item,index) in recommendation" :key="index"></div>
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
    .box{
        width:100vw;
        height:300px;
        background: tomato;
        margin-top:50px;
        overflow: hidden;
    }
</style>
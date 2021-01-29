<template>
  <div class='contain'>
    <div class='title'></div>
    <div class='box'>
        <div class='first'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      firstfloor:{
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
    .contain{
        width:100%;
        height:250px;
        .title{
            width:100%;
            height:40px;
        }
    }
</style>
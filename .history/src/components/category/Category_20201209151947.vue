<template>
  <div class='bg'>
    <div v-for="(image,index) in this.category" :key="index"></div>
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
  mounted() {},
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
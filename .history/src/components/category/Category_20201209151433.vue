<template>
  <div class='bg'>
    
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
    this.$api.SearchData('value',{
      value : this.value
    }).then(res =>{
      console.log(res)
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
  .bg{
    width:80%;
    height:100px
  }
</style>
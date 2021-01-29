<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      value:''
    }
  },
  components: {},
  methods: {},
  mounted() {
    this.$api.HomeData().then(res =>{
      console.log(res)
      }).catch(err =>{
        console.log(err)
      }),
    this.$api.SearchData({
      value:this.value
      }).then(res =>{
      console.log(res)
      }).catch(err =>{
        console.log(err)
      })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        id:'',
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.id = this.$route.query.id
      this.$api.QueryData(id).then(res =>{
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
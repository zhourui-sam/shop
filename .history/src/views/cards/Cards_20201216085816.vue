<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api.GetCard().then(res =>{
          console.log(111)
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
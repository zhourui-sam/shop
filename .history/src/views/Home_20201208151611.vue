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
    this.$api.HomeData().then(res =>{
      console.log(res)
      }).catch()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
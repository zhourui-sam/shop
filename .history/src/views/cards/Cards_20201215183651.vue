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
          console.log(res)
      })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      cards:[],
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api.GetCard().then(res =>{
          console.log(res)
          this.cards = res.shoplist
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
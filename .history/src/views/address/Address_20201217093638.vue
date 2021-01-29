<template>
  <div>
    <van-nav-bar title="地址列表" :fixed="true" left-arrow @click-left="onClickLeft"/>
  </div>
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
  methods: {
    onClickLeft(){
      this.$router.go('-1')
    },
    getAddress(){
      this.$api.GetAddress().then(res =>{
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getAddress()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
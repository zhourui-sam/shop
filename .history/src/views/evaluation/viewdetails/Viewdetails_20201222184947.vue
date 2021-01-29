<template>
  <div>
    <van-nav-bar title="评价中心" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        username:'',
        good:{},
    }
  },
  components: {},
  methods: {
      onClickLeft(){
          this.$router.go('-1')
      },
      Getdata(){
          this.good = JSON.parse(this.$route.query.good)
          console.log(JSON.parse(this.$route.query.good))
      }
  },
  mounted() {
      this.Getdata()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
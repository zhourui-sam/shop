<template>
  <div>
    <van-nav-bar title="评价中心" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='top'>
        <img :src="good.image_path">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        good:[],
    }
  },
  components: {},
  methods: {
      Getdata(){
          console.log(this.$route.query)
          this.good = this.$route.query.good
      },
      onClickLeft(){
          this.$router.go('-1')
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
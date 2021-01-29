<template>
  <div>
    <van-nav-bar title="评价中心" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='top'>
        <div class='head'>
            <van-image
            round
            width="4rem"
            height="4rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            fit='cover'/>
        </div>
        <div class='rank'>
            <div class='name'>{{this.username.nickname}}</div>
        </div>
    </div>
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
          this.username = JSON.parse(localStorage.getItem('nickname'))
          console.log(this.good)
          console.log(this.username)
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
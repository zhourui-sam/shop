<template>
  <div>
    <van-nav-bar title="最近浏览" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      data:[],
    }
  },
  components: {},
  methods: {
    onClickLeft(){
        this.$router.push('/mine')
    },
    getdata(){
      this.data = JSON.parse(localStorage.getItem('adminbrowerHistory'))
      console.log(this.data)
    }
  },
  mounted() {
    this.getdata()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class='bg'>
    <div class='goods'>
      <!-- <img :src="this.details.image"> -->
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      // details:{}
    }
  },
  components: {},
  methods: {},
  mounted() {
    // this.details = this.$route.params.val
    // console.log(this.$route.params.val)
    // console.log(this.details.image)
    this.$api.GoodsData(id).then(res =>{
      console.log(id)
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
  .goods{
    width:100vw;
    height:100px;
  }
</style>
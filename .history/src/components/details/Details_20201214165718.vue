<template>
  <div class='bg'>
    <div class='goods'>
      <img :src="this.details.image">
    </div>
  </div>
</template>

<script>
export default {
  name: '', 
  props:{},
  data () {
    return {
      details:{},
      id:'',
    }
  },
  components: {},
  methods: {},
  mounted() {
    this.id = this.$route.query.id//获取全局数据id
    console.log(this.$route.query)
    this.$api.GoodsData(this.id).then(res =>{
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
<template>
  <div class='bg'>
    <div class='goods'>
      <picture :depicture='depicture' v-if="depicture.length>0"></picture>
    </div>
  </div>
</template>

<script>
import depicture from './picture/Picture'
export default {
  name: '', 
  props:{},
  data () {
    return {
      details:{},
      id:'',
      depicture:'',
    }
  },
  components: {depicture},
  methods: {},
  mounted() {
    this.id = this.$route.query.id//获取全局数据id
    this.$api.GoodsData(this.id).then(res =>{
      this.details = res.goods.goodsOne
      console.log(res.goods.goodsOne)
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
    height:300px;
    display: flex;
    justify-content: center;
  }
</style>
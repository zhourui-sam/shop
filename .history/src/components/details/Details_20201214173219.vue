<template>
  <div class='bg'>
    <div class='goods'>
      <picture :picture='picture' v-if="picture.length>0"></picture>
    </div>
  </div>
</template>

<script>
import picture from './picture/Picture'
export default {
  name: '', 
  props:{},
  data () {
    return {
      details:{},
      id:'',
    }
  },
  components: {picture},
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
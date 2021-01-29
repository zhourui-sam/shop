<template>
  <div class='bg'>
    <div class='goods'>
      <depicture :details='details' v-if="details"></depicture>
      <maintext :details='details' v-if="details"></maintext>
    </div>
  </div>
</template>

<script>
import depicture from './picture/Picture'
import maintext from './maintext/MainText'
export default {
  name: '', 
  props:{},
  data () {
    return {
      details:{},
      id:'',
    }
  },
  components: {depicture,maintext},
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
.bg{
  width:100vw;
  display: flex;
  .goods{
    width:90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
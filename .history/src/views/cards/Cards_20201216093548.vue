<template>
  <div>
    <div class='top'>购物车</div>
    <div class='account'>
      {{cards[0].name}}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      cards:[],
    }
  },
  components: {},
  methods: {
    
  },
  mounted() {
      this.$api.GetCard().then(res =>{
          console.log(res.shopList)
          this.cards = res.shopList
          console.log(this.cards)
      }).catch(err =>{
          console.log(err)
      })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top{
    width:100vw;
    position: fixed;
    top: 0;
    height:50px;
    background: white;
    text-align: center;
    line-height: 50px;

}
</style>
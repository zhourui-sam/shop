<template>
  <div>
    <div class='top'>购物车</div>
    <div class='account'></div>
    <div class='cars'>
      <div class='goods' v-for="(item,index) in this.cards" :key="index">
        <img :src="item.image_path">
        <div>{{item.name}}</div>
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
};
.account{
  margin-top:50px;
  width:100vw;
  height:100px;
  background: skyblue;
};
.cars{
  img{
    width:20px;
    height:20px;
  }
}
</style>
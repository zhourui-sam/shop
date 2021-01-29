<template>
  <div class='bg'>
    <nav-header></nav-header>
    <div class='main'>
      <rotate :rotate='rotate' v-if="rotate.length>0"></rotate>
      <category :category='category' v-if='category.length>0'></category>
      <advertesPicture></advertesPicture>
      <firstfloor :firstfloor='firstfloor' v-if='firstfloor.length>0'></firstfloor>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import navHeader from '../components/navheader/NavHeader'
import rotate from '../components/rotate/Rotate'
import category from '../components/category/Category'
import advertesPicture from '../components/advertesPicture/AdvertesPicture'
import firstfloor from '../components/firstfloor/Firstfloor'

export default {
  name: '',
  props:{},
  data () {
    return {
        rotate:[],
        category:[],
        firstfloor:[],
    }
  },
  components: {navHeader,rotate,category,advertesPicture,firstfloor},
  methods: {},
  mounted() {
      this.$api.HomeData().then(res =>{
        this.rotate = res.data.slides
        this.category = res.data.category
        this.firstfloor = res.data.floor1
        console.log(this.firstfloor)
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
    background: rgb(237, 237, 237);
    .main{
        position: relative;
        z-index: 1;
        top:50px;
        background: rgb(237, 237, 237);
    }
}
</style>
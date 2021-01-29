<template>
  <div class='bg'>
    <nav-header></nav-header>
    <div class='main'>
      <rotate :rotate='rotate' v-if="rotate.length>0"></rotate>
      <category :category='category' v-if='category.length>0'></category>
      <advertesPicture></advertesPicture>
      <firstfloor :floor1='floor1' :floorname1='floorname1' v-if='floor1.length>0'></firstfloor>
      <firstfloor :floor1='floor2' :floorname1='floorname2' v-if='floor2.length>0' class='Floor1'></firstfloor>
      <firstfloor :floor1='floor3' :floorname1='floorname3' v-if='floor3.length>0' class='Floor2'></firstfloor>
      <hot :hot='hot' v-if='hot.length>0'></hot>
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
import hot from '../components/hot/Hot'

export default {
  name: '',
  props:{},
  data () {
    return {
        rotate:[],
        category:[],
        floor1:[],
        floor2:[],
        floor3:[],
        floorname1:'',
        floorname2:'',
        floorname3:'',
    }
  },
  components: {navHeader,rotate,category,advertesPicture,firstfloor},
  methods: {},
  mounted() {
      this.$api.HomeData().then(res =>{
        this.rotate = res.data.slides
        this.category = res.data.category
        this.floor1 = res.data.floor1
        this.floor2 = res.data.floor2
        this.floor3 = res.data.floor3
        this.floorname1 = res.data.floorName.floor1
        this.floorname2 = res.data.floorName.floor2
        this.floorname3 = res.data.floorName.floor3
        console.log(this.floor1)
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
        height:2000px;
    }
    .Floor1{
        position: relative;
        top:150px;
        background: rgb(237, 237, 237);
    }
    .Floor2{
        position: relative;
        top:270px;
        background: rgb(237, 237, 237);
    }
}
</style>
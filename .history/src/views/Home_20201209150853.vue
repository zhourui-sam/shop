<template>
  <div class='bg'>
    <nav-header></nav-header>
    <div class='main'>
      <rotate :rotate='rotate' v-if="rotate.length>0"></rotate>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import navHeader from '../components/navheader/NavHeader'
import rotate from '../components/rotate/Rotate'
import classify from '../components/classify/Classify'

export default {
  name: '',
  props:{},
  data () {
    return {
        rotate:[],
        category:[],
    }
  },
  components: {navHeader,rotate,classify},
  methods: {},
  mounted() {
      this.$api.HomeData().then(res =>{
        this.rotate = res.data.slides
        this.category = res.data.category
      }).catch(err =>{
        console.log(err)
      })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .main{
        position: relative;
        z-index: 1;
        top:50px;
    }
</style>
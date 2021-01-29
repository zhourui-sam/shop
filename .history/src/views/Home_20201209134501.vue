<template>
  <div class='bg'>
    <nav-header></nav-header>
    <rotate :rotate='rotate' v-if="rotate.length>0"></rotate>
  </div>
</template>

<script>
import Vue from 'vue';
import navHeader from '../components/navheader/NavHeader'
import rotate from '../components/rotate/Rotate'
export default {
  name: '',
  props:{},
  data () {
    return {
        rotate:[]
    }
  },
  components: {navHeader,rotate},
  methods: {},
  mounted() {
      this.$api.HomeData().then(res =>{
      console.log(res.data)
      this.rotate = res.data.slides
      console.log(this.rotate)
      }).catch(err =>{
        console.log(err)
      })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
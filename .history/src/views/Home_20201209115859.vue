<template>
  <div class='bg'>
    <nav-header></nav-header>
    <rotate></rotate>
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
    }
  },
  components: {navHeader,rotate},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
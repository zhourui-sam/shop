<template>
  <div class='bg'>
    <div class='box'>
      <div class='pic' v-for="(item,index) in hotGoods :key='index'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      hotGoods:{
          type:Array
      }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class='pic'>
    <img :src="this.details.image_path" class='img'>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      details:{
          type:Object
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
  .pic{
    display: flex;
    justify-content: center;
    width:80vw;
    .img{
      width:80vw;
    }
  }
</style>
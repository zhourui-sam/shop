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
    .img{
      width:50vw;
    }
  }
</style>
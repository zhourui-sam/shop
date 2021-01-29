<template>
  <div class='bg'>
    <div class='goods'>
      <img :src="this.details.image" v-if="this.details.image.length>0">
    </div>
  </div>
</template>

<script>
export default {
  name: '', 
  props:{},
  data () {
    return {
      // details:{}
      id:'',
    }
  },
  components: {},
  methods: {},
  mounted() {
    this.details = this.$route.params.val
    console.log(this.$route.params.val)
    console.log(this.details.image)
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
  .goods{
    width:100vw;
    height:100px;
  }
</style>
<template>
  <div class='bg'>
    <div class='goods'>
      <img :src="this.details.image">
    </div>
  </div>
</template>

<script>
export default {
  name: '', 
  props:{},
  data () {
    return {
      details:{},
      id:'',
    }
  },
  components: {},
  methods: {},
  mounted() {
    this.$route.query
    this.details = this.$route.params.val
    console.log(this.$route.params.val)
    console.log(this.$route.query)
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
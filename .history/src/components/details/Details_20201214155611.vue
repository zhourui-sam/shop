<template>
  <div class='bg'>
    <div class='goods'>
      <img src="details.image">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      details:{}
    }
  },
  components: {},
  methods: {},
  mounted() {
    details = this.$route.params.val
    console.log(this.$route.params.val)
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
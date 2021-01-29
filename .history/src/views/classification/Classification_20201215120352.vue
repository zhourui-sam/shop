<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        id:'',
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api.QueryData(id)
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>
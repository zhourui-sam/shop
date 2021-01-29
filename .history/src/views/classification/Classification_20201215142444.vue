<template>
  <div>
    <div class='container'>
        <div class='sidebar'></div>
        <div></div>
    </div>
  </div>
</template>

<script>
import { Sidebar, SidebarItem } from 'vant'
import { Tab, Tabs } from 'vant'
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
      this.id = this.$route.query.id
      this.$api.QueryData(this.id).then(res =>{
          console.log(res)
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
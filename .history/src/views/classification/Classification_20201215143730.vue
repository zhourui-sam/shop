<template>
  <div>
    <div class='container'>
        <div class='sidebar'>
            <van-sidebar v-model="activeKey">
                <van-sidebar-item title="标签名称" />
            </van-sidebar>
        </div>
        <div class='topbar'>
            <van-tabs v-model="active">
                <van-tab title="标签 1"></van-tab>
            </van-tabs>
        </div>
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
        activeKey:0,
        active:0,
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api.HomeData().then(res =>{
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
      this.id = this.$route.query.id
      this.$api.QueryData(this.id).then(res =>{
          console.log(this.$route)
      }).catch(err =>{
          console.log(err)
      })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
}
</style>
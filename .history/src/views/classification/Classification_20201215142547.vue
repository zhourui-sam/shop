<template>
  <div>
    <div class='container'>
        <div class='sidebar'>
            <van-sidebar v-model="activeKey">
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
            </van-sidebar>
        </div>
        <div class='topbar'>
            <van-tabs v-model="active">
                <van-tab title="标签 1">内容 1</van-tab>
                <van-tab title="标签 2">内容 2</van-tab>
                <van-tab title="标签 3">内容 3</van-tab>
                <van-tab title="标签 4">内容 4</van-tab>
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
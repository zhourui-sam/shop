<template>
  <div>
    <div class='container'>
        <div class='sidebar'>
            <van-sidebar v-model="activeKey">
                <van-sidebar-item :title="item.mallCategoryName" v-for="(item,index) in this.details" :key="index"/>
            </van-sidebar>
        </div>
        <div class='topbar'>
            <van-tabs v-model="active">
                <div v-for="(item,index) in this.details" :key="index">
                    <van-tab :title="item1[index1].mallSubName" v-for="(item1,index1) in item.bxMallSubDto" :key="index1"></van-tab>
                </div>
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
        details:[],
        id:'',
        activeKey:0,
        active:0,
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api.HomeData().then(res =>{
        console.log(res.data.category)
        this.details = res.data.category
      }).catch(err =>{
        console.log(err)
      })
      this.id = this.$route.query.id
    //   this.$api.QueryData(this.id).then(res =>{
    //       console.log(this.$route)
    //   }).catch(err =>{
    //       console.log(err)
    //   })
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
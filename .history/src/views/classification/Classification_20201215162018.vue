<template>
  <div>
    <div class='container'>
        <div class='sidebar'>
            <van-sidebar v-model="activeKey" @click="gim">
                <van-sidebar-item :title="item.mallCategoryName" v-for="item in details" :key="item.mallCategoryId"/>
            </van-sidebar>
        </div>
        <div class='topbar'>
            <van-tabs v-model="active" :ellipsis='false'>
                <van-tab :title="item.mallSubName" v-for="item in details1" :key="item.mallSubId">
                </van-tab>
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
        details1:[],
        id:'',
        activeKey:0,
        active:0,
    }
  },
  components: {},
  methods: {
      gim(){
          this.activeKey = 1
      }
  },
  mounted() {
      this.$api.HomeData().then(res =>{
        console.log(res.data.category)
        this.details = res.data.category
        this.details1 = this.details[this.activeKey].bxMallSubDto
        console.log(this.details1)
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
    width:100vw;
}
</style>
<template>
  <div>
  <div class='top'>商品分类</div>
    <div class='container'>
        <div class='sidebar'>
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-sidebar-item :title="item.mallCategoryName" v-for="item in details" :key="item.mallCategoryId"/>
            </van-sidebar>
        </div>
        <div class='topbar'>
            <van-tabs v-model="active" :ellipsis='false' @change='onClick'>
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
        activeKey:0,
        active:0,
    }
  },
  components: {},
  methods: {
    onChange(){
        this.details1 = this.details[this.activeKey].bxMallSubDto
        this.active = 0;
        this.onClick();
        console.log(this.details1)
    },
    onClick(){
        this.$api.QueryData(this.details1[this.active].mallSubId)
    }
      
  },
  mounted() {
      this.$api.HomeData().then(res =>{
        // console.log(res.data.category)
        this.details = res.data.category
        this.details1 = this.details[this.activeKey].bxMallSubDto
      }).catch(err =>{
        console.log(err)
      })
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
.top{
    width:100vw;
    position: fixed;
    top: 0;
    height:50px;
    background: white;
    text-align: center;
    line-height: 50px;

}
.container{
    display: flex;
    width:100vw;
    .sidebar{
        position: fixed;
        left: 0;
        top: 50px;
    };
    .topbar{
        margin-left: 80px;
        margin-top:50px;
        overflow: hidden;
    }
}
</style>
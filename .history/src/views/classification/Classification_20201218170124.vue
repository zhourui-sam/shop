<template>
  <div>
  <div class='top'>商品分类</div>
    <div class='container'>
        <div class='sidebar'>
            <van-sidebar v-model="activeKey" @change="onChange"><!--绑定改变事件，通过改变事件变换对应的activeKey(可以理解为数组里面对应分类的下标)来绑定对应的小分类数据以及实现改变功能-->
                <van-sidebar-item :title="item.mallCategoryName" v-for="item in details" :key="item.mallCategoryId"/>
            </van-sidebar>
        </div>
        <div class='topbar'>
            <van-tabs v-model="active" :ellipsis='false' @change='onClick'><!--同上面-->
                <van-tab :title="item.mallSubName" v-for="item in details1" :key="item.mallSubId">
                    <div v-for="(item,index) in datalist" :key="index" class='card' @click="gotodetail(item)">
                        <img :src="item.image">
                        <div class='name'>{{item.name}}</div>
                        <div class='pri'>
                            <div class='p_price'>￥{{item.present_price}}</div>
                            <div class='o_price'>￥{{item.orl_price}}</div>
                        </div>
                    </div>
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
        datalist:[],
    }
  },
  components: {},
  methods: {
    onChange(){
        //让details1的数据等于details对应下标里面的bxMallSubDto,
        //this.activeKey表示当前对应的数据在数组中的下标,activeKey为vant里面
        this.details1 = this.details[this.activeKey].bxMallSubDto
        this.active = 0;
        this.onClick();
    },
    onClick(){
        //发请求获得mallSubId对应的数据,this.active表示当前选中对象的下标
        this.$api.QueryData(this.details1[this.active].mallSubId).then(res =>{
            console.log(res)
            this.datalist = res.dataList;
        })
    },
    gotodetail(item){
        this.$router.push({
            name:'details',
            query:{
                id:item.id
            }
        })
    }
      
  }, 
  mounted() {
      this.$api.HomeData().then(res =>{
        // console.log(res.data.category)
        this.details = res.data.category
        this.details1 = this.details[this.activeKey].bxMallSubDto
        this.onChange( )
      }).catch(err =>{
        console.log(err)
      });
      this.activeKey = this.$route.query.index1
      console.log(this.$route.query.index1)
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
img {
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
}
.card {
  padding: 5px;
  position: relative;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.name {
  position: absolute;
  top: 5px;
  left: 85px;
  font-size: 14px;
  color: #ff3737;
}
.pri {
  position: absolute;
  bottom: 20px;
  left: 100px;
}
.p_price {
  font-size: 14px;
  color: #ff3737;
  margin-right: 5px;
}
.o_price {
  color: #777;
  font-size: 12px;
  text-decoration: line-through;
}
.left {
  top: 46px;
}
</style>
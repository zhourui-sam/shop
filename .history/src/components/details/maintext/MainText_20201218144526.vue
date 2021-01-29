<template>
  <div class='maintext'>
    <div class='name'>
      {{this.goods.name}}
    </div>
    <div class='price'>
      ￥{{this.goods.present_price}}
    </div>
    <div class='amount'>
        <div>运费:{{this.goods.__v}}</div>
        <div>剩余:{{this.goods.amount}}</div>
        <div class='collection' v-if="this.details === 0">
            <div class='collect'>收藏:</div>
            <van-icon name="like-o" color="red" size="24px" @click="collection"/>
        </div>
        <div class='collection' v-else>
            <div class='collect'>取消收藏:</div>
            <van-icon name="like" color="red" size="24px" @click="cancel"/>
        </div>
    </div>
    <div class='shop'>
        <van-cell title="单元格" icon="shop-o" is-link value="进入店铺">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #title>
                <span class="custom-title">有赞的店</span>
                <van-tag type="danger" color="rgb(255,68,68)" size="large">官方</van-tag>
            </template>
        </van-cell>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: '',
  props:{
      goods:{
          type:Object
      },
  },
  data () {
    return {
      details:0,
    }
  },
  components: {},
  methods: {
     
      collection(){
    //       Collection(goods) { //收藏单个商品9
    //     return http.post('/collection', {
    //         goods //商品的详情信息
    //     })
    // },
          this.$api.Collection(
             this.goods
          ).then(res =>{
              console.log(res)
              this.details = 1
              Toast.success(res.msg)
          }).catch(err =>{
              console.log(err)
          })
      },
      cancel(){
          this.$api.CancelCollection(
              this.goods.id,
              this.details = 0
          ).then(res =>{
              console.log(res)
              Toast.success(res.msg)
          }).catch(err =>{
              console.log(err)
          })
      },
      getCollection(){
    //       IsCollection(id) { //查询商品是否已收藏11
    //     return http.post('/isCollection', {
    //         id //商品的id
    //     })
    // },
          this.$api.IsCollection(this.details.id).then(res =>{
              this.details = res.isCollection
          }).catch(err =>{
              console.log(err)
          })
    },
  },
  mounted() {
    this.getCollection()
    console.log(this.details)
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .maintext{
        display: flex;
        flex-direction: column;
        margin-top:20px;
        width:90vw;
        .price{
            margin-top:5px;
            color: red;
        };
        .amount{
            margin-top:30px;
            width:90vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color:gray;
            .collection{
                display: flex;
                align-items: center;
            }
        };
        .shop{
            margin-top:30px;
             .custom-title {
                margin-right: 4px;
                vertical-align: middle;
            }
        };
        
    }
</style>
<template>
  <div class='maintext'>
    <div class='name'>
      {{this.details.name}}
    </div>
    <div class='price'>
      ￥{{this.details.present_price}}
    </div>
    <div class='amount'>
        <div>运费:{{this.details.__v}}</div>
        <div>剩余:{{this.details.amount}}</div>
        <div class='collection'>
            <div class='collect'>收藏:</div>
            <van-icon name="like-o" color="red" size="24px"/>
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
export default {
  name: '',
  props:{
      details:{
          type:Object
      },
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {
      getCollection(){
          this.$api.IsCollection().then(res =>{
              console.log(res)
          }).catch(err =>{
              console.log(err)
          })
      }
  },
  mounted() {
      this.getCollection()
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
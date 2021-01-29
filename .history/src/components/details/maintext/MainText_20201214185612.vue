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
            <div class='collect'>取消收藏:</div>
            <van-icon name="like" color="red" size="24px"/>
        </div>
    </div>
    <div class='shop'>
        <van-cell title="单元格" icon="shop-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
            <van-icon name="search" class="search-icon" />
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
      }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
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
             .custom-title {
                margin-right: 4px;
                vertical-align: middle;
            }

            .search-icon {
                font-size: 24px;
                line-height: inherit;
            }
        }
    }
</style>
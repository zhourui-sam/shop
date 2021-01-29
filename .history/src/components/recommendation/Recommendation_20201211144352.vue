<template>
  <div class='contain'>
    <van-cell-group>
      <van-cell title="商品推荐"/>
    </van-cell-group>
      <div class='goods'>
        <div v-for="(item,index) in recommendation" :key="index" class='box'>
            <img v-lazy='item.image' class='img'>
            <div class='name'>{{item.goodsName}}</div>
            <div class='money'>
                <div class='mallPrice'>￥{{item.mallPrice}}</div>
                <div class='price'>{{item.price}}</div>
            </div>
            <div class='btn'>
                <div class='cars'>
                    <van-icon name="cart" color="white" size="20px"/>
                </div>
                <div class='particulars'></div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      recommendation:{
          type:Array
      }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {
      console.log(this.recommendation)
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .contain{
        width:100vw;
        height:300px;
        margin-top:50px;
        overflow: hidden;
        .goods{
            width:3000px;
            display: flex;
            
            .box{
                width:150px;
                height:150px;
                .img{
                    width:150px;
                    height:150px;
                };
                .name{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                };
                .money{
                    display: flex;
                    width:100%;
                    justify-content: center;
                    align-items: center;
                    .price{
                        color:gray;
                        font-size: 15px;
                        margin-left: 5px;
                        text-decoration: line-through;
                    }
                };
                .btn{
                    .cars{
                        width:35px;
                        height:35px;
                        background: rgb(254, 202, 58);
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                    }
                }
            }
        }
    }
</style>
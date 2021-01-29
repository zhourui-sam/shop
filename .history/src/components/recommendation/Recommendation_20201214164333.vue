<template>
  <div class='contain'>
    <van-cell-group>
      <van-cell title="商品推荐"/>
    </van-cell-group>
    <div class='container' ref='container'>
      <div class='goods'>
        <div v-for="(item,index) in recommendation" :key="index" class='box'>
            <img v-lazy='item.image' class='img' @click="Detail(item)">
            <div class='name'>{{item.goodsName}}</div>
            <div class='money'>
                <div class='mallPrice'>￥{{item.mallPrice}}</div>
                <div class='price'>{{item.price}}</div> 
            </div>
            <div class='btn'>
                <div class='carts'>
                    <van-icon name="cart" color="white" size="25px" class='pic'/>
                </div>
                <div class='particulars' @click="Detail(item)">
                    查看详情
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
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
  methods: {
      Detail(val){
      this.$router.push({
        name:'details',
        params:{val}
      })
    },
  },
  mounted() {
      new BScroll(this.$refs.container,{
          scrollX: true,
          click:true
      })
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
        .container{
            overflow: hidden;
             width:100vw;
             display: flex;
            .goods{
                display: flex;
                flex: 1;
                .box{
                    width:150px;
                    height:250px;
                    align-items: center;
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
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .carts{
                            width:35px;
                            height:35px;
                            background: rgb(254, 202, 58);
                            border-top-left-radius: 5px;
                            border-bottom-left-radius: 5px;
                            text-align: center;
                            .pic{
                                margin-top:5px;
                            }
                        };
                        .particulars{
                            color: white;
                            text-align: center;
                            width:85px;
                            height:35px;
                            background: rgb(255, 76, 56);
                            line-height: 35px;
                            border-top-right-radius: 5px;
                            border-bottom-right-radius: 5px;
                        }
                    }
                }
            }
        }
    }
</style>
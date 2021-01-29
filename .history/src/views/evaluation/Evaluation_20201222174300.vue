<template>
  <div>
    <van-nav-bar title="评价中心" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='top-pic'>
        <img src="../../assets/evaluate.jpg">
    </div>
    <div class='contain'>
        <van-tabs v-model="active" class='title'>
            <van-tab title="待评价">
                <div class='box'>
                    <div class='good' v-for="(item,index) in list" :key="index">
                        <div class='pic'>
                            <img :src="item.image_path">
                        </div>
                        <div class='text'>
                            <div class='name'>{{item.name}}</div>
                            <div class='btn'>
                                <van-button round plain type="danger" size="small" @click="evaluate(item)" class='btn-box'>
                                        <van-icon name="chat" size="14" />评价晒单
                                </van-button>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="已评价">内容 2</van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
import { Button } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
        active: 0,
        list:[]
    }
  },
  components: {},
  methods: {
      onClickLeft(){
          this.$router.go('-1')
      },
      getevaluation(){
          this.$api.AlreadyEvaluated().then(res =>{
              console.log(res)
          })
      },
      getToevaluation(){
          this.$api.TobeEvaluated().then(res =>{
              this.list = res.data.list
              console.log(res.data.list)
          })
      },
      evaluate(item){
          this.$router.push({
              name:'evaluate',
              query:{
                  good : item
              }
          })
      }
  },
  mounted() {
      this.getevaluation()
      this.getToevaluation()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .top-pic{
        width:100vw;
        height:200px;
        img{
            width:100vw;
            height:200px;
        }
    }
    .contain{
        width:100vw;
        background: white;
        display: flex;
        margin-top:-20px;
        flex-direction: column;
        align-items: center;
        .title{
            width:90vw;
            box-shadow: 0 0 5px;
            .box{
                width:90vw;
                margin-top: 10px;
                .good{
                    width:90vw;
                    display: flex;
                    border-bottom: 1px solid rgb(238, 238, 238);
                    align-items: center;
                    justify-content: space-around;
                    .pic{
                        width:100px;
                        height:100px;
                        img{
                            width:100px;
                            height:100px;
                        }
                    }
                    .text{
                        width:250px;
                        font-size: 14px;
                        .name{
                            width:250px;
                            height:40px;
                        }
                        .btn{
                            width:100px;
                            margin-top:5px;
                            margin-left:160px;
                            .btn-box{
                                line-height: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template>
  <div class='contain'>
    <div class='title'>
        <div class='floor'>1F</div>
        <div class='name'>{{this.floorname1}}</div>
    </div>
    <div class='box'>
        <div class='first'>
            <img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180109_6316.jpg" class='img1'>
        </div>
        <div class='other'>
            <img src='http://images.baixingliangfan.cn/homeFloor/20180407/20180407180151_6180.jpg' class='pic'>
        </div>
        <div class='other third'>
            <img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180217_3970.jpg" class='pic'>
        </div>
        <div class='other fourth'>
            <img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180257_2378.jpg" class='pic'>
        </div>
        <div class='other fifth'>
            <img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180427_8557.jpg" class='pic'>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      floor1:{
        type:Array
      },
      floorname1:{
        type:String
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
    .contain{
        width:100%;
        height:250px;
        position: relative;
        top:30px;
        .title{
            width:100%;
            height:40px;
            display: flex;
            align-items: center;
            justify-content: center;
            .floor{
                width:30px;
                height:30px;
                background: red;
                color:white;
                text-align: center;
                line-height: 30px;
                border-radius: 50%;
            };
            .name{
                height:30px;
                line-height: 30px;
                color:red;
                margin-left: 5px;
            };
        }
        .box{
            width:100%;
            height:300px;
            background: skyblue;
            display: flex;
            flex-wrap: wrap;
            .first{
                width:50%;
                height:200px;
                .img1{
                    width:100%;
                    height:200px;
                }
            };
            .third{
                position: relative;
                left:200px;
                top:-100px;
            };
            .fourth{
                position: relative;
                left:-210px;
            };
            .fifth{
                position: relative;
                left:200px;
                top:-100px;
            }
            .other{
                width:50%;
                height:100px;
                .pic{
                    width:100%;
                    height:100px;
                }
            }
        }
    }
</style>
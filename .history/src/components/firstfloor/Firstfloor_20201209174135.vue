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
            .box{
                width:100%;
                height:210px;
                background: skyblue;
                .first{
                    width:50%;
                    height:140px;
                }
            }
        }
    }
</style>
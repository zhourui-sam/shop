<template>
  <div class='contain'>
    <div class='title'>
        <div class='floor'>1F</div>
        <div class='name'>{{this.floorname1}}</div>
    </div>
    <div class='box' v-for="(item,index) in this.floor1" :key="index">
        <div class='first' @click="Detail(item)">
            <img :src="floor1[0]['image']" class='img1'>
        </div>
        <div class='other second' @click="Detail(item)">
            <img :src="floor1[1]['image']" class='pic'>
        </div>
        <div class='other third' @click="Detail(item)">
            <img :src="floor1[2]['image']" class='pic'>
        </div>
        <div class='other fourth' @click="Detail(item)">
            <img :src="floor1[3]['image']" class='pic'>
        </div>
        <div class='other fifth' @click="Detail(item)">
            <img :src="floor1[4]['image']" class='pic'>
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
  methods: {
      Detail(item){
      this.$router.push({
        name:'details',
        query:{id:this.item[index].goodsId}
      })
    },
  },
  mounted() {
  },
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
            display: flex;
            flex-wrap: wrap;
            position: relative;
            top:10px;
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
                left:205px;
                top:-100px;
            };
            .fourth{
                position: relative;
                left:-205px;
            };
            .fifth{
                position: relative;
                left:205px;
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
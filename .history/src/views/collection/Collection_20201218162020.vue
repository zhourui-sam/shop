<template>
  <div>
    <van-nav-bar title="我的收藏" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='container'>
      <div class='main' v-if="this.data.list === 0">
        <div class="none">
          暂无收藏~~~
        </div>
        <van-button type="primary" class='gobuy' @click="gotobuy">去购物~</van-button>
      </div>
      <div class='boxer' v-else>
        <div class="box" v-for="(item,index) in this.data" :key="index">
          <div class='pic'>
            <img :src="item.image_path">
          </div>
          <div class='contain'>
            <div class='name'>{{item.name}}</div>
            <div class='price'>￥{{item.present_price}}</div>
            <div class='cancel'><van-icon name="close" @click="cancel"/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
        data:[],
    }
  },
  components: {},
  methods: {
    onClickLeft(){
        this.$router.go('-1')
    },
    gotobuy(){
        this.$router.push('/')
    },
    getcollection(){
        this.$api.GetCollection().then(res =>{
            console.log(res.data.list)
            this.data = res.data.list
        }).catch(err =>{
            console.log(err)
        })
    },
    
    cancel(){
        Dialog.confirm({
            title: '提示',
            message: '是否确认删除收藏',
            })
            .then(() => {
                this.$api.CancelCollection(
                    this.data._id,
                    ).then(res =>{
                        console.log(res)
                        Toast.success(res.msg)
                    }).catch(err =>{
                        console.log(err)
                    })
            })
            .catch(() => {
            });
      },
  },
  mounted() {
      this.getcollection()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.container{
  width:100vw;
  .main{
    width:100vw;
    height:50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: gray;
  };
  .box{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:100vw;
    height:90px;
    border-bottom: 1px solid rgb(245, 245, 245);
    .pic{
        width:80px;
        height:80px;
        border: 1px solid rgb(245, 245, 245);
        img{
            width:80px;
            height:80px;
        }
    };
    .contain{
        width:70vw;
        height:80px;
        .name{
            height:42px;
        }
        .price{
            width:100px;
            color: red;
            position: relative;
            top:10px;
        }
        .cancel{
            width:50px;
            position: relative;
            left:250px;
        }
    }
  }
  .gobuy{
      position: relative;
      top:50px;
  }
}
</style>
<template>
  <div>
    <van-nav-bar title="评价中心" :fixed="true" left-arrow @click-left="onClickLeft" :placeholder='true'/>
    <div class='top'>
        <div class='pic'>
            <img :src="good.image_path">
        </div>
        <div class='text'>
            <div class='text-name'>商品评分</div>
            <div class='score'><van-rate v-model="value" :size="25"/></div>
        </div>
    </div>
    <div class='middle'>
        <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        placeholder="说说你的购买感受吧~~"
        show-word-limit/>
    </div>
    <div class='bottom'>
        <div class='checkname'>
            <van-checkbox v-model="checked" icon-size="24px">匿名评价</van-checkbox>
        </div>
        <div class='submit'>
            <van-button type="primary" size="large" @click="Submit">提交</van-button>
        </div>
    </div>
  </div>
</template>

<script>
import { Rate } from 'vant'
import { Checkbox, CheckboxGroup } from 'vant'
export default {
  name: '',
  props:{},
  data () {
    return {
        good:{},
        value: 0,
        checked: false,
        message:'',
    }
  },
  components: {},
  methods: {
      Getdata(){
          this.good = JSON.parse(this.$route.query.good)
          console.log(this.good)
      },
      onClickLeft(){
          this.$router.go('-1')
      },
      Submit(){
          this.$api.GoodsOne({
            id : this.good.cid,
            rate : this.value,
            content : this.message,
            anonymous : this.checked,
            _id : this.good._id,
            order_id, //商品的order_id
            image //[]数组
          })
      }
  },
  mounted() {
      this.Getdata()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top{
    width:100vw;
    height:120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(238, 238, 238);
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
        height:120px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
}
.bottom{
    margin-top:20px;
    .checkname{
        margin-left:10px;
        font-size: 20px;
    }
    .submit{
        margin-top:30px;
    }
}
</style>
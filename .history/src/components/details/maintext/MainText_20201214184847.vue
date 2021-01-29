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
        <div>取消收藏:<van-icon name="like" color="red" size="24px"/></div>
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
            color:gray;
        }
    }
</style>
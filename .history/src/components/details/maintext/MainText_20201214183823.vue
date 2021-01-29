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
        <div>收藏:<van-icon name="like-o"/></div>
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
        margin-left:20px;
        margin-top:20px;
        width:90vw;
        .price{
            margin-top:5px;
            color: red;
        };
        .amount{
            display: flex;
            justify-content: space-between;
        }
    }
</style>
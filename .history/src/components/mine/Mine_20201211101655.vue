<template>
  <div>
    <div class='title'>会员中心</div>
    <user></user>
    <orderForm></orderForm>
  </div>
</template>

<script>
import user from './user/User'
import orderForm from './orderform/OrderForm'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {user,orderForm},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
  .title{
    width:100vw;
    height:50px;
    position: fixed;
    top:0;
    left:0;
    background: white;
    text-align: center;
    line-height: 50px;
  }
 
</style>
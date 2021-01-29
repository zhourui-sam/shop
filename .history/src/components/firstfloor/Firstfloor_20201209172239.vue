<template>
  <div class='contain'>
    <div class='title'>
        <div class='floor'>1F</div>
        <div class='name'>休闲食品</div>
    </div>
    <div class='box'>
        <div class='first'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      firstfloor:{
          type:Array
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
        .title{
            width:100%;
            height:40px;
            display: flex;
            .floor{
                width:30px;
                height:30px;
                background: red;
                color:white;
                text-align: center;
                line-height: 30px;
                border-radius: 50%;
            }
        }
    }
</style>
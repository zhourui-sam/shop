<template>
  <div>
    <div class='top'>
        <van-icon name="arrow-left" class='return'/>
        <div class='title'>个人资料</div>
    </div>
    <div class='main'>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {
      this.$api.QueryUser().then(res =>{
          console.log(res)
      }).catch(err =>{
          console.log(err)
      })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .top{
        width:100vw;
        height:50px;
        border-bottom: 1px solid gray;
        position: fixed;
        top:0;
        left:0;
        align-items: center;
        display: flex;
        justify-content: center;
        .return{
            font-size: 14px;
            position: absolute;
            left:10px;
            color: rgb(55, 152, 250);
        };
    }
</style>
<template>
  <div>
    <div class='title'>会员中心</div>
    <div class='user'>

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
    background: teal;
    text-align: center;
    line-height: 50px;
  }
  .user{
    width:100vw;
    height:500px;
  }
</style>
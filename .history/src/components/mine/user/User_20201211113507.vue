<template>
  <div>
    <div class='user'>
      <div class='setting'>
        <van-icon name="setting" size='20' color='white'/>
      </div>
      <div class='pic'>
        <van-image
        fit="cover"
        round
        width="5rem"
        height="5rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
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
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .user{
    width:100vw;
    height:250px;
    background: rgb(227, 12, 123);
    margin-top:50px;
    .setting{
        position: relative;
        top:10px;
        left:92vw;
    }
  }
</style>
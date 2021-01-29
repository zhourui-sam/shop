<template>
  <div class='bg'>
    <div class='contain'>
      <div class='title'></div>
      <van-cell-group>
        <van-field v-model="value" placeholder="USERNAME" class='form'/>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value" placeholder="PASSWORD" class='form'/>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value" label="手机号码" placeholder="仅注册需要" class='form'/>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value" label="短信验证码" placeholder="仅注册需要" class='form msg'/>
        <van-button size="small" type="primary">发送验证码</van-button>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value" label="验证码" placeholder="请输入验证码" class='form'/>
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
        value:''
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


</style>
<template>
  <div>
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名" />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名" />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="value" label="手机号码" placeholder="请输入用户名" />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="value" label="短信验证码" placeholder="请输入用户名" />
    </van-cell-group>
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
<template>
  <div class='bg'>
    <div class='contain'>
      <van-cell-group>
        <van-field v-model="value" placeholder="USERNAME" class=''/>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value" placeholder="PASSWORD" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value" label="手机号码" placeholder="仅注册需要" />
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value" label="短信验证码" placeholder="仅注册需要" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value" label="验证码" placeholder="请输入验证码" />
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
<template>
  <div>
    <div class='detail'>
        <van-tabs v-model="active">
            <van-tab title="商品详情">
                <div v-for="(item,index) in this.details" :key="index">
                    {{item.detail}}
                </div>
            </van-tab>
            <van-tab title="商品评论">
                
            </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    details:{
        type:Object
    },
  },
  data () {
    return {
        active: 0,
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
    .detail{
        margin-top:30px;
    }
</style>
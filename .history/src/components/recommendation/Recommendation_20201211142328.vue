<template>
  <div class='contain'>
    <div class='goods'>
        <div v-for="(item,index) in recommendation" :key="index" class='box'>
            <img v-lazy='item.image' class='img'>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      recommendation:{
          type:Array
      }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {
      console.log(this.recommendation)
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
    .contain{
        width:100vw;
        height:300px;
        background: tomato;
        margin-top:50px;
        overflow: hidden;
    }
</style>
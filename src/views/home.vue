<template>
  <div class="d">
    我是home页213面
    <p class="jha" @click="dds">212121</p>
  </div>
</template>

<script>
import propxApi from '@/api/utils/index'
export default {
  name: 'home',
  props: {
    msg: String
  },
  data() {
    return {
      count: 6339999
    }
  },
  created() {
    this.dds2({dd:2}).then((res) => {
      console.log(`--DEBUG--res`,res)
    })
    this.login1({dd:999}).then((res) => {
      console.log(`--DEBUG--res`,res)
    })
  },
  methods: {
    ...propxApi('home',['dds2','login1','ddd']),
    dd() {
      this.login1()
    },
    dds() {
      this.$router.push("/test")
    }
  }
}
</script>
<style lang="scss" scoped>
.d {
  .jha {
    color: red;
  }
}
</style>

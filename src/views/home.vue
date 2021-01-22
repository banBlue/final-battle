<template>

  <div class="d">
    我是home页面
    <p class="jha"></p>
  </div>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  },
  data() {
    return {
      count: 633
    }
  },
  methods: {
    dd() {
      let d
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

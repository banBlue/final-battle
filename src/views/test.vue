<template>
  <div class="dd">我是Test212121页111面
    <no-t>fds2112</no-t>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    msg: String
  },
  data() {
    return {
      count: 6
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style>
  .dd {
    color:red;
  }
</style>

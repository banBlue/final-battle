<template>
  <div class="dd">我是Test212121页111面
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
    this.login1({dd:999}).then((res) => {
      console.log(`--DEBUG--res`,res)
    })
  },
  methods: {
    // ...propxApi('home',['dds2','login1','ddd'])
  }
}
</script>

<style>
  .dd {
    color:red;
  }
</style>

<template>
  <h3>MyComponent</h3>
  <!-- 使用axios -->
  <p>{{ msg }}</p>
  <button @click="getData">获取数据</button>
  <p>{{ data }}</p>

  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        msg: 'axios',
        data: ''
      }
    },
    methods: {
      getData() {
        axios.get("http://www.baidu.com").then((res) => {
          this.data = res.data
        })
      }
    }
  }
  </script>

  <style scoped>

  </style>
<template>
    <h1>组件的生命周期</h1>
    <p>{{ msg }}</p>
    <button @click="updateHandle">更新数据</button>
  </template>
  
  /**
  * 生命周期函数
  *   创建期  beforeCreate  created
  *   挂在期  beforeMount  mounted
  *   更新期  beforeUpdate  updated
  *   销毁期  beforeUnmount unmounted
  */
  
  <script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },
    methods: {
      updateHandle(){
        this.msg = '更新数据'
      }
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    beforeUnmount() {
      console.log('beforeUnmount')
    },
    unmounted() {
      console.log('unmounted')
    }
  }
  </script>
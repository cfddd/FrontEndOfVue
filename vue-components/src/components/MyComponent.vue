<template>
    <div class="container">{{msg}}</div>
  </template>
  
  <script>
  export default{
    data(){
      return{
        msg:"组件基础组成"
      }
    }
  }
  </script>
  <!-- scoped:让当前样式只在当前组件中生效 -->
  <style scoped>
  
  .container{
    font-size: 30px;
    color: yellowgreen;
  }
  
  </style>
<!-- 属性绑定绑定不能用{{  }}，可以用bind -->
<template>
    <div v-bind:id="n" v-bind:class="msg">双大括号不能在HTML attributes中使用。想要响应式地绑定一个attribute，应该使用v-bind指令</div>
    <div :id="n" :class="msg">简写</div>
    <button :disabled="flag">按钮</button>
    <div v-bind="object">绑定结构体</div>
    
  </template>
  
  <script>
  export default{
    data(){
      return{
        msg:"CFD",
        n:10,
        flag:true,
        object:{
          class:"cfd",
          id:20,
        }
      }
    }
  }
  </script>
  
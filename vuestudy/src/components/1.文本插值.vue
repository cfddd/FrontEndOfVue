
<template>
    <p>cfd</p>
    <!-- 文本插值,最基本的数据绑定形式是文本插值，它使用的是"Mustache"语法(即双大括号): -->
    <p>{{ msg }}</p>
    
    <!-- 使用JavaScript表达式,每个绑定仅支持单一表达式，也就是一段能够被求值的JavaScript代码。一个简单的判断方法是是否可以合法地写在return后面 -->
    <p>{{ n + 100 }}</p>
    <p>{{ flag?"YES":"NO" }}</p>
    <p>{{ message.split("").reverse().join("") }}</p>
    <!-- <p>{{ var sb = 100 }}</p> -->
  
    <!-- 原始html -->
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
  </template>
  
  <script>
  export default{
    data(){
      return{
        msg:"CFD",
        n:10,
        flag:true,
        message:"我是CFDDFC",
        rawHtml:"<a href='https://cfddd.github.io/'>我是CFDDFC</a>"
      }
    }
  }
  </script>
  
<template>
  <!-- 3.显示组件 -->
  <!-- 在HTML中，标签名是不区分大小写的。
    这意味着<my-component/>和<MyComponent/>被视为相同的标签。
    然而，在Vue.js中，最好使用短横线连接的形式（kebab-case）给自定义组件命名
    比如<my-component/>，
    以区分它们和内置的HTML标签，并提高代码的可读性。 -->
  <MyComponent/>
  <my-component/>
</template>

<script>
//1.引入组件
import MyComponent from './components/MyComponent.vue'

export default{
  //2.注入组件
  components:{
    MyComponent
  }
}
</script>

<style>

</style>

import { createApp } from 'vue'
import App from './App.vue'
import Header from './pages/Header.vue'

const app = createApp(App)

// 在这中间写全局组件的注册
// 全局注册虽然很方便，但有以下几个问题:
// 全局注册，但并没有被使用的组件无法在生产打包时被自动移除(也叫'tree-shaking")。如果你全局注册了一个组件，即使它并没有被实际使用，它仍然会出现在打包后的JS文件中
// 全局注册在大型项目中使项目的依赖关系变得不那么明确。在父组件中使用子组件时，不太容易定位子组件的实现。和使用过多的全局变量一样，这可能会影响应用长期的可维护性

app.component("Header", Header)

app.mount('#app')

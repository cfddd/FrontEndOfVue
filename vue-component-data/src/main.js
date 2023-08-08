
import { createApp } from 'vue'

import App from './App.vue'

// app:Vue的示例对象
// 在一个Vue项目中,有且只有一个Vue实例对象
// app:根组件
const app = createApp(App)

app.provide("golabData", {
    name: "golab",
})

//挂载应用,到容器当中
app.mount('#app')

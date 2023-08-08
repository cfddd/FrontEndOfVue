<template>
  
  <!-- <Mycomponent/>
  <Usercomponent/> -->
  <ComponentA/>
  <ComponentB/>
  <p></p>
  <KeepAlive>  
    <component :is="tabComponent"></component>
  </KeepAlive>

  <button @click="changeHandle">切换组件</button>
</template>

<script>
import Mycomponent from "./components/Mycomponent.vue";
import Usercomponent from "./components/Usercomponent.vue";
// import ComponentB from "./components/ComponentB.vue";
import ComponentA from "./components/componentA.vue";

import {defineAsyncComponent} from "vue";
//异步加载组件
const ComponentB = defineAsyncComponent(() => 
  import("./components/ComponentB.vue")
)
export default {
  data(){
    return{
      // tabComponent:ComponentA
      // 必须是字符串
      tabComponent:"ComponentA"
    }
  },
  components: {
    Mycomponent,
    Usercomponent,
    ComponentB,
    ComponentA
  },
  methods:{
    changeHandle(){
      // 必须是字符串
      this.tabComponent = this.tabComponent == "ComponentA" ? "ComponentB" : "ComponentA"
    }
  }
}
</script>
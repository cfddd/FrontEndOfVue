<template>
  <!-- <componentEvent /> -->
  <!-- <Main/> -->
  <!-- <componentA/> -->
  <AttrComponents class="attr-container"/>
  <!-- 当一个组件以单个元素为根作渲染时，透传的attribute 会自动被添加到根元素上 -->
</template>

<script>
import ComponentEvent from "./components/componentEvent.vue";
import Main from "./components/Main.vue"
import componentA from "./components/componentA.vue";
import AttrComponents from "./components/AttrComponents.vue";

export default {
  data() {
    return {

    }
  }, 
  components: {
    ComponentEvent,
    Main,
    componentA,
    AttrComponents
  }
}
</script>

<style></style>
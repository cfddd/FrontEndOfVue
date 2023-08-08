<template>
  <!-- <SlotsBase>
    <div>
      <h3>插槽标签</h3>
      <p>插槽内容</p>
    </div>
  </SlotsBase> -->
  
  <!-- <SlotsTow>
    <template v-slot:header>
      <h3>slot作用域范围,插槽内容</h3>
    </template>

    <template #main>
    <h3>{{ msg }}简写是#号</h3>
    </template>
  </SlotsTow> -->

  <SlotsAttr>

    <template #header = "slotProps">
      <h3>{{ currentTest }}-{{ slotProps.msg }}</h3>
    </template>
    <template #main = "slotProps">
      <h3>{{ slotProps.job }}-</h3>
    </template>

  </SlotsAttr>
</template>

<script>

import SlotsBase from './components/SlotsBase.vue'
import SlotsTow from './components/SlotsTow.vue'
import SlotsAttr from './components/SlotsAttr.vue'
export default {
  components: {
    SlotsBase,
    SlotsTow,
    SlotsAttr
  },
  data(){
    return {
      msg:"动态插槽内容",
      currentTest:"测试内容"
    }
  }
}

</script>

<style>

</style>
<template>
  <h2>祖宗</h2>
  <p>{{ golabData }}</p>
  <Son title="祖宗的财产"/>
  
</template>

<script>
import Son from './components/Parent.vue'
export default {
  components: {
    Son
  },
  inject: ['golabData'],
  // provide: {
  //   msg: '祖宗的财产'
  // },


  // provide和inject只能由上到下的传递，不能反向传递

  provide(){
    return{
      msg: this.msg
    }
  },
  data() {
    return {
      msg: 'new data'
    }
  }
}
</script>
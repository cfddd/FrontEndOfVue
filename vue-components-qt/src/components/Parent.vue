<template>
    <h3>Parent</h3>
    <!-- v-bind传递 -->
    <Child title="Parent数据" :demo="msg" :age="age" :names="names" :userInfo="userInfo"/>
</template>

<script>
import Child from './Child.vue'
export default {
    data(){
        return{
            //传递非字符串类型,需要用v-bind
            msg:"Parent数据!!!",
            age:22,
            names:["zhangsan","lisi","wangwu"],
            userInfo:{
                name:"zhangsan",
                age:22,
                gender:"男"
            }
        }
    },
    components:{
        Child
    }
}
</script>

<style>

</style>
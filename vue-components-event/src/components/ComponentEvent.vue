<template>
    <h3>事件组件Parent</h3>
    <Child @someEvent="getHandle"/>
    <p>父元素:{{ msg }}</p>
</template>

<script>
import Child from "./Child.vue";
export default{
    data(){
        return{
            msg:"事件组件Parent",
        }
    },
    components:{
        Child
    },
    methods:{
        getHandle(data){
            console.log("触发了",data)
            this.msg = this.msg + data
            console.log(this.msg)
        }
    }
}
</script>

<style>

</style>
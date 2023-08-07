<template>
    <h3>侦听器</h3>
    <p>{{ msg }}</p>
    <button @click="updateData">修改数据</button>
</template>
<script>
export default {
    data(){
        return{
            msg:"hello vue"
        }
    },
    methods:{
        updateData(){
            this.msg = "CFD"
        }
    },
    watch:{
        /*
        newVal:改变之前的值
        oldVal:改变之后的值
        函数名与侦听的属性保持一致
        */
        msg(newVal,oldVal){
            //数据变化，自动触发
            console.log(newVal,oldVal)
        }
    }
}
</script>
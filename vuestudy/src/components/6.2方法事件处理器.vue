<template>
    <h1>2.方法事件处理器</h1>
    <button @click="addCount">简约写法ADD</button>
    <p>{{ count }}</p>
</template>
<script>
    export default {
        data(){
            return {
                count:0
            }
        },
        methods:{
            addCount(){
                // 读取到data数据里面的方案
                this.count++;
                console.log("clicked!!!");
            }
        }
    }
</script>
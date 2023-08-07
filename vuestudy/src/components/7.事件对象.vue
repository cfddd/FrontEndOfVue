<template>
    <h1>获取事件对象</h1>
    <button @click="addCount($event)">ADD</button>
    <p>{{ count }}</p>

    <h2>传递参数</h2>
    <button @click="addCount('Hello!')">ADD</button>
    <p>{{ count }}</p>
    <button @click="getNamehandler(item,$event)" v-for="(item,index) of names" :key="index">{{item}}</button>
</template>
<script>
    export default {
        data(){
            return {
                count:0,
                names:["cfd","CFD","cfddfc","CFDDFC"],
            }
        },
        methods:{
            addCount(e){
                // vue中event对象，就是原生的js对象
                // console.log(e)
                e.target.innerHTML = "ADD" + this.count
                this.count ++
            },
            addCount(msg){
                //传递参数
                console.log(msg)
                this.count ++
            },
            getNamehandler(item,e){
                //传递参数，同时传递了event对象
                console.log(item)
                console.log(e)
            }
        }
    }
</script>
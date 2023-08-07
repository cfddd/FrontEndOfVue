<template>
    <h3>事件修饰符</h3>
    <a @click.prevent="clickHandler" href="https://cn.vuejs.org/guide/essentials/event-handling.html">事件修饰符，阻止默认事件</a>

    <p></p>
    <div @click="clickDiv">
        <p @click.stop="clickP">测试冒泡</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            clickHandler(e){
                //阻止默认事件
                // e.preventDefault();
                console.log("click")
            },
            clickDiv(){
                console.log("div")
            },
            clickP(e){
                //阻止事件冒泡,不在出发父click
                //冒泡的意思是，阻止事件从内往外触发
                // e.stopPropagation();
                console.log("p")
            }
        }
    }
</script>
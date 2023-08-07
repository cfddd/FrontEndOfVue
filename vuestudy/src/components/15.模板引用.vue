<template>
    <div ref="container" class="container">{{ content }}</div>
    
    <input type="text" ref="username">
    
    <button @click="getElementHandle">获得数据</button>
</template>

/** 
 * 虽然Vue的声明性渲染模型为你抽象了大部分对DOM的直接操作
 * 但在某些情况下，我们仍然需要直接访问底层DOM元素
 * 要实现这一点，我们可以使用特殊的ref attribute
 *
 * 没有特殊的需求，不要使用DOM
 *
 * 内容改变:{{ 模板语法 }}
 * 属性改变:v-bind:指令
 * 事件: v-on:click
 */

<script>
export default {
    data(){
        return {
            content: 'hello vue'
        }
    },
    methods:{
        getElementHandle(){
            // innerHTML:原生JS的属性
            this.$refs.container.innerHTML = "CFD";
            // 操作DOM获取数据
            console.log(this.$refs.username.value);
        }
    }
}
</script>
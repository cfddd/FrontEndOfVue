<template>
    <h1>1.内联事件处理器</h1>
    <button v-on:click="count++">ADD</button>
    <p>{{ count }}</p>

    <button @click="count++">简约写法ADD</button>
    <p>{{ count }}</p>
</template>
<script>
    export default {
        data(){
            return {
                count:0
            }
        }
    }
</script>
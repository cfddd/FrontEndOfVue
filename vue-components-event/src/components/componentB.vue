<template>
    <h3>componentB</h3>
    <p>{{title}}</p>
    <p>{{ onEvent("你好") }}</p>
</template>

<script>
export default{
    data(){
        return{
            
        }
    },
    props:{
        title:String,
        onEvent:Function
    }
}
</script>
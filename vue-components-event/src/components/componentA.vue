<template>
    <h3>componentA</h3>
    <componentB :title="title" :onEvent="dataFn"/>
    <p>{{ data }}</p>
</template>

<script>

import componentB from './componentB.vue';

export default{
    data(){
        return{
            title : "标题",
            data:""
        }
    },
    components:{
        componentB
    },
    methods:{
        dataFn(data){
            this.data=data
            console.log(data)
            
        }
    }
}
</script>
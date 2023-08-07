<template>
    <h3>Class绑定</h3>
    <p :class="myClass">class绑定</p>
    <p :class="{ 'active':isActive,'text-danger':isError }">多个class绑定，使用逗号分隔</p>
    <p :class="classObject">用对象替换多个class绑定对象</p>
    <p :class="[isActive?'active':'text-danger']">三目运算符绑定class</p>
    <p :class="[isActive?'active':'',{ 'text-danger':isError}]">混合绑定class</p>
</template>
<script>
export default {
    data(){
        return {
            myClass:"myClass",
            isActive:true,
            isError:true,
            classObject:{
                'active':true,
                'text-danger':true
            },
            classArray:['active','text-danger']
        }
    }
}
</script>

<style>

.active{
    color:red;
}
.text-danger{
    font-size: 25px;
}

</style>
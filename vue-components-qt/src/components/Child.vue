<template>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <p>{{ demo }}</p>
    <p>{{ age }}</p>
    <ul>
        <li v-for="(item, index) in names" :key="index">{{ item }}</li>
    </ul>
    <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p>
    <p>{{ userInfo.gender }}</p>

</template>

<script>
export default {
    data(){
        return{
        }
    },
    // props传递数据,只能从父级传递给子级,不能反过来使用
    props:[
        "title",
        "demo",
        "age",
        "names",
        "userInfo"
    ]
}
</script>

<style>

</style>
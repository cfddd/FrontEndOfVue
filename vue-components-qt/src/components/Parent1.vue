<template>
    <h3>Parent1</h3>
    <Child1 :title="title" :names="names"/>
</template>
<script>
import Child1 from "./Child1.vue";
export default {
    data() {
        return {
            title:"标签",
            names:["张三","李四","王五"]
        };
    },
    components: { Child1 }
}
</script>
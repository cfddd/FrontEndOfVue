<template>
    <h3>slot作用域范围</h3>
    <!-- <slot>没有传递插槽值，那么这里面的内容就是插槽默认值</slot> -->
    <hr>
    <slot name="header">没有传递插槽值，那么这里面的内容就是插槽默认值</slot>
    <hr>
    <slot name="main">没有传递插槽值，那么这里面的内容就是插槽默认值</slot>
</template>

<script>
export default {
    
}
</script>
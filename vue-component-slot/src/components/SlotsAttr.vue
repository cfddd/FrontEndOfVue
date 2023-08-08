<template>
    <h3>插槽补充</h3>
    <slot name = "header" :msg = "childMsg"></slot>
    <slot name = "main" :job="childMsgJ"></slot>
</template>

<script>
export default {
    data(){
        return{
            childMsg:"子组件内容",
            childMsgJ:"CFd"
        }
    }
}
</script>
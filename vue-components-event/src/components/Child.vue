<template>
    <h3>事件组件Child</h3>
    <button @click="clickEventHandle">点击传递数据</button>
</template>

<script>

export default {
    data() {
        return {
            msg:"事件组件Child"
        }
    },
    methods: {
        clickEventHandle() {
            // 自定义事件
            // 在父文件里当成事件使用
            // @someEvent
            this.$emit("someEvent",this.msg)
        }
    }
}
</script>

<style>

</style>
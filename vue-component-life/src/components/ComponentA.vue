<template>
    <h2>ComponentA</h2>
    <p>{{ msg }}</p>
    <button @click="updateData">更新数据</button>
</template>

<script>
export default {
    data() {
        return {
            msg: 'old data'
        }
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    methods: {
        updateData() {
            this.msg = 'updated data'
        }
    }
}
</script>
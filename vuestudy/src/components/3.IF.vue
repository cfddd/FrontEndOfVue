<template>
    <h3>条件渲染</h3>
    <div v-if="flag">能看见我</div>
    <div v-else="flag">能看见我,但是看不到上一条</div>
    <div v-if="type == 'A'">A</div>
    <div v-else-if="type == 'B'">B</div>
    <div v-else>C</div>

    <div v-show="flag">能看见我,"v-show"没有else，是</div>
<!-- v-if vs v-show
veif 是"真实的"按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。
vif也是惰性的:如果在初次渲染时条件值为false，则不会做任何事。条件区块只有当条件首次变为true时才被渲染。
相比之下，v-show简单许多，元素无论初始条件如何，始终会被渲染，只有CSS display属性会被切换。
总的来说，vif有更高的切换开销，而v-show有更高的初始渲染开销。因此，如果需要频繁切换，则使用v.show较好;如果在运行时绑定条件很少改变，则v-if会更合适 -->

</template>

<script>
    export default {
        data(){
            return {
                falg:false,
                type: "D"
            }
        }
    }
</script>
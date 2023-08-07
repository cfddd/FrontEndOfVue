<template>
    <h3>表单输入与绑定</h3>
    <form>
        <!-- 输入与输出实时改变 -->
        <input type="text" v-model="msg">
        <p>{{msg}}</p>
        <!-- 复选框 -->
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{checked}}</label>
        <!-- 修饰符 -->
        <!-- 用v-model.lazylazy，输入与输出不实时改变，失去焦点后才更新改变 -->
        <!-- 默认情况下，v-model 会在每次 input事件后更新数据。你可以添加lazy 修饰符来改为在每次change事件后更新数据 -->

        <input type="text" v-model.lazy="msg">

    </form>

</template>
<script>
export default{
    data(){
        return{
            msg:"hello vue",
            checked:false
        }
    }
}
</script>
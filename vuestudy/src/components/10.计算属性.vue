<template>
    <h3>{{ user.item }}</h3>
    <p>{{ user.skill.length > 0 ? "has":"none" }}</p>
    <p>{{ hasSkill }}</p>
    <p>{{ hasSkill1() }}</p>
</template>
<script>
export default{
    data(){
        return{
            user:{
                item:"计算属性",
                name:"cfd",
                skill:["vue","react","go","gin"],
            }
        }
    },
    // 计算属性
    computed:{
        hasSkill(){
            return this.user.skill.length > 0 ? "has":"none" 
        }
    },
    // 放函数或者方法和上面计算属性实现相同功能
    methods:{
        hasSkill1(){
            return this.user.skill.length > 0 ? "has":"none"
        }
    }
    /*
    计算属性和方法的区别
    1.计算属性是只读的，不可以修改
    2.方法是可以修改的
    3.计算属性和方法都可以放在data中
    适用场景
    计算属性:计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算
    方法:方法调用总是会在重渲染发生时再次执行函数

    */
}

</script>
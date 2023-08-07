<template>
    <h3>Child1</h3>
    <p>{{ title }}</p>
    <p v-for="(item,index) in names" :key="index">{{ item }}</p>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    //props是只读的,不能修改父元素传递过来的数据
    props:{
        title:{
            type:String,
            // 必选项,不传递参数会报错
            required:true
        },
        other:{
            type:[String,Number,Array,Object,Boolean]
        },
        article:{
            type:Number,
            default:0
        },
        names:{
            type:Array,
            // default:[]// 不能这样
            // 工厂模式,要返回一个值
            default(){
                return ["空"]
            }
        }
        // 数字和字符串可以直接default
        // 如果是数组类型,必须
        
    }
}
</script>
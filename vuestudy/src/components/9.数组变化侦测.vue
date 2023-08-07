<template>
    <h3>数组变化侦测</h3>

    <button @click="clickAddNamesHandle">添加数据</button>
    <ul>
        <li v-for="(item,index) in names" :key="index">{{item}}</li>
    </ul>

    <button @click="clickcombineNamesHandle">合并数据</button>
    <h3>数组1</h3>
    <ul>
        <li v-for="(item,index) in names1" :key="index">{{item}}</li>
    </ul>

    <h3>数组2</h3>
    <ul>
        <li v-for="(item,index) in names2" :key="index">{{item}}</li>
    </ul>

</template>
<script>

    export default {
        data(){
            return{
                names:["cfd","CFD","cfddfc","CFDDFC"],
                names1:["cfd","CFD","cfddfc","CFDDFC"],
                names2:["cfd","CFD","cfddfc","CFDDFC"],
            }
        },
        methods:{
            clickAddNamesHandle(){
                //引起UI自动更新
                // this.names.push("CFDDFC");
                // 不会引起UI自动更新
                this.names.concat(["CFDDFC"]);//数组拼接
                // log.console.log(this.names.concat(["CFDDFC"]));
                // 想要使用可以如下操作
                this.names = this.names.concat(["CFDDFC"]);
            },
            clickcombineNamesHandle(){
                this.names1 = this.names1.concat(this.names2);
            }
        }
    }

</script>
<template>
    <h3>列表渲染</h3>
    <p v-for="item in names" :key="item">{{item}}</p>
    
    <p v-for="(item,index) in names">{{item }},{{index}}</p>
    
    <div>
        <p v-for="(name,age,sex) of userInfo">{{ name }},{{ age }},{{ sex }}</p>
    </div>


    <div v-for="item of result" :key="item.id">
        <p>{{item.title}}</p>
        <img :src="item.avator" alt="">
    </div>
    

    
</template>

<script>

export default {
    data(){
        return{
            names:["cfd","CFD","cfddfc","CFDDFC"],
            result: [{
                    "id": 2261677,
                    "title":"鄂尔多斯│感受一座城市的璀璨夜景感受一座城市，除了白日里的车水马龙，喧嚣繁华",
                    "avator":"https://pic.qyer.com/avatar/002/25/77/30/200?v=1560226451",
                },
                {
                    "id" :2261566,
                    "title":"成都这家洞穴暗黑风咖啡厅酷毙了!早c晚A走起成都天气这么热咖啡*人必",
                    "avator":"https://pic.qyer.com/avatar/011/07/08/69/200?V=1572185180",
                },
                {
                    "id": 2261662,
                    "title":"【川西新龙-措卡湖】措卡湖，意为“乱石丛中的黑色海水”，神秘小众原汁原味,深",
                    "avator": "https://pic.qyer.com/avatar/009/88/48/58/200?v=1507386782",
                },
            ],
            userInfo:{
                name:"cfd",
                age:18,
                sex:"男",
            }
        }
    }
}

</script>
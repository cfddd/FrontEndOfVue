<template>
    <h1>组件的生命周期应用</h1>
    <p ref="name">CFDDFC</p>
    <ul>
        <li v-for="(item, index) in banner" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
        </li>
    </ul>
</template>
  
<script>

export default {
    components: {

    },
    beforeMount() {
        console.log(this.$refs.name)
    },
    mounted() {
        console.log(this.$refs.name)
    },
    data() {
        return {
            banner: []
        }
    },
    created() {
        // 模拟网络请求,至少要在created之后才给数据
        // 先渲染数据重要还是先获取数据重要
        // 答案是先渲染数据再获取数据,结构更重要(类似淘宝网下拉先给结构,再给数据)
        this.banner = [
                {
                    "title": "一个人的东京",
                    "content": "东京(Tokyo)是日本国的首都，是亚洲第一大城市，世界第二大城市。全球最大的经济中心之一。东京的著名观光景点有东京铁塔、皇居、国会议事堂、浅草寺、浜离宫、上野公园与动物园",
                },
                {
                    "title": "普罗旺斯的梦",
                    "content": "普罗旺斯(Provence)位于法国东南部，毗邻地中海和意大利，从地中海沿岸延伸到内陆的丘陵地区，中间有大河”Rhone”流过。自古就以靓丽的阳光和蔚蓝的天空，迷人的地中海和心醉",
                },
                {
                    "title": "相约夏威夷之夏",
                    "content": "夏威夷州位于北太平洋中，距离美国本土3,700公里，总面积16,633平方公里，属于太平洋沿岸地区。首府为檀香山。在1778至1898年间，夏威夷也被称为“三明治群岛”(Sandwich Islands)",
                }
            ]
    }
}
</script>
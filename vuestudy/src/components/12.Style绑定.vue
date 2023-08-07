<template>


    <p :style="{color:cativeColor,fontSize:fontSize}">Style绑定1</p>

    <p :style="styleObject">Style绑定2</p>

    <p :style="[styleObject]">Style绑定3</p>


</template>
<script>
    export default {
        data(){
            return{
                cativeColor:"green",
                fontSize:"30px",
                styleObject:{
                    color:"red",
                    fontSize:"30px"
                }

            }
        }
    }
</script>
<template>
    <h2>父亲</h2>
    <Son :title="title"/>
</template>

<script>
import Son from './Child.vue'
export default {
    components: {
        Son
    },
    props: {
        title: {
            type:String
        }
    }
}
</script>
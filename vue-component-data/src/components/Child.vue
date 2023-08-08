<template>
  <h2>儿子</h2>
  <p>{{ title }}</p>
  <p>{{ msg }}</p>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            }
        },
        inject: ['msg'],
    }
</script>
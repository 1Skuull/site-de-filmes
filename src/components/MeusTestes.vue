<template>
    <input type="text" v-model="name">
    <h1>{{name}}</h1>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const name = ref("Janbo")



</script>
<style scoped lang="scss">
input{
    margin-top: 5px;
    background-color: #242424;
    padding: 10px;
    color: white;
    font-size: 20px;
    border: 2px solid white;
    border-radius: 5px;
}

input:focus{
    outline: 0;
    border:2px solid crimson;
}

input:hover{
    border:2px solid crimson;
}

</style>

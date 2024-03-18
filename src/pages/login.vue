<template>
    <form @submit.prevent>
        <h1>Faça login</h1>
        <input type="email" placeholder="Email">
        <input :type="confirmInput ? 'text' : 'password'" placeholder="Password">
        <input type="checkbox" id="checkbox" v-model="confirmInput" />
        <!-- <label for="checkbox">Show password</label> -->
        <a @click="confirmInput = !confirmInput">Show password</a>
        <button>Entrar</button>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const confirmInput = ref<boolean>(false)

</script>
<style scoped lang="scss">
form{
    // background-color: #91a7b6;
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 500px;

    h1{
        text-align: center;
        margin-bottom: 15px;

    }

    input, button{
        width: 350px;
        padding: 13px;
        font-size: medium;
        background-color: #222b36;
        border-radius: 5px;
        font-weight: bold;
        color: white;
    }
    
    input{
        border: 2px solid #91a7b6;
        transition: 1s;
    }
    input:focus{
        border: 2px solid #276b9a;
        outline: 0;
    }

    button{
        background-color: #91a7b6;
        cursor: pointer;
        transition: 1s;
    }
    button:hover{
        background-color: #276b9a;
    }
}


</style>
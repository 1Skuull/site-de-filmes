<template>
    <form @submit.prevent>
        <h1>Faça login</h1>
        <input type="email" placeholder="Email">
        <input :type="confirmInput ? 'text' : 'password'" placeholder="Password">
        <!-- <input type="checkbox" id="checkbox" v-model="confirmInput" /> -->
        <button class="button-show" @click="confirmInput = !confirmInput">Show password</button>
        <button class="button-send">Entrar</button>
        <router-link to="/register">Faça sua conta</router-link>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const confirmInput = ref<boolean>(false)

</script>
<style scoped lang="scss">
form {
    // background-color: #91a7b6;
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 500px;

    h1 {
        text-align: center;
        margin-bottom: 15px;
    }

    a {
        text-decoration: none;
        color: white;
        margin-top: 10px;
        font-weight: bold;
        padding: 0 3px;

        &:hover {
            background-color: #276b9a;
        }
    }

    input, .button-send {
        width: 350px;
        padding: 13px;
        font-size: medium;
        background-color: #222b36;
        border-radius: 5px;
        font-weight: bold;
        color: white;
    }

    input {
        border: 2px solid #91a7b6;
        transition: 1s;

        &:focus {
            border: 2px solid #276b9a;
            outline: 0;
        }
    }

    .button-send {
        background-color: #91a7b6;
        cursor: pointer;
        transition: 1s;

        &:hover {
            background-color: #276b9a;
        }
    }
}
.button-show{ 
    font-weight: bold;
    background: none;
    color: white;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
}
</style>
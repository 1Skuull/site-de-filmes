<template>
    <form @submit.prevent>
        <h1>Crie sua conta</h1>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <input type="password" placeholder="Confirm Password">
        <button>Criar</button>
    </form>
</template>
<script setup lang="ts">

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
    // padding: 10px 50px;
    height: 500px;

    h1{
        text-align: center;
        margin-bottom: 15px;

    }

    input, button{
        width: 300px;
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

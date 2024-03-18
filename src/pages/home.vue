<template>
    <div class="container">
        <div class="home"></div>
        <div class="home"></div>
        <div class="home">
            <h1 class="titulo">TOP FILMES</h1>
        </div>
        <div class="home"></div>
        <div class="home"></div>
    </div>

    <Cards title="MELHORES DA SEMANA"/>
    <Cards title="MELHORES DO MES"/>
    <Cards title="MELHORES FILMES"/>
    <Cards title="MELHORES ANIMES"/>
    <Cards title="MELHORES SERIES"/>
    
</template>
<script setup lang="ts">
import Cards from "../components/Cards.vue"


</script>
<style scoped lang="scss">
.container{
    // background-color: #1c1c1c94;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    


    .home{
        background-color: #91a7b6;
        min-height: 500px;
        min-width: 320px;
        margin: 100px 0;
        border-radius: 10px;
        
    
        .titulo{
            background-color: #276b9a;
            position: relative;
            width: max-content;
            bottom: 30px;
            left: 55px;
            padding: 10px 10px;
            border-radius: 10px;
        }
    }
    .home:hover{
        outline: 0;
        border: 3px solid #276b9a;
    }
}



</style>
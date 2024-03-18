<template>
    <section>
        <h1>{{ props.title }}</h1>
        <div class="container-cards">
            <div class="card-movies"></div>
            <div class="card-movies"></div>
            <div class="card-movies"></div>
            <div class="card-movies"></div>
            <div class="card-movies"></div>
            <div class="card-movies"></div>
            <div class="card-movies"></div>
            <div class="card-movies"></div>
        </div>
    </section>
    
</template>
<script setup lang="ts">
const props = defineProps({
    title: String,
})

</script>
<style scoped lang="scss">
section{
    // background-color: darkslategrey;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 50px 0;
    

    .container-cards{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 5px;
        overflow-x: hidden;
    }

    .card-movies{
        background-color: #91a7b6;
        min-height: 300px;
        min-width: 200px;
        border-radius: 10px;
    }
    .card-movies:hover{
        outline: 0;
        border: 3px solid #276b9a;
    }
}
</style>
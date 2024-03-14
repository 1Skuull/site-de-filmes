<template>
    <h1>Criado e testando o carousel</h1>
    <Carousel />

    <MeusTestes />
</template>
<script setup lang="ts">
import Carousel from '../components/Carousel.vue';
import MeusTestes from '../components/MeusTestes.vue';

</script>
<style scoped lang="scss">
h1 {
    color: white;
    // min-height: 94.2vh;
    background-color: crimson;
    width: max-content;
}
</style>
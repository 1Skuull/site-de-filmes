<template>
    <h1>Slides: {{ slides.length }}</h1>
    <div class="diretion-buttons">
        <h1>Titulo aleatorio</h1>
        <div class="buttons">
            <button class="button-left" @click="slideIndex++"><</button>
            <button class="button-direita" @click="slideIndex--">></button>
        </div>
    </div>
    <div class="carousel-container">
        <div class="carousel-wrapper" :style="{ transform: `translateX(${translateX}px)` }">
            <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
                Slide {{ slide }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';

const slides = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // Adicione os conteúdos dos slides aqui
const slideIndex = ref<number>(0)
const slideWidth = ref<number>(300) // Largura dos slides

// console.log(slides.value.length)

const translateX = computed((): number => {
    return slideIndex.value * slideWidth.value;
})

</script>
  
<style scoped lang="scss">
.diretion-buttons {
    // background-color: #20a441;
    // position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // top: 170px;
    // z-index: 1;

    .buttons{
        display: flex;
        gap: 4px;
    }

    button {
        background-color: #91a7b6;
        width: 40px;
        height: 40px;
        font-size: 20px;
        color: white;
        margin: 3px 0;
        border-radius: 3px;
    }

}

.carousel-container {
    // width: 500px; /* Largura do carrossel */
    overflow: hidden;
    /* Oculta os slides adicionais */

    .carousel-wrapper {
        display: flex;
        /* Exibe os slides em linha */
        transition: transform 0.3s ease;
        /* Adiciona uma animação suave ao deslizar os slides */
        gap: 5px;
    }

    .carousel-slide {
        background-color: #91a7b6;
        min-height: 300px;
        min-width: 200px;
        padding: 20px;
        /* Espaçamento entre os slides */
        border-radius: 5px;
    }
}</style>
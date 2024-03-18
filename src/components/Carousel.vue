<template>
    <input type="range" v-model="slideIndex" min="-50"><br>
    <input type="number" v-model="slideIndex">
    <h1>{{ slides.length + 3 }}</h1>
    <div class="diretion-buttons">
        <h1>MELHORES DA SEMANA</h1>
        <div class="buttons">
            <button class="button-left" @click.stop="slideIndex++"><</button>
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


    button {
        background-color: #91a7b6;
        width: 40px;
        height: 40px;
        margin: 5px;
        font-size: 20px;
        color: white;
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
    }
}</style>
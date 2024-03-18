<template>
    <input type="range" v-model="slideIndex" min="-50"><br>
    <input type="number" v-model="slideIndex">
    <h1>{{ slideIndex }}</h1>
    <div class="diretion-buttons">
        <button class="button-left" v-if="slideIndex < 0" @click.stop="slideIndex++"><</button>
        <button class="button-direita" v-if="slideIndex !== slides.length" @click="slideIndex--">></button>
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
    justify-content: flex-end;
    // top: 170px;
    z-index: 1;

    button {
        background-color: #ffffff5c;
        width: 40px;
        height: 40px;
        // padding: 10px;  
        margin: 5px;
        font-size: 20px;
        color: white;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
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
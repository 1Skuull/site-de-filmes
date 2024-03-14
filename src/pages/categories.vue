<template>
    <h1 class="rotas">Categorias {{ router.params.name }}</h1>
</template>
<script setup lang="ts"> 
import { useRoute } from "vue-router";

const router  = useRoute()

</script>
<style scoped lang="scss">
.rotas{
    background-color: rgba(220, 20, 60, 0.609);
    // height: 100vh;
}
</style>
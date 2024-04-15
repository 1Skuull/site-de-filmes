<template>
    <h1 class="rotas">Categorias {{ router.params.name }}</h1>
</template>
<script setup lang="ts"> 
import { useRoute } from "vue-router";

const router  = useRoute()

</script>
<style scoped lang="scss">
.rotas{
    background-color: #276b9a;
    // height: 100vh;
}
</style>
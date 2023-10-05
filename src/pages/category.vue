<template>
    <h1>Categorias</h1>
    <p>{{ router.params.name }}</p>
</template>
<script setup lang="ts"> 
// import { ref } from "vue"
import { useRoute } from "vue-router";

const router  = useRoute()

</script>
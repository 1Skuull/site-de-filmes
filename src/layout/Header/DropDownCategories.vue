
<template>
  <div>
    <a class="dropdown-link" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
      Categories
    </a>
    <ul v-show="showDropdown" class="dropdown-list" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
      <li v-for="categoria in categorias" @click="selectCategory(categoria.toLocaleLowerCase())">
        {{ categoria }}
      </li>
    </ul>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router";

const showDropdown = ref<boolean>(false);

const categoriasEscolhida = useRouter()

function selectCategory(name: string) {
  categoriasEscolhida.push(`/category/${name}`)
}

const categorias = ref<string[]>([
  'Ação',
  'Romance',
  'Aventura',
  'Terror',
  'Anime',
  'Suspense',
  'Comedia'
])


</script>
  
<style scoped lang="scss">
@use '../../style';


.dropdown-link {
  background-color: transparent;
  text-decoration: 0;
  color: white;
  font-size: 1.05rem;
  font-weight: bold;
  padding: 0 5px;
}

.dropdown-link:hover {
  background-color: #276b9a;
}

.dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #276b9a;
  width: 109px;
  height: max-content;
  position: absolute;
  z-index: 1;

  li {
    padding: 0 5px;
    cursor: pointer;
    font-size: 1.05rem;
  }

  li:hover {
    background-color: #91a7b6;
  }

  a {
    text-decoration: 0;
    color: white;
  }
}
</style>
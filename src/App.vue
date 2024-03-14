<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import Header from './components/Header/Header.vue';

</script>

<template>
  <Header />
  <main>
    <RouterView></RouterView>
  </main>
  <AppFooter />
</template>

<style scoped lang="scss">
main{
  margin: 0 auto;
  max-width: 1180px;
  min-height:870px;
}

</style>

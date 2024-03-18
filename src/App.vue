<script setup lang="ts">
import AppFooter from './layout/Footer/index.vue';
import Header from './layout/Header/Header.vue';

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
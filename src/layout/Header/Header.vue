<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/profile">Profile</router-link>
            <DropDown />
        </nav>


        <div v-if="name">
            <router-link to="/login">Login</router-link>
            <!-- <span>/</span>
            <router-link to="/register">Register</router-link> -->
        </div>
        <div v-else>
            <a>Cleito Rasta</a>
        </div>
    </header>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DropDown from './DropDownCategories.vue';

const name = ref<boolean>(true)

</script>
<style scoped lang="scss">
header {
    // border-bottom: 1px solid #91a7b6;
    padding: 0.6rem 0;
    font-size: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1180px;

    a {
        text-decoration: 0;
        color: white;
        font-size: 1.05rem;
        font-weight: bold;
        padding: 0 5px;

    }

    a:hover {
        background-color: #276b9a;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
    }

    .logo {
        color: white;
        background-color: #276b9a;
        padding: 0 5px;
        border-radius: 1px;
    }

}

span {
    font-size: 17px;
    font-weight: bold;
}

.link-active {
    background-color: #276b9a;
}</style>
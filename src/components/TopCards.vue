<template>
    <div class="container">
        <div class="titulo">
            <h1>TOP FILMES </h1>
        </div>
        <div class="cards-container">
            <div class="home"></div>
            <div class="home"></div>
            <div class="home"></div>
            <div class="home"></div>
            <div class="home"></div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.container{
    // background-color: #276b9a;
    padding: 50px 0;
}

.titulo {
    // background-color: #279a96;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;

    h1 {
        background-color: #276b9a;
        padding: 8px;
        width: max-content;
        border-radius: 5px;
    }
}

.cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    .home {
        background-color: #91a7b6;
        min-height: 500px;
        min-width: 320px;
        border-radius: 10px;

        &:hover {
            outline: 0;
            border: 3px solid #276b9a;
        }
    }
}
</style>

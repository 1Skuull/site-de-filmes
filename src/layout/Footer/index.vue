<template>
    <footer>
        <h2>Desenvolvido por <a target="_blank" href="https://portfolio-skuull.vercel.app/">Hudson</a></h2>
    </footer>
</template>
<style scoped lang="scss">
footer{
    // background-color: #276b9a;
    padding: 0.6rem 0;
    font-size: 0.6rem;
    display: flex;
    justify-content: flex-end;
    // align-items: center;
    margin: 0 auto;
    max-width: 1180px;

    h2{
        font-size: small;
    }

    a{
        color: #dc143cc5;
        font-weight: bold;
        font-size: medium;
        text-decoration: none;
        transition: 1s;
        
        &:hover{
            background-color: #dc143cc5;
            color: #ffffffdc;
        }
    }
}



</style>
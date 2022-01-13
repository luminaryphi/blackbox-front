<template>
    <header>
        <a class="head-item-right" href="https://github.com/TriviumNode">Github</a>
    </header>
</template>

<script>
export default {
    name: `Header`,
}
</script>


<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        background-color: #0B0D17;

        position: absolute;
        width: 100%;
        height: 72px;
        left: 0px;
        top: 0px;

    }

    .head-item-right {
        text-align: right;
        margin-right: 4%;
        margin-left: 96%;
        text-decoration: none;
        color: whitesmoke;

        
    }



</style>
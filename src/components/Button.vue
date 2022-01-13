<template>
    <button class="action-box">{{ text }}</button>
</template>


<script>
export default {
    name: 'Button',
    props: {
        text: String,
    }
}
</script>


<style scoped>
    button {
        border: none;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 43px;
        /* or 121% */

        text-align: center;

        color: white;
        width: 307px;
        height: 164px;
        left: 1024px;
        top: 192px;
        margin: 30px;
    }

</style>
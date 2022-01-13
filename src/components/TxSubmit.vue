<template>
    <img src="@/assets/SendButton.svg" alt="Submit TX">
    <h2>{{ text }}</h2>
</template>


<script>
export default {
    name: 'TxSubmit',
    props: {
        text: String,
    }
}
</script>


<style scoped>

</style>
<template>
    <div class="pointer">
    <img src="@/assets/SendButton.svg" alt="Submit TX">
    <h2>{{ text }}</h2>
    </div>
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

.pointer {
    cursor: pointer;
}

</style>
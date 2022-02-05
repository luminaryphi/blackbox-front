<template>
    <button class="action-box" v-bind:class="getClass()">{{ text }}</button>
</template>


<script>
export default {
    name: 'Button',
    props: {
        text: String,
        pointer: Boolean,
        disabled: Boolean
    },
    methods:{
        getClass(){
            return {
                '': this.disabled,  
                'enabled': !this.disabled}
        }
    }
}
</script>


<style scoped>
    button {
        font-family: 'Inter', sans-serif;
        border: none;
        font-style: normal;
        font-weight: normal;
        font-size: 3vh;
        /* or 121% */

        text-align: center;

        color: white;
        width: 30vh;
        height: 15vh;
        left: 1024px;
        margin: 5vh;
        
    }

    .enabled {
        cursor: pointer;
    }
    .enabled:hover {
        filter: brightness(25%);
    }

</style>
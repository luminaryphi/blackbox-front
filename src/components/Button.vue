<template>
    <button v-bind:class="getClass()">{{ text }}</button>
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

    /* From cssbuttons.io by @adamgiebl */
    button {
        --green: #cff8fb;
        font-size: 15px;
        padding: 0.7em 2.7em;
        letter-spacing: 0.06em;
        position: relative;
        font-family: inherit;
        border-radius: 0.6em;
        overflow: hidden;
        transition: all 0.3s;
        line-height: 1.4em;
        border: 2px solid var(--green);
        background: linear-gradient(to right, rgba(27, 238, 253, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 238, 253, 0.1) 100%);
        color: var(--green);
        box-shadow: inset 0 0 10px rgba(27, 253, 242, 0.4), 0 0 9px 3px rgba(27, 245, 253, 0.1);

        margin: 6vh;
        width: 30vh;
        height: 10vh;
        font-size: 2vh;


    }

    button:hover {
        color: #cff8fb;
        box-shadow: inset 0 0 10px rgba(27, 253, 242, 0.6), 0 0 9px 3px rgba(27, 227, 253, 0.2);
    }

    button:before {
        content: "";
        position: absolute;
        left: -4em;
        width: 4em;
        height: 100%;
        top: 0;
        transition: transform .4s ease-in-out;
        background: linear-gradient(to right, transparent 1%, rgba(27, 238, 253, 0.1) 40%,rgba(27, 245, 253, 0.1) 60% , transparent 100%);
    }

    button:hover:before {
        transform: translateX(15em);
    }


  

    .enabled {
        cursor: pointer;
    }


</style>
<template>
    <div>
        <div>
            <Button v-on:click="UseCloak" text="Cloak" />
        </div>
        <div>
            <Button v-on:click="UseDeaddrop" text="DeadDrop" />
        </div>
        <div>
            <Button text="???" />
        </div>
    </div>
    
</template>

<script>
import Button from './Button.vue'

export default {
    name: `ButtonPanel`,
    components: {
        Button
    },
    methods: {
        UseCloak: function() {
            this.$emit('UseCloak')
        },
        UseDeaddrop: function() {
            this.$emit('UseDeaddrop')
        }
    }
}
</script>


<style scoped>

Button:hover {
    filter: brightness(25%);
}

</style>
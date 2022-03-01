<template>
    <div>
        <div>
            <Button v-on:click="UseCloak" text="Cloak" disabled="true" maintenance="true"/>
        </div>
        <div>
            <Button v-on:click="UseDeaddrop" text="DeadDrop" />
        </div>
        <div>
            <Button text="???"  disabled="true" />
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



</style>
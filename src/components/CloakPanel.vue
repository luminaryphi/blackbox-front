<template>
    <form class="action-box controls">
        <div class="input-section">
            <h1>Address</h1>
            <input type="text" placeholder="secret..." required>
            <h1>Amount</h1>
            <input type="text" placeholder="SSCRT" required>
        </div>
        <div class="txbutton">
            <TxSubmit text="Send" />
        </div>
        <div class="fee">Fee: 1 SSCRT</div>
        <img class="return" src="@/assets/BackArrow.svg" alt="Back" v-on:click="ReturnHome">
    </form>
</template>



<script>
import TxSubmit from './TxSubmit.vue'


export default {
    name: 'CloakPanel',
    components: {
        TxSubmit
    },
    methods: {
        ReturnHome: function() {
            this.$emit('ReturnHome')
        }
    }
    
}
</script>



<style scoped>

.controls {
    width: 521px;
    height: 661px;
    top: 181px;
    
}

.input-section {
    padding-top: 20%;
}


input {
    border-radius: 26px;
    width: 50%;
    padding: 5px 15px 7px;
    font-size: 14px;
    text-align: center;
}


.txbutton {
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, -50%);
    margin: 0 auto;

}

.txbutton:hover {
    filter: brightness(25%);
}


.fee {
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    
    
    
}

.return {
    position: fixed;
    left: 10%;
    bottom: 20px;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    
}

.return:hover {
    filter: brightness(25%);
}



</style>
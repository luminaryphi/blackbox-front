<template>
    <form class="action-box controls">
        <div class="input-section">
            <div class="tx-type-section">
                <span class="selected">Send</span>
                <span> / </span>
                <span class="unselected" v-on:click="ToReceive">Receive</span>
            </div>
            <h1>Alias</h1>
            <input type="text" placeholder="..." required>
            <h1>Amount</h1>
            <img class="token" v-on:click="SelectToken" :src="TokenImage" alt="">
            <input type="text" :placeholder="TokenDenom" required>
        </div>
        <div class="txbutton">
            <TxSubmit text="Send" />
        </div>
        <div class="fee">Fee: 0.04%</div>
        <img class="return" src="@/assets/BackArrow.svg" alt="Back" v-on:click="ReturnHome">
        <TokenPanel v-if="TokenSelect" v-on:ConfirmToken="UseToken" v-on:ReturnHome="CancelSelectToken"></TokenPanel>
    </form>
</template>



<script>
import TxSubmit from './TxSubmit.vue'
import TokenPanel from './TokenPanel.vue'


export default {
    name: 'DeaddropSendPanel',
    components: {
        TxSubmit,
        TokenPanel
    },
    data() {
        return {
            TokenSelect: false,
            TokenDenom: "sSCRT",
            TokenAddress: "secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek",
            TokenImage: "/tokenIcons/scrt.svg"
        }
    },
    methods: {
        ReturnHome: function() {
            this.$emit('ReturnHome')
        },
        ToReceive: function() {
            this.$emit('ToReceive')
        },
        SelectToken: function() {
            this.TokenSelect = true
        },
        CancelSelectToken: function() {
            this.TokenSelect = false
        },
        UseToken: function(newDenom, newImg, newAddress) {
            this.TokenSelect = false
            this.TokenDenom = newDenom
            this.TokenImage = "/tokenIcons/" + newImg
            this.TokenAddress = newAddress
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


.tx-type-section {
    position: fixed;
    transform: translate(190%, -400%);

}

.token {
    width: 50px;  
    height: auto;  
    position: fixed;
    transform: translate(-125%, -20%);
}

.token:hover {
    filter: brightness(25%);
}



.input-section {
    padding-top: 20%;
}

.selected {
    color: #2c3e50;
}

.unselected:hover {
    filter: brightness(25%);
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
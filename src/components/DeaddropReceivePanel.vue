<template>
    <form class="action-box controls">
        <div class="input-section">
            <div class="tx-type-section">
                <span class="unselected" v-on:click="ToSend">Send</span>
                <span> / </span>
                <span class="selected">Receive</span>
            </div>
            <h1>Alias</h1>
            <input type="text" placeholder="optional">
        </div>
        <div class="txbutton">
            <TxSubmit text="Register" />
        </div>
        <div class="fee"></div>
        <img class="return" src="@/assets/BackArrow.svg" alt="Back" v-on:click="ReturnHome">
    </form>
</template>



<script>
import TxSubmit from './TxSubmit.vue'


export default {
    name: 'DeaddropReceivePanel',
    components: {
        TxSubmit
    },
    methods: {
        ReturnHome: function() {
            this.$emit('ReturnHome')
        },
        ToSend: function() {
            this.$emit('UseDeaddrop')
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
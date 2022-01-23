<template>
    <form class="action-box controls">
        <div class="input-section">
            <h1>Address</h1>
            <input type="text" v-model="destination" placeholder="secret..." required>
            <h1>Amount</h1>
            <img class="token" src="/tokenIcons/scrt.svg" alt="">
            <input type="text" v-model="amount" placeholder="sSCRT" required>
        </div>
        <div class="txbutton">
            <a @click=ExecuteCloak><TxSubmit text="Send" /></a>
        </div>
        <div class="fee">Fee: 1 sSCRT</div>
        <img class="return" src="@/assets/BackArrow.svg" alt="Back" v-on:click="ReturnHome">
    </form>
</template>



<script>
import { getSigningClient } from '../utils/keplrHelper'
import TxSubmit from './TxSubmit.vue'


export default {
    name: 'CloakPanel',
    components: {
        TxSubmit
    },
    methods: {
        ReturnHome: function() {
            this.$emit('ReturnHome')
        },
        ExecuteCloak: async function() {
            console.log("execute click", this.destination)
            if (!this.$store.getters.hasSigningClient){
                this.$store.dispatch("setSigningClient", await getSigningClient("pulsar-2"));
                console.log(this.$store.state)
            }
            let amount = this.amount*1000000
            
            //todo verify address before executing
            const cloakMsg = {
                receive_seed : {
                    recipient: this.destination
                }
            }; 
            console.log(cloakMsg);

            const sendMsg = {
                send: {
                    amount:amount.toString(),
                    recipient: "secret1ge8y0nksu3lyfyj6uzlee95ejyrqxz37kfm6nn",
                    msg: Buffer.from(JSON.stringify(cloakMsg)).toString('base64')        
                }
            }

            let response = await this.$store.state.secretJs.execute("secret12uqy5szfp62c55wp7ft24fu7de0c6xw3tz5hr6", sendMsg);
            console.log(response)
            let data = await this.$store.state.secretJs.checkTx(response.transactionHash)
            console.log(data)
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


.token {
    width: 50px;  
    height: auto;  
    position: fixed;
    transform: translate(-125%, -20%);
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
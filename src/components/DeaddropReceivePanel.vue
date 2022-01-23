<template>
    <form class="action-box controls">
        <div class="input-section">
            <div class="tx-type-section">
                <span class="unselected" v-on:click="ToSend">Send</span>
                <span> / </span>
                <span class="selected">Receive</span>
            </div>
            <h1>Alias</h1>
            <input type="text" placeholder="optional" v-model="alias">
        </div>
        <div class="txbutton">
            <a @Click=ExecuteReceive><TxSubmit text="Register" /></a>
        </div>
        <div class="fee"></div>
        <img class="return" src="@/assets/BackArrow.svg" alt="Back" v-on:click="ReturnHome">
    </form>
</template>



<script>
import { getSigningClient } from '../utils/keplrHelper'
import TxSubmit from './TxSubmit.vue'
import { useToast } from "vue-toastification";

export default {
    name: 'DeaddropReceivePanel',
    components: {
        TxSubmit
    },
    setup() {
      // Get toast interface
      const toast = useToast();

      // Make it available inside methods
      return { toast }
    },
    methods: {
        ReturnHome: function() {
            this.$emit('ReturnHome')
        },
        ToSend: function() {
            this.$emit('UseDeaddrop')
        },
        ExecuteReceive: async function() {
            try{

                //ensure signing client is in glibal state
                if (!this.$store.getters.hasSigningClient){
                    this.$store.dispatch("setSigningClient", await getSigningClient("pulsar-2"));
                }

                //message for the deaddrop contract
                let setMsg;
                if (this.alias && this.alias.trim()){
                    setMsg = {
                        set_alias : {
                            alias: this.alias.trim()
                        }
                    }; 
                } else {
                    setMsg = {
                        set_alias : { }
                    };
                }
                console.log(setMsg)

                const sendMsg = {
                    send: {
                        amount: "0",
                        recipient: "secret1py27z7zywjn8ry4a6m9eajkpknhx7mqn24l3ug",
                        msg: Buffer.from(JSON.stringify(setMsg)).toString('base64')
                    }
                }

                //"Sync" broadcast mode returns tx hash only (or error if it failed to enter the mempool)
                let response = await this.$store.state.secretJs.execute("secret12uqy5szfp62c55wp7ft24fu7de0c6xw3tz5hr6", sendMsg);
                if (response.code){
                    this.toast.error(`Transaction Failed: ${response.raw_log}`, {
                        timeout: 8000
                    })
                } else {
                    this.toast("Transaction Processing...", {
                        id: "tx-processing",
                        timeout: false,
                        closeButton: false
                    });
                }

                //poll tx's endpoint every 1000ms up to 10 times to check when tx is processed. Returns full tx object
                let data = await this.$store.state.secretJs.checkTx(response.transactionHash,1000,10)
                console.log(data)
                this.toast.dismiss("tx-processing");

                //if error
                if (data.code){
                    this.toast.error(`Transaction Failed: ${data.raw_log}`, {
                        timeout: 8000
                    })
                } else {
                    this.toast.success("Transaction Succeeded!", {
                        timeout: 8000
                    });
                }
            } catch(e) {
                this.toast.error(`Unknown error occured: ${e}`, {
                    timeout: 8000
                })
            }

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
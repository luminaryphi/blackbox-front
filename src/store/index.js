import { createStore } from 'vuex'
const { CosmWasmClient } = require('secretjs');

export default createStore({
    state: {
        queryJs: new CosmWasmClient("https://secret-4.api.trivium.network:1317"),
        chainId: "secret-4",
        //queryJs: new CosmWasmClient("https://lcd.pulsar.griptapejs.com"),
        //chainId: "pulsar-2",
        secretJs: null,
        token_address: "secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek",
        token_code_hash: "AF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E",
        cloak_address: "secret10th44a6rr2q899tclth4e2xlj2lmxpg43ff0h2",
        cloak_code_hash: "cb3c382d8d1c0a6c7498e9fc5d54df51bc76c47eb6a5a15ec39e2f17813fc697",
        //token_address: "secret12uqy5szfp62c55wp7ft24fu7de0c6xw3tz5hr6",
        //token_code_hash: "7a155a3514f403c44db71f49e2a555bdfa90ff67e2011544f717a54a16ff2b06",
        deaddrop_address: "secret17sx7jrdwr2uy6n3uzk5tykdgydp73mwsfhpenw",
        deaddrop_code_hash: "f7b091ee44afe253981a74d846ed1b59a166b18e1edd8040c60ae53ebc5faf8c"
      },
    mutations: {
        UPDATE_SIGNER(state, payload){
            state.secretJs = payload
        }
    },
    actions: {
        setSigningClient(context, payload) {
            context.commit('UPDATE_SIGNER', payload)
        }
    },
    getters: {
        hasSigningClient: function (state) {
            if (!state.secretJs) {
                return false;
            }
            return true;
        }
    }
})
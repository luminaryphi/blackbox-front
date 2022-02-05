import { createStore } from 'vuex'
const { CosmWasmClient } = require('secretjs');

export default createStore({
    state: {
        queryJs: new CosmWasmClient("https://secret-4.api.trivium.network:1317"),
        secretJs: null,
        usePulsar: true,
        token_address: "secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek",
        token_code_hash: "AF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E",
        cloak_address: "secret138d57xnnm2rysf9htc8hc5snsqdshqs8xgvksy",
        cloak_code_hash: "2f6cdd8f148c10928a49ed3aceac8b15a6209806db1f02cef0b654b23b3148d0",
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
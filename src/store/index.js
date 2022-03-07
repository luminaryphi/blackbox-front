import { createStore } from 'vuex'
const { CosmWasmClient } = require('secretjs');

export default createStore({
    state: {
        operator_url: "http://143.198.130.124:3000",
        //operator_url: "http://localhost:3000",
        //queryJs: new CosmWasmClient("https://secret-4.api.trivium.network:1317"),
        //chainId: "secret-4",
        queryJs: new CosmWasmClient("http://66.85.142.147:11317"),
        chainId: "pulsar-2",
        secretJs: null,
        //token_address: "secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek",
        //token_code_hash: "AF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E",
        token_address: "secret12uqy5szfp62c55wp7ft24fu7de0c6xw3tz5hr6",
        token_code_hash: "7a155a3514f403c44db71f49e2a555bdfa90ff67e2011544f717a54a16ff2b06",
        cloak_address: "secret10jdw9d5x58a9nup4sue42234r3gsq36ppcng0k",
        cloak_code_hash: "dd4b9d22d12b8e67cc47f409e7ff228c427cd326ea8fdfe6679682e523fbcb0a",
        deaddrop_address: "secret17sx7jrdwr2uy6n3uzk5tykdgydp73mwsfhpenw",
        deaddrop_code_hash: "f7b091ee44afe253981a74d846ed1b59a166b18e1edd8040c60ae53ebc5faf8c",
        key_history: JSON.parse(localStorage.getItem('cloak_key_history')) || []
      },
    mutations: {
        UPDATE_SIGNER(state, payload){
            state.secretJs = payload
        },
        UPDATE_KEY_HISTORY(state, payload){
            state.key_history.push(payload);
            localStorage.setItem('cloak_key_history', JSON.stringify(state.key_history))
        }
    },
    actions: {
        setSigningClient(context, payload) {
            context.commit('UPDATE_SIGNER', payload)
        },
        addKeyHistory(context, payload){
            context.commit('UPDATE_KEY_HISTORY', payload)
        }
    },
    getters: {
        hasSigningClient: function (state) {
            if (!state.secretJs) {
                return false;
            }
            return true;
        },
        getKeyHistory: function (state) {
            if (!state.secretJs) {
                return false;
            }
            return true;
        }
    }
})
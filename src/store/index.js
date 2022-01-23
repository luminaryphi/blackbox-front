import { createStore } from 'vuex'
const { CosmWasmClient } = require('secretjs');

export default createStore({
    state: {
        queryJs: new CosmWasmClient("https://pulsar-2.api.trivium.network:1317"),
        secretJs: null,
        usePulsar: true
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
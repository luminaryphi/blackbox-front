<template>
    <div class="action-box popup">
        <div class="token-data pointer" @click="ConfirmToken('sSCRT', 'scrt.svg', 'secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek', 6)">
            <img class="token" src="/tokenIcons/scrt.svg" alt="">
            <div>sSCRT</div>
        </div>
        <div class="token-data pointer" @click="ConfirmToken('sUSDT', 'usdt_ethereum.svg', 'secret18wpjn83dayu4meu6wnn29khfkwdxs7kyrz9c8f', 6)">
            <img class="token" src="/tokenIcons/usdt_ethereum.svg" alt="">
            <div>sUSDT</div>
        </div>
        <img class="return pointer" src="@/assets/BackArrow.svg" alt="Back" v-on:click="ReturnHome">

    </div>
</template>



<script>



export default {
    name: 'TokenPanel',
    components: {

    },
    data() {
        return {
            test: "bing",
            
        }
    },
    methods: {
        ReturnHome: function() {
            this.$emit('ReturnHome')
        },
        ConfirmToken: function(denom, img, address, decimals) {
            this.$emit(`ConfirmToken`, denom, img, address, decimals)
        }
    }
    
}
</script>



<style scoped>



.popup{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 521px;
    height: 661px;
    background: #0B0D17;

}

.token {
    width: 50px;  
    height: auto;  
}

.token-data {
    margin-top: 40px;
}

.token-data:hover {
    filter: brightness(25%);
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

.pointer {
    cursor: pointer;
}

</style>
<template>
    <body>
        
        <div class="panel">
            <component :is="PanelType" v-on:UseCloak="SetCloak" v-on:ReturnHome="SetHome"></component>
        </div>

        <div class="info">
            <img src="@/assets/BlackBoxTitle.svg" alt="BlackBox" class="logo">
            <div class="sub-title">{{ subtitle }}</div>
            <div class="description">{{ description }}</div>
        </div>
    </body>
</template>


<script>
import CloakPanel from './CloakPanel.vue'
import ButtonPanel from './ButtonPanel.vue'



export default {
    name: 'Contents',
    components: {
        CloakPanel,
        ButtonPanel,
    
    },
    data() {
        return {
            PanelType: ButtonPanel,
            subtitle: " ",
            description: "A collection of dapps to bring together privacy and convenience."
        }
    },
    methods: {
        SetCloak: function(){
            this.PanelType = CloakPanel
            this.subtitle = "/Cloak"
            this.description = "Seed another wallet with SCRT gas without a trace. Escape doxing with no link to your old address."
        },
        SetHome: function(){
            this.PanelType = ButtonPanel
            this.subtitle = " "
            this.description = "A collection of dapps to bring together privacy and convenience."
            
        }
    }
}
</script>


<style scoped>

body {
    background-image: linear-gradient(180deg, #C4C4C4 0%, rgba(196, 196, 196, 0) 40%), url('../assets/BlackboxBackground.png');
    background-size: cover;
    
    background-position: 0% 50%;
    background-repeat:no-repeat;
    height: 90vh;
}




.panel {
    float: right;
    margin-right: 5%;
    margin-top: 4.5%;
    display: flex;

}

.info {
    margin-top: 10%;
    margin-left: 5%;
    width: 17%;
    float: left;

    display: flex;
    flex-direction: column;
}

.logo {
    left: 0px;
    
    

}

.sub-title {
    margin-top: 10px;
    font-size: 54px;
    line-height: 43px;
    text-align: left;
    color: whitesmoke;


}



.description {
    font-size: 36px;
    line-height: 43px;
    text-align: left;
    margin-top: 20px;
    word-break: normal;
    

}



</style>
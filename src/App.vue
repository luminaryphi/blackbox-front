<template>
  <body>
    <Header />
    <Contents />
    <Footer />
  </body>
</template>


<script>

import Header from './components/Header.vue'
import Contents from './components/Contents.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Contents,
    Footer
  }
}
</script>

<style>

@import url('https://rsms.me/inter/inter.css');
#app { font-family: 'Inter', sans-serif; }




#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: whitesmoke;
  margin-top: 60px;

}

a {
  text-decoration: none;
  color: whitesmoke;
}

body {
  background-color: black;
  background-image: linear-gradient(180deg, #C4C4C4 0%, rgba(196, 196, 196, 0) 43%);
}


.action-box {
  background: linear-gradient(180deg, #0B0D17 0%, rgba(112, 115, 131, 0) 100%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(4px);
  border-radius: 100px;
  box-shadow: inset 0 0 10px rgba(27, 253, 242, 0.4), 0 0 9px 3px rgba(27, 245, 253, 0.1);
}

</style>

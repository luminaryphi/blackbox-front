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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: whitesmoke;
  margin-top: 60px;

}

body {
  background-color: black;
  background-image: linear-gradient(180deg, #C4C4C4 0%, rgba(196, 196, 196, 0) 43%);
}


.action-box {
  background: linear-gradient(180deg, #0B0D17 0%, rgba(112, 115, 131, 0) 100%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(100px);
  border-radius: 42px;
}

</style>

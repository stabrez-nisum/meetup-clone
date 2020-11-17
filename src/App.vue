<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer/> 
  </div>
</template>

<script>
import Header from "./components/Header.vue";

import Footer from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.landing-image {
  width: 100%;
  height: 70%;
  margin-top: -500px;
}
@media (min-width: 576px) {
  .container {
    max-width: 475px !important;
  }
}
h3 {
  font-weight: bold !important;
  margin-bottom: 25px !important;
  text-align: center;
}
</style>

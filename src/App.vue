<template>
  <div id="wrapper">
    <Header id="header"></Header>
    <div id="body">
    <router-view></router-view>
    </div>
    <Footer id="footer"></Footer>
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

body {
    margin: 0;
}

#wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

#footer {
    margin-top: auto;
    background-color:#dc3545;
}
.errorMsg{
  color: red;
}
</style>

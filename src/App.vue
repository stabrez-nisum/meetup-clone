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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
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

/* html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#wrapper {
  min-height: 100%;
  position: relative;
}
#header {
  background: #ededed;
  padding: 10px;
} */
/* #content {
  padding-bottom: 100px;
  Height of the footer element
} */
/* #footer {
  background: #ffab62;
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
} */

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
</style>

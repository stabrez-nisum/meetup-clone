<template>
  <div id="app">
    <Header></Header>
     <router-view></router-view>
    <!-- <Events/> -->
  </div>
</template>

<script>
 import Header from "./components/Header.vue";
// import Events from "./components/Events.vue"
export default {
  name: "App",
  components: {
     Header,
    // Events,
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
  margin-top: -150px;
}
@media (min-width: 576px) { 
    .container{
        max-width:475px !important;
    }
}
h3{
  font-weight: bold !important;
  margin-bottom: 25px !important;
}
</style>

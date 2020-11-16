<template>
  <div id="app">
    <Header />
    <Search />
    <img src="../public/meetup-landing-page.jpg" class="landing-image" alt="" />
    <!-- <Events/> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
// import Events from "./components/Events.vue"
export default {
  name: "App",
  components: {
    Header,
    Search,
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
</style>

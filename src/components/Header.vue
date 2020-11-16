<template>
  <div>
    <b-navbar toggleable="lg" >
      <b-navbar-brand href="#/home">
        <img src="../../public/meetup-logo.svg" alt="Meetup" class="logo">
      </b-navbar-brand>
      
      <b-collapse id="nav-collapse" is-nav>        
        <b-navbar-nav class="ml-auto">
           <router-link to='/signup'>Signup</router-link>
          <!-- <b-nav-item href="#/login"><strong>Login</strong></b-nav-item> -->
          <!-- <b-nav-item href="#" routerLink="/signup"><strong>Signup</strong></b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",  
  mounted() {
    // Init operations
  },
};
</script>
<style scoped>
.logo{
    height: 50px;
    width: 150px;
}
</style>
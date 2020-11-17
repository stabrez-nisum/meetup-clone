<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#/home">
        <img src="../../public/meetup-logo.svg" alt="Meetup" class="logo" />
      </b-navbar-brand>
      
      <b-collapse v-if="isUser" id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
						<b-button class="mr-1" variant="danger" pill>T</b-button>
            <strong>Tabrez</strong>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

      <b-collapse v-else id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
           <b-nav-item href="#/"><strong>Home</strong></b-nav-item>
          <b-nav-item href="#/login"><strong>Login</strong></b-nav-item>
          <b-nav-item href="#/signup"><strong>Signup</strong></b-nav-item>
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
  computed: {
    isUser() {
      // Based on condition verify user
      return false;
    },
  },
};
</script>
<style scoped>
.logo {
  height: 50px;
  width: 150px;
}
</style>
<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/">
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
        <div class="d-flex justify-content-center">
          <b-navbar>
            <b-nav-form>
              <b-form-input
                class="mr-sm-2 header-search"
                placeholder="Search Events"
              ></b-form-input>
            </b-nav-form>
          </b-navbar>
        </div>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/login"><strong>Login</strong></b-nav-item>
          <b-nav-item href="/signup"><strong>Signup</strong></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import Search from './Search.vue'
export default {
  name: "Header",
  components: {
    // Search
  },
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
.header-search{
  width: 500px!important;
}
</style>
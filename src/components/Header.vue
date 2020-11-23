<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/">
        <img src="../../public/meetup-logo.svg" alt="Meetup" class="logo" />
      </b-navbar-brand>

      <b-collapse v-if="isUser" id="nav-collapse" is-nav>
        <div
          v-if="$route.name !== 'Profile'"
          class="d-flex justify-content-center"
        >
          <b-navbar>
            <b-nav-form>
              <b-input-group>
                <template #prepend>
                  <b-input-group-text
                    ><b-icon icon="search"></b-icon
                  ></b-input-group-text>
                </template>
                <b-form-input
                  class="mr-sm-2 header-search"
                  placeholder="Search Events"
                ></b-form-input>
              </b-input-group>
            </b-nav-form>
          </b-navbar>
        </div>

        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="ml-auto py-2">
            <b-nav-item href="/create/event"
              ><strong>Create Event</strong></b-nav-item
            >
          </b-navbar-nav>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-button class="mr-1" variant="danger" pill>{{
                nameIcon
              }}</b-button>
              <!-- <strong>{{$store.state.loggedInUser}}</strong>  //we can get directly from the store -->
              <strong>{{ userName }}</strong>
            </template>
            <b-dropdown-item href="/profile">Profile</b-dropdown-item>
            <b-dropdown-item @click="signOut" href="/"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

      <b-collapse v-else id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/login"><strong>Login</strong></b-nav-item>
          <b-nav-item href="/signup"><strong>Signup</strong></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
export default {
  name: "Header",
  data() {
    return {
    };
  },
  computed: {
    // ...mapState({userName:'loggedInUser'}),
    userName() {
      return this.$store.state.loggedInUser;
    },
    nameIcon() {
      return this.$store.state.loggedInUser.charAt(0).toUpperCase();
    },
    isUser() {
      // Based on condition verify user
      return this.$store.state.isUserLogin;
    },
  },
  methods: {
    signOut() {
      localStorage.removeItem("loginUser");
      localStorage.removeItem("loginStatus");
      localStorage.removeItem("loggedInUserName");
    },
  },
};
</script>
<style scoped>
.logo {
  height: 50px;
  width: 150px;
}
.header-search {
  width: 500px !important;
}
</style>
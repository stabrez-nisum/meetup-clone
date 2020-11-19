<template>
  <div>
    <div>
      <b-toast id="success-toast" variant="success">
        <template #toast-title>
          <div class="d-flex flex-grow-1 align-items-baseline">
            <strong class="mr-auto">Login Failure </strong>
            <small class="text-muted mr-2">2 seconds ago</small>
          </div>
        </template>
        Registered Successfully..
      </b-toast>

      <b-toast id="error-toast" variant="danger">
        <template #toast-title>
          <div class="d-flex flex-grow-1 align-items-baseline">
            <strong class="mr-auto">Login Failure </strong>
            <small class="text-muted mr-2">2 seconds ago</small>
          </div>
        </template>
        You have been already registered.
      </b-toast>
    </div>
    <form id="signup-form" class="container">
      <h3>Sign up</h3>
      <div class="form-group">
        <label>Your name</label>
        <input type="name" class="form-control" v-model="signupForm.name" />
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" v-model="signupForm.email" />
        <small class="form-text text-muted" style="display: flex"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          v-model="signupForm.password"
        />
      </div>
      <div class="form-group">
        <small class="form-text text-muted">
          Your name is public. We'll use your email address to send you updates,
          and your location to find Meetups near you.
        </small>
      </div>
      <div class="form-group">
        <button type="submit" class="form-control btn-danger" @click="signup">
          Submit
        </button>
      </div>
      <p style="font-size: 13px">
        When you "Continue", you agree to Meetup's
        <a href="https://www.meetup.com/terms/" target="_blank" class="link"
          >Terms of Service</a
        >. We will manage information about you as described in our
        <a href="https://www.meetup.com/privacy/" target="_blank" class="link"
          >Privacy Policy</a
        >, and
        <a
          href="https://www.meetup.com/cookie_policy/"
          target="_blank"
          class="link"
          >Cookie Policy</a
        >.
      </p>
      <hr />
      <div style="text-align: center">
        Already a member? <router-link to="/login">Log in.</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      signupForm: { name: "", email: "", password: "" },
      users: [],
    };
  },
  mounted() {
    if (localStorage.users) {
      this.users = JSON.parse(localStorage.users);
    }
  },
  methods: {
    signup() {
      let registeredUser = this.users.find(
        (el) => el.email == this.signupForm.email
      );
      console.log(registeredUser);
      if (!registeredUser) {
        this.users.push(this.signupForm);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.$bvToast.show("success-toast");
      } else if (registeredUser) {
        this.$bvToast.show("error-toast");
      } else {
        this.$bvToast.show("error-toast");
      }
    },
  },
};
</script>

<style scoped>
label {
  display: flex;
  font-weight: bold;
  font-size: 13px;
}
</style>
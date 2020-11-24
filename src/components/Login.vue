<template>
  <div>
    <b-toast id="login-toast" variant="success">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">Welcome, {{ loggedInUser }} </strong>
          <small class="text-muted mr-2">2 seconds ago</small>
        </div>
      </template>
      Login Successful
    </b-toast>

    <b-toast id="error-toast" variant="danger">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">Login Failure </strong>
          <small class="text-muted mr-2">2 seconds ago</small>
        </div>
      </template>
      Password or username is incorrect, please try again...
    </b-toast>

    <form id="login-form" class="container" @submit="login">
      <h3>Login</h3>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control"
          v-model="loginForm.email"
          @blur="$v.loginForm.email.$touch()"
        />
        <small class="form-text text-muted" style="display: flex"
          >We'll never share your email with anyone else.</small
        >
        <template v-if="$v.loginForm.email.$error">
          <p class="errorMsg" v-if="!$v.loginForm.email.required">
            Email is required
          </p>
          <p class="errorMsg" v-if="!$v.loginForm.email.email">
            Enter valid Email Id
          </p>
        </template>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          v-model="loginForm.password"  @blur="$v.loginForm.password.$touch()"
        />
        <template v-if="$v.loginForm.password.$error">
          <p class="errorMsg" v-if="!$v.loginForm.password.required">
            Email is required
          </p>
        </template>
      </div>
      <div class="form-group">
        <button :disabled="$v.$invalid" type="submit" class="form-control btn-danger">Login</button>
      </div>
      <hr />
      <div style="text-align: center">
        Don't have an account? <router-link to="/signup">SignUp.</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      loginForm: { email: "", password: "" },
      usersList: [],
    };
  },
  validations: {
    loginForm: {
      email: {
        required,
        email
      },
      password: {
        required,
      },
    },
  },
  props: ["users"],
  mounted() {
    this.usersList = this.users;
    if (localStorage.users) {
      this.usersList = JSON.parse(localStorage.users);
    }
  },
  methods: {
    login() {
      var loginUser = this.usersList.find(
        (el) => el.email.toLowerCase() == this.loginForm.email.toLowerCase()
      );
      if (loginUser) {
        if (loginUser.password === this.loginForm.password) {
          this.loginForm["name"] = loginUser.name;
          localStorage.setItem("loginUser", JSON.stringify(this.loginForm));
          this.loggedInUser = loginUser.name;
          this.$bvToast.show("login-toast");
          // this.$store.commit("updateState", true);
          localStorage.setItem("loginStatus", true);
          localStorage.setItem("loggedInUserName", this.loggedInUser);
          let payload = { loginStatus: true, userName: this.loggedInUser };
          this.$store.dispatch("updateState", payload);
          this.$router.push("/home");
        } else {
          this.$bvToast.show("error-toast");
          this.$store.commit("updateState", false);
        }
      } else {
        this.$bvToast.show("error-toast");
        this.$store.commit("updateState", false);
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
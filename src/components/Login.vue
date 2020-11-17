<template>
  <div>
    <form id="login-form" class="container">
      <h3>Login</h3>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" v-model="loginForm.email" />
        <small class="form-text text-muted" style="display: flex"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          v-model="loginForm.password"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="form-control btn-danger" @click="login">
          Login
        </button>
      </div>
      <hr />
      <div style="text-align: center">
        Already a member? <router-link to="/signup">SignUp.</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: { email: "", password: "" },
      usersList : []
    };
  },
  props: ["users"],
  mounted() {
    this.usersList = this.users
    if (localStorage.users) {
      this.usersList = JSON.parse(localStorage.users);
    }
  },
  methods: {
    login() {
      var loginuser = this.usersList.find(
        (el) => el.email.toLowerCase() == this.loginForm.email.toLowerCase()
      );
      if (loginuser) {
        if (loginuser.password === this.loginForm.password) {
          this.loginForm["name"] = loginuser.name;
          localStorage.setItem("loggedInUser", JSON.stringify(this.loginForm));
          //  popupUtils.methods.successAlert();
          this.$swal('Success', 'Logged in successfully', 'OK');
        } else {
          this.$swal('Failure', 'Password is incorrect..Please try with valid password', 'OK');
        }
      } else {
        this.$swal('Failure', 'Uesr is not registered', 'OK');
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
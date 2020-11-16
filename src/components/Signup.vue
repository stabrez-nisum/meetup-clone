<template>
  <div>
    <form id="signup-form" class="container">
      <h3>Sign up</h3>
      <div class="form-group">
        <label>Your name</label>
        <input type="name" class="form-control" id="exampleInputname" />
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" />
        <small class="form-text text-muted" style="display: flex"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" />
      </div>
      <div class="form-group">
        <small class="form-text text-muted">
          Your name is public. We'll use your email address to send you updates,
          and your location to find Meetups near you.
        </small>
      </div>
      <div class="form-group">
        <button type="submit" class="form-control btn-danger">Submit</button>
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
      <div>Already a member? Log in.</div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      signupForm: { name: "", email: "", password: "" },
    };
  },
  methods: {},
};
</script>

<style scoped>
label {
  display: flex;
  font-weight: bold;
  font-size: 13px;
}
</style>
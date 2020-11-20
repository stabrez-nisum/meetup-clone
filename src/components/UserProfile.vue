<template>
  <b-container fluid="md" class="card">
    <div class="card-body">
      <h2>{{ userName }}</h2>
      <hr />
      <div class="row" style="margin-top:10px;">
        <div class="col-sm-3">
          <b>Location:</b>
          <p>Hyderabad</p>
        </div>
        <div class="col-sm-4">
          <b>Meetup member since:</b>
          <p>{{ currentDate }}</p>
        </div>
        <div class="col-sm-3">
          <b>Networks:</b>
          <div>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-linkedin"></a>
          </div>
        </div>
      </div>
      <hr />
      <div class="text">You aren't in any groups yet.</div>
      <hr />
      <div class="text">Looking to post a greeting? Start a conversation instead.</div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      currentDate: "",
    };
  },
  mounted() {
    this.currentDate = new Date();
    console.log(this.currentDate);
  },
  computed: {
    userName() {
      return this.$store.state.loggedInUser;
    },
  },
};
</script>

<style scoped>
.card {
  width: 55%;
}
hr {
  width: 80%;
  margin: 0;
}
.fa {
  padding: 3px;
  font-size: 19px;
  width: 24px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}
.text{
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 13px;
}
</style>
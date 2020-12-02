<template>
  <form-wizard
    @on-complete="onComplete"
    @on-loading="setLoading"
    @on-validate="handleValidation"
    @on-error="handleErrorMessage"
    color="#dc3545"
    error-color="#e74c3c"
  >
    <h1 slot="title">Create Event</h1>
    <tab-content icon="ti-settings">
      <div>
        <hr />
        <b-container fluid="md">
          <div>
            <h1>
              <strong> First, set your group’s location.</strong>
            </h1>
            <p class="text-muted">
              Meetup groups meet locally, in person and online. We'll connect
              you with people in your area, and more can join you online.
            </p>
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <p>Event Location</p>
              <h2>
                <strong>{{ selectedLocation }}</strong>
              </h2>
              <b-form-input
                class="mr-sm-2"
                placeholder="Location"
                list="location"
                v-model="selectedLocation"
              ></b-form-input>

              <datalist id="location">
                <option
                  v-for="(location, locationIndex) in locations"
                  :key="locationIndex"
                >
                  {{ location }}
                </option>
              </datalist>
            </div>
            <div>
              <b-button variant="outline-danger" size="lg">
                Get Location
                <b-icon icon="joystick" aria-hidden="true"></b-icon
              ></b-button>
            </div>
          </div>
        </b-container>
        <hr />
      </div>
    </tab-content>

    <tab-content icon="ti-settings">
      <div>
        <hr />
        <b-container fluid="md">
          <div>
            <h1>
              <strong>
                Choose a few topics that describe your group's
                interests.</strong
              >
            </h1>
            <p class="text-muted">
              Be specific! This will help us promote your group to the right
              people. You can choose up to 15 topics.
            </p>
          </div>
          <div>
            <b-form-tags v-model="topics" no-outer-focus class="mb-2">
              <template
                v-slot="{
                  tags,
                  inputAttrs,
                  inputHandlers,
                  addTag,
                  removeTag,
                }"
              >
                <b-input-group class="mb-2">
                  <b-form-input
                    v-bind="inputAttrs"
                    v-on="inputHandlers"
                    placeholder="Enter topics"
                    class="form-control"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button @click="addTag()" variant="danger">+</b-button>
                  </b-input-group-append>
                </b-input-group>
                <div class="d-inline-block" style="font-size: 1.5rem">
                  <b-form-tag
                    v-for="tag in tags"
                    @remove="removeTag(tag)"
                    :key="tag"
                    :title="tag"
                    variant="danger"
                    class="mr-1"
                    >{{ tag }}</b-form-tag
                  >
                </div>
              </template>
            </b-form-tags>
          </div>
        </b-container>
        <hr />
      </div>
    </tab-content>

    <tab-content icon="ti-check">
      <div>
        <hr />
        <b-container fluid="md">
          <div>
            <h1>
              <strong> What will your group’s name be?</strong>
            </h1>
            <p class="text-muted">
              Choose a name that will give people a clear idea of what the group
              is about. Feel free to get creative! You can edit this later if
              you change your mind.
            </p>
          </div>
          <div>
            <div>
              <p>Event Name:</p>
              <h2>
                <strong>{{ eventName }}</strong>
              </h2>
              <b-form-input
                class="mr-sm-2"
                placeholder="Event name?"
                v-model="eventName"
                size="lg"
              ></b-form-input>
            </div>
          </div>
        </b-container>
        <hr />
      </div>
    </tab-content>

    <tab-content icon="ti-check">
      <div>
        <hr />
        <b-container fluid="md">
          <div>
            <h1>
              <strong>Now describe what your group will be about</strong>
            </h1>
            <p>
              People will see this when we promote your group, but you’ll be
              able to add to it later, too.
            </p>
            <p class="text-muted">What's the purpose of the group?</p>
            <p class="text-muted">Who should join?</p>
            <p class="text-muted">What will you do at your events?</p>
          </div>
          <div>
            <div>
              <b-form-textarea
                placeholder="Event Description"
                rows="5"
                no-resize
              ></b-form-textarea>
            </div>
          </div>
        </b-container>
        <hr />
      </div>
    </tab-content>

    <div class="loader" v-if="loadingWizard"></div>
    <div v-if="errorMsg">
      <span class="error">{{ errorMsg }}</span>
    </div>
  </form-wizard>
</template>

<script>
export default {
  data() {
    return {
      loadingWizard: false,
      errorMsg: null,
      selectedLocation: "",
      locations: ["Hyderabad", "Mumbai", "Bangalore", "Delhi"],
      topics: ["Vue", "Nisum", "Full Stack"],
      eventName: "",
    };
  },
  methods: {
    onComplete: function () {
      this.$bvToast.toast("Event Added !!!", {
        title: "Yayy",
      });
      setTimeout(() => {
        this.$router.push("/home");
      }, 1500);
    },
    setLoading: function (value) {
      this.loadingWizard = value;
    },
    handleValidation: function (isValid, tabIndex) {
      console.log("Tab: " + tabIndex + " valid: " + isValid);
    },
    handleErrorMessage: function (errorMsg) {
      this.errorMsg = errorMsg;
    },
  },
};
</script>

<style>
span.error {
  color: #e74c3c;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
</style>
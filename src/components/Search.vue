<template>
  <div>
    <div class="d-flex justify-content-center">
      <b-navbar>
        <b-nav-form class="">
          <b-form-input
            class="mr-sm-2"
            placeholder="Search Events"
          ></b-form-input>

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

          <b-button class="mr-sm-2" variant="danger"
            ><b-icon icon="joystick"></b-icon
          ></b-button>

          <b-button
            variant="danger"
            size="lg"
            pill
            class="my-2 my-sm-0"
            type="submit"
            >Search</b-button
          >
        </b-nav-form>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      selectedLocation:"",
      locations: ["Hyderabad", "Mumbai", "Bangalore", "Delhi"],
    };
  },
};
</script>

<style>
</style>
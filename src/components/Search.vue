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
            ><b-icon icon="joystick" @click="geoLocator"></b-icon
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
      selectedLocation: "",
      locations: ["Hyderabad", "Mumbai", "Bangalore", "Delhi"],
    };
  },
  methods: {
    geoLocator() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.getAddressFrom(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("your browser does not support geolocation API");
      }
    },
    getAddressFrom(lat, long) {
      //Create query for the API.
      var latitude = "latitude=" + lat;
      var longitude = "&longitude=" + long;
      var query = latitude + longitude + "&localityLanguage=en";
      var vm = this;
      
      const Http = new XMLHttpRequest();
    
      var bigdatacloud_api =
        "https://api.bigdatacloud.net/data/reverse-geocode-client?";

      bigdatacloud_api += query;

      Http.open("GET", bigdatacloud_api);
      Http.send();
      Http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          vm.selectedLocation = myObj.locality + "," + myObj.countryName;
        }
      };
    },
  },
};
</script>

<style>
</style>
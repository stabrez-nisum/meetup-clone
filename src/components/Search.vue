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
            v-model="text"
            placeholder="Location"
          ></b-form-input>

          <b-button class="mr-sm-2"><b-icon icon="joystick"></b-icon></b-button>

          <b-button variant="success" class="my-2 my-sm-0" type="submit"
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
};
</script>

<style>
</style>
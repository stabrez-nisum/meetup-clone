<template>
  <div>
    <template v-if="isUser">
      <EventsList :eventList="globalEvents" />
      <hr />
      <div
        v-for="(eventCategory, categoryIndex) in Object.keys(categoryEvents)"
        :key="categoryIndex"
      >
        <EventsList
          :eventList="categoryEvents[eventCategory][0]"
          :heading="eventCategory"
        />
        <hr />
      </div>
    </template>
    <template v-else>
      <img
        src="../../public/meetup-landing-page.jpg"
        class="landing-image"
        alt=""
      />
      <Search></Search>
      <EventsList :eventList="globalEvents" />
    </template>
  </div>
</template>

<script>
import Search from "./Search.vue";
import EventsList from "./EventsList.vue";
import GlobalEvents from "../../public/global_events.json";
import CategoryEvents from "../../public/category_events.json";

export default {
  name: "Home",
  components: {
    Search,
    EventsList,
  },
  data() {
    return {
      globalEvents: [],
      category_events: [],
    };
  },
  computed: {
    isUser() {
      // Based on condition verify user
      return this.$store.state.isUserLogin;
    },
  },
  mounted() {
    this.globalEvents = GlobalEvents;
    this.categoryEvents = CategoryEvents;
  },
};
</script>

<style>
.landing-image {
  width: 100%;
  height: 70%;
  margin-top: -500px;
}
</style>
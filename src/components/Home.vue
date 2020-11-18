<template>
  <div>
    <img
      src="../../public/meetup-landing-page.jpg"
      class="landing-image"
      alt=""
    />
    <Search></Search>
    <EventsList :eventList="globalEvents" />
  </div>
</template>

<script>
import Search from "./Search.vue";
import EventsList from "./EventsList.vue";
import GlobalEvents from "../../public/global_events.json";

export default {
  name: "Home",
  components: {
    Search,
    EventsList,
  },
  data() {
    return {
      globalEvents: [],
    };
  },
  mounted() {
    this.globalEvents = GlobalEvents;
  },
};
</script>
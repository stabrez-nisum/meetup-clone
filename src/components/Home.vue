<template>
  <div>
    <img
      src="../../public/meetup-landing-page.jpg"
      class="landing-image"
      alt=""
    />
    <Search></Search>
    <Events :eventList="globalEvents" />
  </div>
</template>

<script>
import Search from "./Search.vue";
import Events from "./Events.vue";
import GlobalEvents from "../../public/global_events.json";

export default {
  name: "Home",
  components: {
    Search,
    Events,
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
<template>
  <div>
      <img
      src="../../public/meetup-landing-page.jpg"
      class="landing-image"
      alt=""
    />
    <Search></Search>
    <Events />
    
       
  </div>
</template>

<script>
import Search from "./Search.vue";
import Events from "./Events.vue";

export default {
  name: "Home",
  components: {
    Search,
    Events,
    
  },
};
</script>